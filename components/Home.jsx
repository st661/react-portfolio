import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div class="home">
            <h1>Welcome to my portfolio!</h1>
            <p>Thank you for visiting my portfolio. <br />Please explore the sections below to learn more about my background and experience: </p>
            <br />
            <ul class="links">
                <li><Link to="/"><p><img src="./dist/images/dogpad.png" />Home</p></Link></li><div class="bar" />
                <li><Link to="/about"><p><img src="./dist/images/dogpad.png" />About Me</p></Link></li><div class="bar" />
                <li><Link to="/project"><p><img src="./dist/images/dogpad.png" />Projects</p></Link></li><div class="bar" />
                <li><Link to="/education"><p><img src="./dist/images/dogpad.png" />Education</p></Link></li><div class="bar" />
                <li><Link to="/service"><p><img src="./dist/images/dogpad.png" />Services</p></Link></li><div class="bar" />
                <li><Link to="/contact"><p><img src="./dist/images/dogpad.png" />Contact Me</p></Link></li>
            </ul>

            <br />
            <h1>Mission Statement</h1>
            <div class="statement">
                <p>My goal is to support people through IT skills; building websites, addressing internet security issues, and creating practial, user-friendly web applications. I am continually learning and improving, and I look forward to contributing these skills to help others in the near future✌️</p>
            </div>
        </div>
    );
}