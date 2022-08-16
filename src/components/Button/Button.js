import React from "react";

import './Button.css';

function Button(props) {
    return (
        <button
            className={`button ${props.bigButton && 'big-button'}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

export default Button;
