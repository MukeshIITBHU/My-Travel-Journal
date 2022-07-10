import React from "react";
import "./Navbar.css"
import Logo from "./images/Fill 213.png"
export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={Logo} />
            <h1>My Travel Journal</h1>
        </nav>
    )
}