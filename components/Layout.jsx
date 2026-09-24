import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'

export default function Layout() {
    return (
        <div>
            <div class="topcolor">
                <h1>Portfolio</h1>
            </div>
            <nav class="navbar">
                <ul>
                    <li><Link to="/"><p><img src="./dist/images/WolfLogo.png" />Home</p></Link></li><div class="bar" />
                    <li><Link to="/about"><p><img src="./dist/images/WolfLogo.png" />About Me</p></Link></li><div class="bar" />
                    <li><Link to="/project"><p><img src="./dist/images/WolfLogo.png" />Projects</p></Link></li><div class="bar" />
                    <li><Link to="/education"><p><img src="./dist/images/WolfLogo.png" />Education</p></Link></li><div class="bar" />
                    <li><Link to="/service"><p><img src="./dist/images/WolfLogo.png" />Services</p></Link></li><div class="bar" />
                    <li><Link to="/contact"><p><img src="./dist/images/WolfLogo.png" />Contact Me</p></Link></li>
                </ul>
            </nav>
            <hr />
        </div>
    )
}