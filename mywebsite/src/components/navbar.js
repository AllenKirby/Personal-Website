import React from "react";
import './css/navbar.css';

const navbar = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="#section1">Home</a></li>
                    <li><a href="#section2">About</a></li>
                    <li><a href="#section3">Skills</a></li>
                    <li><a href="#section4">Portfolio</a></li>
                    <li><a href="#section5">About Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default navbar;