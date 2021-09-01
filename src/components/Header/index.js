import React from 'react';

import './styles.scss';

const Header = () => (
    <div className="header">
        <nav className="nav">
            <div className="nav-left">
                <a href="" className="nav-item bigName">Debeire G</a>
                <a href="" className="nav-item followers">230 Followers</a>
                <a href="" className="nav-item about">About</a>
                <a href="" className="nav-item follow">Follow</a>
                <a href="" className="nav-item mail">&#9993;</a>
            </div>
            <div className="nav-right">
                <a href="" className="nav-item signIn">Sign in</a>
                <a href="" className="nav-item getStarted">Get started</a>
            </div>
        </nav>
    </div> 
);

export default Header;