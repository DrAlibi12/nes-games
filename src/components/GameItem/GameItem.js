import React from "react";

import './GameItem.css';

function GameItem(props) {
    const deleteHandler = (event) => {
        props.onDelete(props.id);
    };

    return (
        <li className='game-item' onClick={deleteHandler}>({props.year}) {props.name}</li>
    );
}

export default GameItem;