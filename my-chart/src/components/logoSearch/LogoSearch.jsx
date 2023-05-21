import React from 'react'
 import {AiOutlineSearch} from "react-icons/ai"
import Logo from "../images/logo.png"
import "./LogoSearch.css"

const LogoSearch = () => {
  return (
<div className="LogoSearch">
<img src={Logo} alt="" width={"5%"} />
<div className="Search">
    <input type="text" placeholder='#Explore'/>
    <div className="s-icon">
     
    <AiOutlineSearch/>
    </div>
</div>
</div>
  )
}

export default LogoSearch