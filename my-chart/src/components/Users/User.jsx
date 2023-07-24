
import { useState } from 'react';
import { followUser, unfollowUser } from '../../actions/userAction';
import './User.css'
import { useDispatch, useSelector } from 'react-redux'

const User = ({ person }) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData);

    const [following, setFollowing] = useState(
        person.followers.includes(user._id)
    );
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER


    const handleFollow = (e) => {
        e.preventDefault(e)
        following ?
            dispatch(unfollowUser(person._id, user)) :
            dispatch(followUser(person._id, user))

        setFollowing((prev) => !prev)
    }

    return (
        <div className="follower">
            <div className='user'>
                <img src={
                    person.coverPicture
                        ? serverPublic + person.profilePicture
                        : serverPublic + "defaultProfile.png"}
                    alt=""
                    className='personImg' />
                <div className="name">
                    <span>{person.firstname}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={following ? "button fc-button UnfollowButton " : "button fc-button"} onClick={handleFollow}>{following ? "Unfollow" : "Follow"}</button>
        </div>
    )

}

export default User