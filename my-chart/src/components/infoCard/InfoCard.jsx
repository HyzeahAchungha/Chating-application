import React, { useEffect, useState } from 'react'
import "./InfoCard.css"
import { MdEdit } from "react-icons/md"
import ProfileModal from '../profileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../Api/userRequest.js'
import { logOut } from '../../actions/AuthAction'

const InfoCard = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const [modalOpened, setModalOpened] = useState(false)
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)

            }
            else {
                console.log('fetching');
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                console.log(profileUser);

            }
        }
        fetchProfileUser()
    }, [user])

    const handleLogOut = () => {
        dispatch(logOut())
    }



    return (
        <div className="InfoCard">

            <div className="infoHead">
                <h4>profile Info</h4>
                {user._id === profileUserId ? (
                    <div>
                        <MdEdit
                            width='2rem'
                            height='1.2rem'
                            onClick={() => setModalOpened(true)}
                        />

                        <ProfileModal
                            modalOpened={modalOpened}
                            setModalOpened={setModalOpened}
                            data={user}
                        />

                    </div>
                ) :
                    (
                        ''
                    )}
            </div>

            <div className="info">
                <span>
                    <b>Status</b>
                    
                    </span>

                <span>{profileUser.relationship}</span>

            </div>

            <div className="info">
                <span>
                    <b>Lives in  </b>
                    </span>
                <span>{profileUser.livesin} </span>

            </div>

            <div className="info">
                <span>
                    <b> worksAt </b>
                    </span>
                <span>{profileUser.worksAt} </span>

            </div>
            <button className='button logout-button' onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default InfoCard