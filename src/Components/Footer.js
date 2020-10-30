import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AnimatedSocialIcon} from 'react-animated-social-icons';
import './Footer.scss';


class Footer extends Component{
    render() {
        return(

        <div className="footer">
                    
            <div className="nav1-sub1">
            <nav>
               <ul>
                   <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                   <li><Link to='/aboutus'>About-us</Link></li>
                   <li><Link to='/learn-tech'>Learn Tech</Link></li>
                    <li className="footer-logo"><Link to="/">TBlog</Link></li>
                   <li><Link to='/tech-books'>Tech Books</Link></li>
                   <li><Link to='/meet-team'>Meet Team</Link></li>
                   <li><Link to='/contact'>Contact</Link></li>

               </ul>
           </nav> 

           <div className="footer-social">
                      <AnimatedSocialIcon brandName="facebook" url="https://github.com/meko-deng/react-animated-social-icons" animation="sink" defaultColor="grey" hoverColor="#1f3c88" animationDuration={0.8} style={{padding: '2em', width: '2em'}} />
                    <AnimatedSocialIcon brandName="twitter" url="https://github.com/meko-deng/react-animated-social-icons" animation="sink" defaultColor="grey" hoverColor="#709fb0" animationDuration={0.8} style={{padding: '2em', width: '2em'}} />
                      <AnimatedSocialIcon brandName="instagram" url="https://github.com/meko-deng/react-animated-social-icons" animation="sink" defaultColor="grey" hoverColor="#aa4b6b" animationDuration={0.8} style={{padding: '2em', width: '2em'}} />
                    <AnimatedSocialIcon brandName="linkedin" url="https://github.com/meko-deng/react-animated-social-icons" animation="sink" defaultColor="grey" hoverColor="white" animationDuration={0.8} style={{padding: '2em', width: '2em'}} />

           </div>

           <div className="rights">
               <h6>&copy; 2020, Blog. All right reserved</h6>
               <p>Credit- Ubah Moses</p>
           </div>


           </div>
        </div>
        );
    }
}


export default Footer;