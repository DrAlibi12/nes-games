import React from "react";
import GameItem from "../GameItem/GameItem";

import './GameList.css';

function GameList(props) {
    return (
        <ul className='game-list'>
            {props.games.map(game => (
                <GameItem
                    year={game.year}
                    name={game.name}
                    key={game.id}
                    id={game.id}
                    onDelete={props.onDeleteGame}
                />
            ))}
        </ul>
    );
}

export default GameList;