import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Subscription from './Subscription';
import TopNav from './TopNav';
import Footer from './Footer';
import './Contact.scss';


class Contact extends Component {
    render() {
        return (
            <div>

            <div>
                <TopNav />
                <BottomNav />
            </div>
<div className="contact">
                <h4>Get in Touch</h4>
                <p>How can we serve you? Let's talk about what you have in mind.</p>
                <form className="">
                <input type="text" placeholder="Full Name" /><input type="email" placeholder="name@exmaple.com" />
                <br />
                <label className="textarea"><input type="textarea" placeholder="Tell us what you want" /></label>
                <br />
                <button>Submit</button>
                </form>
</div>
                

<div>
    <Subscription />
    <Footer />
</div>
            </div>
        );
    }
}

export default Contact;