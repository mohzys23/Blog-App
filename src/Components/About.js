import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Subscription from './Subscription';
import Footer from './Footer';
import TopNav from './TopNav';

class About extends Component {
    render() {
        return(
        <div>
            <div>
                <TopNav />
                <BottomNav />
            </div>

            <div className="about">
            <h3>About Us</h3>
            </div>

            <div>
                <Subscription />
                <Footer />
            </div>
        </div>
        );
    }
}


export default About;