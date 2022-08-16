import React from "react";

import './GameListHeader.css';

function GameListHeader(props) {
    return (
        <div className='list-header'>
            <label style={{position:'relative', left:'6px'}}>
                G
            </label>
            <label>
                <i>A</i>ME LIST
            </label>
        </div>
    );
}



export default GameListHeader;