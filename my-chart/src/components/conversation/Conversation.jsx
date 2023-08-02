import React, { useEffect, useState } from 'react'
import { getUser } from '../../Api/userRequest'


const Conversation = ({ data, currentUserId }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {

    const userId = data.members.find((id) => id !== currentUserId)

    const getUserData = async () => {
      const { data } = await getUser(userId)
      setUserData(data)
      console.log(data);
    }

    getUserData()

  }, [])//put this 'userData'

  return (
    <>
      <div className="follower conversation">
        <div>
           <div className="online-dot"></div>
          <img
            src={userData?.profilePicture? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px",borderRadius:"50%"}}
           
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.firstname} {userData?.lastname}</span>
            <span style={{color: "#51e200"}}> Online</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  )
}

export default Conversation