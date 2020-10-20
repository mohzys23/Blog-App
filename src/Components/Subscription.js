import React, { Component } from 'react';
import './Subscription.scss';



class Subscription extends Component {
    render() {
        return(

            <div className="more-info">

            <h4>Stay up to date</h4>
            <p>Get the latest update from our platform directly to your email.</p>
                    <form method="">
                      <input type="search" aria-label="search" placeholder="Enter email address" />
                      <button>Subscribe</button>
                    </form>
      
            </div>
        );
    }
}

export default Subscription;