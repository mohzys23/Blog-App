import React, { Component } from 'react';
import './IntroMessage.scss';
import { Link } from "react-router-dom";

class IntroMessage extends Component {
    render() {
        return(

            <div className="intromessage">
                    <div className="introh3">
                        <h3>Tech news around the world</h3>
                    </div>
                        <div className="introp">
                            <p>We bring the best of tech and tech entertainment news to you and also tech articles and experience of software developers and engineers.</p>
                        </div>

                    <div className="dropdown">
                        <div className="dropdown2">
                                <p className="dropbtn2">Resources</p>
                                <div className="dropdown-content2">
                                <Link to='/'>Tech books</Link>
                                <Link to='/'>Learn Tech</Link>
                                </div>
                        </div>

                        <div className = "dropdown3" >
                            <p className="dropbtn3">more</p>
                            <div className="dropdown-content3">
                                <Link to='/contact'>Contact</Link>
                                 <Link to='/aboutus'>About-us</Link>
                                <Link to='/privacy-policy'>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>

        </div>

        );
  }
}

export default IntroMessage;