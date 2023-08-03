import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { userChats } from '../../Api/ChatRequests'
import LogoSearch from "../../components/logoSearch/LogoSearch"
import { useSelector } from 'react-redux'
import Conversation from '../../components/conversation/Conversation'
import pinkMessages from '../../components/images/pink.png'
import notification from "../../components/images/noti.png"
import { AiFillSetting } from "react-icons/ai"
import { Link } from 'react-router-dom'
import Home from '../../components/images/home.png'
import ChatBox from '../../components/ChatBox/ChatBox'
import { io } from 'socket.io-client'
import { useRef } from 'react'


const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData)

  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [sendMessage, setSendMessage] = useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)

  const socket = useRef()


  //send message to the socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage)
    }
  }, [sendMessage])


  //receive messages to the socket server

  useEffect(() => {
    socket.current = io('http://localhost:8800')
    socket.current.emit("new-user-add", user._id)
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users)

    })
  }, [user])


  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessage(data)
    })

  }, [])

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id)
        setChats(data)
        // console.log(data);

      } catch (error) {
        console.log(error);
      }

    }
    getChats()
  }, [user])

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="Chat">

      {/* Left Side */}

      <div className="Left-side-chat">
        <LogoSearch />
        <div className='Chat-container'>

          <h2>Chats</h2>

          <div className='Chat-list'>

            {chats.map((chat) => (

              <div onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)} />

              </div>

            ))}

          </div>

        </div>


      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="navIcons">
            <Link to='../home'>
              <img src={Home} alt="" />
            </Link>

            <Link to='../chat'>
              <img src={pinkMessages} alt="" width={"50%"} />
            </Link>

            <img src={notification} alt="" width={"50%"} />
            <AiFillSetting />
          </div>

          {/* {chat body}  */}

          <ChatBox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} receiveMessage={receiveMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat
