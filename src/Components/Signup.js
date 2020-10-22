import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';
import Footer from './Footer';
import './Signup.scss';
import TopNav from './TopNav';





function Signup () {

    
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [fullname, setFullname] = useState("");
const [email, setEmail] = useState("");

const changeUsername = (event) => {
    setUsername(event.target.value);
};

const changePassword = (event) => {
    setPassword(event.target.value);
};

const changeFullname = (event) => {
    setFullname(event.target.value);
};

const changeEmail = (event) => {
    setEmail(event.target.value);
};


const onSignup = (event) => {
alert(`Hello, your username is: ${username}. \nYour Password is ${password}. \n Please click ok to login and use full weather access.`, <Link to="/" style={{textDecoration:'none', color: 'white'}}>Home</Link>);
    event.preventDefault();
}; 


        return(

            
            <div>
                <div>
                    <TopNav />
                    <BottomNav />
                </div>

                <div className="signup-form">

                <h4>Signup</h4>
                <h6>Create your account here</h6>
                <form>
                     <input type = "text" placeholder = "Full Name" value={fullname} onChange={changeFullname} label="fullname" />
                    <br />
                <input type="text" placeholder="Username" value={username} onChange={changeUsername} />
                    <br />
                   <input type="email" placeholder="you@example.com" value={email} onChange={changeEmail} />
                    <br />
                    <input type="password" placeholder="Enter password" value={password} onChange={changePassword}/>
                    <br />
                    <button onClick={onSignup}>Signup</button>
                    <p>Already have an account? <Link to='./login'>Login</Link></p>

                </form>
<hr />
                </div>

                <div>
                    
                    <Footer />
                </div>
            </div>
        );
    
}

export default Signup;