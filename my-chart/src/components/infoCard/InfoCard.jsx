import React, { useState } from 'react'
import "./InfoCard.css"
import { MdEdit } from "react-icons/md"
import ProfileModal from '../profileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className="InfoCard">

            <div className="infoHead">
                <h4>Your Info</h4>

                <div>
                    <MdEdit
                        onClick={() => setModalOpened(true)} />
                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
                </div>

            </div>

            <div className="info">
                <span><b>Status  </b></span>

                <span>Single </span>

            </div>

            <div className="info">
                <span><b>Lives in  </b></span>
                <span>Cameroon </span>

            </div>

            <div className="info">
                <span><b>Volunteer at  </b></span>
                <span>DataGirl </span>

            </div>
            <button className='button logout-button'>Logout</button>
        </div>
    )
}

export default InfoCard