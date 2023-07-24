import React, { useState } from 'react'
import "./RightSide.css"
import { IoIosNotificationsOff } from "react-icons/io"
import { FaRegComments } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from "../ShareModal/ShareModal"
import { Link } from 'react-router-dom'
import Home from '../images/home.png'
const RightSide = () => {

    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className='RightSide'>
            <div className="navIcons">
                <Link to='../home'>
                <img src={Home} alt="" />
                </Link>

                <IoIosNotificationsOff />
                <FaRegComments />
                <AiFillSetting />
            </div>
            <TrendCard />

            <button className='button r-button'
                onClick={() => setModalOpened(true)}
            >
                Share
            </button>
            <ShareModal
                modalOpened={modalOpened} setModalOpened={setModalOpened} />

        </div>
    )
}

export default RightSide