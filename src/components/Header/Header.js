import React from "react";
import famicomLogo from './../../assets/famicomLogo.png';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={famicomLogo} className="famicomLogo" alt="famicomLogo" />
        </div>
    );
}

export default Header;