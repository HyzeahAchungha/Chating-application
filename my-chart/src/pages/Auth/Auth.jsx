import React, { useState } from 'react'
import "./Auth.css"
import logo from "../../components/images/logo.png"
import { useDispatch } from "react-redux"
import { logIn, signUp } from '../../actions/AuthAction'



const Auth = () => {
    const dispatch = useDispatch()
    const [isSignUp, setIsSignUp] = useState(true)
    const [data, setData] = useState({
        firstname: "",
        lasttname: "",
        password: "",
        Confirmpass: "",
        username: ""
    })
    const [confirmPass, setConfirmPass] = useState(true)

    const handelSumbit = (e) => {
        e.preventDefault()

        if (isSignUp) {
            data.password === data.Confirmpass ?
                dispatch(signUp(data)) : setConfirmPass(false)



        }
        else {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmPass(true)
        setData({
            firstname: "",
            lasttname: "",
            password: "",
            Confirmpass: "",
            username: ""
        })
    }

    const handelChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    return (
        <div className="Auth">
            {/* Left side */}
            <div className="a-left">
                <img src={logo} alt="" width={"10%"} />
                <div className="Webname">
                    <h1>HA Media</h1>
                    <h6>Explore the ideas throughout the world</h6>

                </div>

            </div>

            {/* Right side */}
            <div className="a-right">

                <form action="" className="infoForm  authForm" onSubmit={handelSumbit}>

                    <h3> {isSignUp ? "Sign up" : "Log In"}</h3>


                    {isSignUp &&

                        <div>


                            <input type="text" placeholder='First Name'
                                className='infoInput' name="firstname"
                                onChange={handelChange}
                                value={data.firstname}
                            />

                            <input type="text" placeholder='Last Name'
                                className='infoInput' name="lasttname"
                                onChange={handelChange}
                                value={data.lasttname}
                            />

                        </div>
                    }


                    <div>
                        <input type="text"
                            className='infoInput' name="username" placeholder='Username'
                            onChange={handelChange}
                            value={data.name}
                        />
                    </div>

                    <div>
                        <input type="password" className="infoInput"
                            name="password" placeholder='password'
                            onChange={handelChange}
                            value={data.password}
                        />

                        {isSignUp &&

                            <input type="password" className="infoInput"
                                name="Confirmpass" placeholder='Confirmpassword'
                                onChange={handelChange}
                                value={data.Confirmpass}
                            />
                        }


                    </div>
                    <span style={{ display: confirmPass ? "none" : 'block', color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>* Confirm Password is not same</span>

                    <div>
                        <span style={{ fontSize: "12px", cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>
                            {isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up."}</span>
                    </div>
                    <button className="button  infoButton" type='submit'>{isSignUp ? "Signup" : "Log In"}</button>

                </form>
            </div>


        </div>
    )
}


export default Auth