import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import "./ProfileSide.css"
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowerCard from '../FollowerCard/FollowerCard'


const ProfileSide = () => {
  return (
    <div className="profileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowerCard/>
    </div>
  )
}

export default ProfileSide