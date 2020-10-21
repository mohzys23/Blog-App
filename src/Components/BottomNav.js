import React, { Component } from 'react';
import { Link }  from "react-router-dom";
import './BottomNav.scss';

class BottomNav extends Component {
    render() {
        return (
            <div className="nav2">

            <div className="arrow">
       <p> &#8594; </p>
             </div> 

            <div className="nav1-sub1">
             <nav>
               <ul>
                   <li><Link to='/tech-latest'>Latest in Tech</Link></li>
                   <li><Link to='/News'>News</Link></li>
                   <li><Link to='/signup'>Signup</Link></li>
               </ul>
           </nav> 
            </div>

</div>
        )
    }
}

export default BottomNav;