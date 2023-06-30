import React, { useState,  useRef } from 'react'
import Prop from "../images/prop.png"
import "./PostShare.css"
import { FcAddImage } from "react-icons/fc"
import { GrCirclePlay } from "react-icons/gr"
import { GrLocation } from "react-icons/gr"
import { GrFormSchedule } from "react-icons/gr"
import { FaTimesCircle } from "react-icons/fa"
import {useSelector} from 'react-redux'




const PostShare = () => {
  const {user}=useSelector((state)=>state.authReducer.authData)

  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const onImageChangge = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]

      setImage(img )
    }
  }

  const handleSubmit=(e)=>{
e.preventDefualt()
const newPost={
  userId:user._id,

}
  }
  return (
    <div className='PostShare'>
      <img src={Prop} alt="" />
      <div>

        <input type="text" placeholder="What's happening" />
        <div className="PostOptions">
          <div className="Option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <FcAddImage />
            Photo
          </div>

          <div
            className="Option"
            style={{ color: "var(--video)" }}
          >
            <GrCirclePlay />
            Video
          </div>{""}

          <div
            className="Option"
            style={{ color: "var(--location)" }}
          >
            <GrLocation />
            Location
          </div>{''}

          <div
            className="Option"
            style={{ color: "var(--schedule)" }}
          >
            <GrFormSchedule />
            Schedule
          </div>
          <button className='button ps-button'
          onClick={handleSubmit}
          >
            Share
          </button>
          <div style={{ display: "none" }}>
            <input type="file" name='myImage' ref={imageRef} onChange={onImageChangge} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <img src={URL.createObjectURL(image)} alt="" />
            <FaTimesCircle onClick={() => setImage(null)}
            />
          </div>
        )}
      </div>

    </div>
  )
}

export default PostShare