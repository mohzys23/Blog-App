import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AnimatedSocialIcon} from 'react-animated-social-icons';
import './HomeSection1.scss'; 


class HomeSection1 extends Component {
    render() {
        return(

           

              <div className="trendwrapper">

             <h3><AnimatedSocialIcon brandName="slackAlt" animation="shrink" defaultColor = "#1b262c" hoverColor = "#222831" animationDuration={0.8} width="3em" style={{padding: '.5em'}} /> Trend in tech</h3>

                   <div className = "trendinnerwrapper" >
                 
                  <div className="trend-content">
                   <div className="trend-img">image here</div>
                  
                  <div className="trend-text">
                  <h5>Moses Ubah</h5>
                  <h6>All in one piece of code.</h6>
                  <p>19/10/2020</p>
                  <div className="trend-socials">

                      <AnimatedSocialIcon brandName="twitter" url="https://github.com/meko-deng/react-animated-social-icons" animation="bounce" defaultColor="709fb0" hoverColor="" animationDuration={0.8} style={{padding: '.5em'}} />

                      <AnimatedSocialIcon brandName="facebook" url="https://github.com/meko-deng/react-animated-social-icons" animation="bounce" defaultColor = "709fb01f3c88" hoverColor = "1f3c88" animationDuration={0.8} style={{padding: '.5em'}} />

                      <AnimatedSocialIcon brandName="instagram" url="https://github.com/meko-deng/react-animated-social-icons" animation="bounce" defaultColor="#aa4b6b" hoverColor="#c31432" animationDuration={0.8} style={{padding: '.5em'}} />

                  </div>
                  </div>


                  </div>

                  <div className="trend-content">
                   
                <div className="trend-img">image here</div>
                <div className="trend-text">
                  <h5>First Last</h5>
                  <h6>Post title</h6>
                  <p>post date</p>                  
                  <div className="trend-socials">
                     <AnimatedSocialIcon
    brandName = "twitter"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="709fb0"
    hoverColor=""
    animationDuration={0.8}
    style={{padding: '.5em'}}
    />

    <AnimatedSocialIcon
    brandName = "facebook"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="709fb01f3c88"
    hoverColor="1f3c88"
    animationDuration={0.8}
    style={{padding: '.5em'}}
    />

    <AnimatedSocialIcon
    brandName = "instagram"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="#aa4b6b"
    hoverColor="#c31432"
    animationDuration={0.8}
    style={{padding: '.5em'}}
    />

</div>
                  </div>

                  </div>

                  <div className="trend-content">
                   <div className="trend-img">image here</div>
                   <div className="trend-text">
                  <h5>First Last</h5>
                  <h6>Post title</h6>
                  <p>post date</p>                  <div className="trend-socials">
                     <AnimatedSocialIcon
    brandName = "twitter"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="709fb0"
    hoverColor=""
    animationDuration={0.8}
    style={{padding: '.5em'}}
    />

    <AnimatedSocialIcon
    brandName = "facebook"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="709fb01f3c88"
    hoverColor="1f3c88"
    animationDuration={0.8}
    style={{padding: '.5em'}}
    />

    <AnimatedSocialIcon
    brandName = "instagram"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="#aa4b6b"
    hoverColor="#c31432"
    animationDuration={0.8}
    style={{padding: '.5em'}}
    />

</div>


                  </div>


                 </div>

            </div>
<Link to='./tech-trend'><button>See more tech trends</button></Link>
         </div>
        );
    }
}

export default HomeSection1;