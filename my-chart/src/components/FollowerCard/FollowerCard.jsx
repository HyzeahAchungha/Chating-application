import React, { useEffect, useState } from 'react'
import "./FollowerCard.css"
import User from '../Users/User'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../Api/userRequest'



const FollowerCard = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [persons, setPersons] = useState([])

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser();
            setPersons(data)
            console.log(data);
        }

        fetchPersons()
    }, [])


    return (
        <div className="FollowersCard">
            <h3>People you may know</h3>

            { persons.map((person, id,) => {
                    if (person._id !== user._id) {
                        return (
                            <User person={person} key={id} />

                        )
                    }

                })
            }
        </div>
    )
}

export default FollowerCard