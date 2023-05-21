import React from 'react'
import "./FollowerCard.css"
import { Follower } from '../../Data/FollowingData'
const FollowerCard = () => {
    return (
        <div className="FollowersCard">
            <h3>Who is following you</h3>
            {
                Follower.map((follower, id) => {
                    return (
                        <div className="follower">
                            <div>
                                <img src={follower.img} alt="" className='followerImg' />
                                <div className="name">
                                    <span>{follower.name}</span>
                                    <span>@{follower.username}</span>
                                </div>
                            </div>

                            <button className='button fc-button'>Follow</button>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default FollowerCard