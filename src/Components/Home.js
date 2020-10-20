import React, { Component } from 'react';
import Header from './Header';
import IntroMessage from './IntroMessage';
import TopCarousel from './TopCarousel';
import HomeSection1 from './HomeSectoion1';
import Footer from './Footer';
import Subscription from './Subscription';


class Home extends Component {
    render() {
        return(
            <div className="wrapper">
<div>
    <Header />
</div>

<div>
    <IntroMessage />
</div>

<div>
    <HomeSection1 />
</div>

<div className="">
    <TopCarousel />
</div>

<div>
    <Subscription />
</div>

<div>
    <Footer />
</div>

            </div>
        )
    }
}

export default Home;