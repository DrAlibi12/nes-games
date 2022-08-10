import React from "react";

import './GameItem.css';

function GameItem(props) {
    return (
        <li className='game-item'>({props.year}) {props.name}</li>
    );
}

export default GameItem;