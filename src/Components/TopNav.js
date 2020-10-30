import React, { Component } from 'react';
import { Link }  from "react-router-dom";
import './TopNav.scss';
import Toggle from './Toggle';


class TopNav extends Component {
    render() {
        return (
            <div className="nav1">
                    <div className="logo">
                <Link to="/">TBlog</Link>
            </div>
            <div className="nav1-sub1">
            <nav>
               <ul>
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/login'>Login</Link></li>
               </ul>
           </nav> 
            </div>

           

</div>
        )
    }
}

export default TopNav;