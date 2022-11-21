import React from "react";
import './Header.css';

function Header() {
    return ( 
        <div className="head">
            <div className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
     );
}

export default Header;