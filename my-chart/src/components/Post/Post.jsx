import React, { useState } from 'react'
import "./Post.css"
import NotLike from '../images/notlike.png'
import Comments from '../images/comment.png'
import Share from '../images/share.png'
import { useSelector } from 'react-redux'
import Like from '../images/like.png'
import { likePost } from '../../Api/postRequest'


const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)
  const handleLike = (e) => {
    e.preventDefault()
    setLiked((prev) => !prev)
     likePost(data._id, user._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }


  return (
    <div className='Post'>
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

      <div className='PostReact'>
        <img src={liked ? Like : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
        <img src={Comments} alt="" />
        <img src={Share} alt="" />


      </div>
      <span style={{ color: "var(--gray)", fontsize: "12px" }}>{likes} likes</span>

      <div className='detail'>
        <span><b>{data.name}</b></span>
        <span>{data.desc}</span>
      </div>




    </div>
  )
}

export default Post