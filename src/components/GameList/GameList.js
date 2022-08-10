import React from "react";
import GameItem from "../GameItem/GameItem";

import './GameList.css';

function GameList(props) {
    return (
        <ul style={{padding:'0px'}} className='game-list'>
            {props.games.map(game => (
                <GameItem
                    year={game.year}
                    name={game.name}
                    key={game.key}
                />
            ))}
        </ul>
    );
}

export default GameList;