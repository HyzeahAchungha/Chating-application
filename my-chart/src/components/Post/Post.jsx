import React from 'react'
import "./Post.css"
import { FaRegCommentDots } from "react-icons/fa"
import { BiShare } from "react-icons/bi"
import { AiFillHeart } from "react-icons/ai"
import { AiFillDislike } from "react-icons/ai"


const Post = ({ data }) => {
  return (
    <div className='Post'>
      <img src={data.img} alt="" />

      <div className='PostReact'>
        <AiFillHeart />
        <FaRegCommentDots />
        <BiShare />

        <AiFillDislike />

      </div>
      <span style={{ color: "var(--gray)", fontsize: "12px" }}>{data.Likes} likes</span>

      <div className='detail'>
        <span><b>{data.name}</b></span>
        <span>{data.desc}</span>
      </div>




    </div>
  )
}

export default Post