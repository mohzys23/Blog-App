import React from 'react';
import { Link } from "react-router-dom";

function Logo() {
        return (
            <div className="logo">
                <Link to="/">Blog</Link>
            </div>
        );
}

export default Logo;