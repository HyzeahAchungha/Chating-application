import React from 'react'
import Cover from "../images/cover.jpg"
import Prop from "../images/prop.png"
import "./ProfileCard.css"



const ProfileCard = () => {

    const profilePage = true


    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Prop} alt="" />
            </div>
            <div className="ProfileName">
                <span>Hyzeah A</span>
                <span>Full Stack Developer(MERN)</span>
            </div>

            <div className="followingStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>
                            6,890
                        </span>
                        <span>Followings</span>
                    </div>
                    <div className="vl">
                    </div>

                    <div className="follow">
                        <span>
                            1
                        </span>
                        <span>Followers</span>
                    </div>
                    {profilePage && (
                        <>
                            <div className="vl">

                            </div>

                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>

                            </div>
                        </>
                    )}
                </div>
                <hr />

            </div>
            {profilePage ? '':
                < span >
                My Profile
        </span>
        }
            

        </div >
    )
}

export default ProfileCard