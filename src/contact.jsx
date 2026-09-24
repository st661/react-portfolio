import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css'

export default function Contact() {
    // Initialize the navigate function
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        // Prevent page refresh
        e.preventDefault();

        const formData = {
            firstname: firstname,
            lastname: lastname,
            phonenumber: phonenumber,
            email: email,
            message: message
        };

        // Save form data to localStorage
        localStorage.setItem("contactForm", JSON.stringify(formData));

        console.log("Form saved: ", formData);

        try {
            // Place my API submission logic here
            // await fetch('/api/submit', { method: 'POST', body: JSON.stringify({ firstname }) });

            console.log('Form submitted successfully!');
            // Redirect the user to the home page
            navigate('/');
        } catch (error) {
            console.error('Submission failed: ', error);
        }
    };

    return (
        <div class="contact">
            <br />
            <div class="contactform">
                {/* <form action="./components/Home" method="get"> */}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Contact Form</legend>
                        <div class="box">
                            <label for="FirstName" >First Name: </label><input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} class="textbox" id="firstname" placeholder="Enter your first name" />
                        </div>
                        <div class="box">
                            <label for="LastName">Last Name: </label><input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} class="textbox" id="lastname"  placeholder="Enter your last name" />
                        </div>
                        <div class="box">
                            <label for="PhoneNumber" name="Phone Number">Phone Number: </label><input type="tel" name="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} class="textbox" id="phonenumber" placeholder="Enter your phone number" />
                        </div>
                        <div class="box">
                            <label for="Email">E-mail: </label><input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} class="textbox" id="email"  placeholder="Enter your email address" />
                        </div>
                        <div class="box">
                            <label for="Message"class="message">Message: </label><textarea name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} class="textbox" id="message" placeholder="Enter your message" />
                        </div>
                    </fieldset>
                    <input type="submit" class="submit"/>
                    <input type="reset" class="reset" />
                </form>
            </div>

            <br />
            <div class="contactinfo">
                <p>Shiori Takeda</p>
                <p>(647) 371-1620</p>
                <p>stakeda@my.centennialcollege.ca</p>
            </div>
        </div>
    )
}