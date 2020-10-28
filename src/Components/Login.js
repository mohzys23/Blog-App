import React, { Component } from 'react'
import { Link  } from "react-router-dom";
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import Footer from './Footer';

class Login extends Component {




    render() {
        return (
<div>
<div>
    <TopNav />
    <BottomNav />
</div>

<div className = "signup-form">

                <h4>Login</h4>
                <h6>Login your account below</h6>
                <form>
                    
                    <input type="text" placeholder="Username" />
                    <br />
                    <input type="password" placeholder="Enter password" />
                    <br />
                    <button>Signup</button>
                    <p>Already have an account? <Link to='tech-latest'>Login</Link></p>

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

export default Login;
