import React, { Component } from 'react';
import './Header.scss';
import TopNav from './TopNav';
import BottomNav from './BottomNav'

class Header extends Component {
    render() {
        return (
<div className="Header">



<div className="top-nav">

   

    <div className="top-nav-1">
      <TopNav />
    </div>

</div>
   
<div className="bottom-nav">

 <div className="top-nav-1">
      <BottomNav />
    </div>
</div>



</div>
        )
    }
}

export default Header;
