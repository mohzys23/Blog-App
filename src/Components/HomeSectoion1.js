import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AnimatedSocialIcon} from 'react-animated-social-icons';
import './HomeSection1.scss'; 
import Yahoo from '../Assets/Yahoo_Mobile.webp'
import TicTok from '../Assets/tiktok.webp';
import Samsung from '../Assets/samsung.webp';


class HomeSection1 extends Component {
    render() {
        return(

           

              <div className="trendwrapper">

             <h3><AnimatedSocialIcon brandName="slackAlt" animation="shrink" defaultColor = "#1b262c" hoverColor = "#222831" animationDuration={0.8} width="3em" style={{padding: '.5em'}} /> Trend in tech</h3>

                   <div className = "trendinnerwrapper" >
                 
                  <div className="trend-content">
                   <div className="trend-img"><img src={Yahoo} alt="" /></div>
                  
                  <div className="trend-text">
                  <h5>Verizon has launched its first Yahoo-branded smartphone with an aim to push its Yahoo Mobile service that was launched in March this year. The smartphone is made by ZTE, and called the Blade A3Y. The phone sports a 5.45-inch HD display, 2GB of RAM and 32GB of storage. There is a fingerprint sensor on the back and also comes with the face unlock feature. The smartphone runs on Android 10. Yahoo Mobile.</h5>
                  <h6> Yahoo Mobile Launches Its First Smartphone, the ZTE Blade A3Y</h6>
                  <p>19/10/2020</p>
                  <div className="trend-socials">

                      <AnimatedSocialIcon brandName="twitter" url="https://github.com/meko-deng/react-animated-social-icons" animation="bounce" defaultColor="709fb0" hoverColor="" animationDuration={0.8} style={{padding: '.5em'}} />

                      <AnimatedSocialIcon brandName="facebook" url="https://github.com/meko-deng/react-animated-social-icons" animation="bounce" defaultColor = "709fb01f3c88" hoverColor = "1f3c88" animationDuration={0.8} style={{padding: '.5em'}} />

                      <AnimatedSocialIcon brandName="instagram" url="https://github.com/meko-deng/react-animated-social-icons" animation="bounce" defaultColor="#aa4b6b" hoverColor="#c31432" animationDuration={0.8} style={{padding: '.5em'}} />

                  </div>
                  </div>


                  </div>

                  <div className="trend-content">
                   
                <div className="trend-img"><img src={TicTok} alt="" /></div>
                <div className="trend-text">
                  <h5> TikTok, which has at least 100 million in the United States and is one of the fastest - growing social platforms, is battling a Trump administration effort to ban the app because of its ties to China or put it in American hands.

                  The TikTok suit filed Wednesday seeks to move the
                  case from Texas to California, where Triller is based.The company is asking the court to rule that its app does not infringe Triller 's patents.

                  TikTok Rival Triller Says Made $20 Billion Bid With Centricus
                  for Assets
                      "A judicial declaration is necessary to resolve the real, immediate and justiciable controversy concerning these issues and to determine the respective rights of the parties regarding the... patent,"
                  TikTok 's lawyers wrote in the complaint.

                  Triller 's earlier lawsuit alleges that TikTok improperly used a patented system for synchronizing music videos with an audio track.</h5>
                  <h6>TikTok Countersues Rival Video App Triller in Patent Defence</h6>
                  <p>29/10/2020</p>                  
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
                   <div className="trend-img"><img src={Samsung} alt="" /></div>
                   <div className="trend-text">
                  <h5>Samsung has regained the top spot in global smartphone shipments in the third quarter of 2020, multiple research reports confirm. The South Korean company shipped nearly 80 million units in Q3, pushing China's Huawei (which shipped close to 50 million units) to the second spot ending its short-lived reign. Xiaomi beat Apple for the first time to enter the top three with close to 47 million units shipped. Apple lost momentum in the third quarter that ended in September and dropped to 42 million units despite robust growth in iPhone 11 sales, the reports say. The setback has been largely attributed to the delay in launching the iPhone 12 series that started shipping late in October.

The third quarter shipments indicate a strong recovery in global smartphone sales, according to IDC, Counterpoint, and Canalys reports. They unanimously agree that while the global smartphone shipments declined by close to 1 percent year-on-year, the shipments recovered significantly from the last quarter slump due to the import, export, and manufacturing challenges caused by the worldwide spread of COVID-19.</h5>
                  <h6>Samsung Regains Top Spot in Q3 Global Smartphone Shipments, Huawei Drops to Second and Xiaomi is Third: Analyst Reports</h6>
                  <p>29/10/2020</p>                  
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

            </div>
<Link to='./tech-trend'><button>See more tech trends</button></Link>
         </div>
        );
    }
}

export default HomeSection1;