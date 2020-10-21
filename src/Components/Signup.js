import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';
import Footer from './Footer';
import './Signup.scss';
import Subscription from './Subscription';
import TopNav from './TopNav';


class Signup extends Component {
    render() {
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
                    <input type="text" placeholder="Full Name" />
                    <br />
                    <input type="text" placeholder="Username" />
                    <br />
                    <input type="email" placeholder="you@example.com" />
                    <br />
                    <input type="password" placeholder="Enter password" />
                    <br />
                    <button>Signup</button>
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
}

export default Signup;