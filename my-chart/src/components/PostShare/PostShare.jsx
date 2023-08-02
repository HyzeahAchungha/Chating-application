import React, { useState, useRef } from 'react'
import "./PostShare.css"
import { FcAddImage } from "react-icons/fc"
import { GrCirclePlay } from "react-icons/gr"
import { GrLocation } from "react-icons/gr"
import { GrFormSchedule } from "react-icons/gr"
import { FaTimesCircle } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'


const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading)
  const { user } = useSelector((state) => state.authReducer.authData)
  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const dispatch = useDispatch()
  const desc = useRef()
  const onImageChangge = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]

      setImage(img)
    }
  }



  const reset = () => {
    setImage(null)
// e.preventDefault(e)
    desc.current.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }

    if (image) {
      const data = new FormData()
      const filename = Date.now() + image.name
      data.append("name", filename)
      data.append("file", image)
      newPost.image = filename
      console.log(newPost);

      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost))
    reset()
  }
  
  return (
    <div className='PostShare'>
      <img src={user.coverPicture? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
      <div>

        <input
          ref={desc}
          required
          type="text" placeholder="What's happening" />
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
            disabled={loading}
          >
            {loading ? "Uploading...." : "Share"}
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