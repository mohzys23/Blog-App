import React from 'react';
import { Link } from "react-router-dom";

function Logo() {
        return (
            <div className="logo">
                <Link to="/">TBlog</Link>
            </div>
        );
}

export default Logo;