import React from "react";
import GameListHeader from "../GameListHeader/GameListHeader";
import GameList from "../GameList/GameList";
import Container from "../Container/Container";

import ffLogo from '../../ffLogo.png';

import './GameListContainer.css';

function GameListContainer(props) {
    return (
        <Container>
            <div>
                <GameListHeader />
                <img src={ffLogo} className="ff-logo" alt="ffLogo" />
                <GameList games={props.games} onDeleteGame={props.onDeleteGame}/>
            </div>
        </Container>
    );
}

export default GameListContainer;