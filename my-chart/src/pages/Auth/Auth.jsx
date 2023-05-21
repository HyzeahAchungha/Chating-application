import React from 'react'
import "./Auth.css"
import logo from "../../components/images/logo.png"

const Auth = () => {

    return (
        <div className="Auth">

            <div className="a-left">
                <img src={logo} alt="" width={"10%"} />
                <div className="Webname">
                    <h1>HA Media</h1>
                    <h6>Explore the ideas throughout the world</h6>

                </div>

            </div>

            {<Login />}
            {<SignUp/>}

        </div>
    )
}

function Login() {
    return (
        <div className="a-right">
            <form action="" className='infoForm authForm'>
                <h3>Log In</h3>

                <div>
                    <input type="text"
                        placeholder='Username'
                        className='infoInput'
                        name='username' />
                </div>

                <div>
                    <input type="Password"
                        placeholder='Password'
                        className='infoInput'
                        name='Password' />
                </div>

                <div>
                    <span style={{ fontSize: "12px" }}>
                        Don't have an account sign up
                    </span>
                </div>
                <button className="button  infoButton" type='submit'>Login</button>
            </form>
        </div>
    )
}

/* Signup form */

function SignUp() {
    return (
        <div className="a-right">

            <form action="" className="infoForm  authForm">

                <h3>Sign up</h3>

                <div>
                    <input type="text" placeholder='First Name'
                        className='infoInput' nme="firstname" />
                    <input type="text" placeholder='Last Name'
                        className='infoInput' nme="lasttname" />

                </div>

                <div>
                    <input type="text"
                        className='infoInput' name="username" placeholder='Usernames' />
                </div>

                <div>
                    <input type="text" className="infoInput"
                        name="password" placeholder='password' />
                    <input type="text" className="infoInput"
                        name="Confirmpass" placeholder='Confirmpassword' />

                </div>
                <div>
                    <span style={{ fontSize: "12px" }}>Already have an account. Login!</span>
                </div>
                <button className="button  infoButton" type='submit'>Signup</button>

            </form>
        </div>
    )
}

export default Auth