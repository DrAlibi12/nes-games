import React, { useState } from "react";
import Container from "../Container/Container";
import GameForm from "../GameForm/GameForm";
import ModalInfo from "../ModalInfo/ModalInfo";

import sndCoin from './../../coin.ogg';
import sndDead from './../../dead.ogg';
import sndKick from './../../kick.wav';
import sndBump from './../../bump.wav';

import './NewGame.css';

function NewGame(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const audio = new Audio();

    const openCloseForm = (event) => {
        setIsOpen((prevValue) => {
            audio.pause();
            audio.src = sndDead;
            if (!prevValue) {
                audio.src = sndKick;
            }
            audio.play();
            return !prevValue;
        });
    }

    const addGameHandler = (newGame) => {
        audio.pause();
        audio.src = sndCoin;
        audio.play();
        props.onAddGame(newGame);
    }

    const errorHandler = (newErrorMessage) => {
        audio.pause();
        audio.src = sndBump;
        audio.play();
        setErrorMessage(newErrorMessage);
        setShowError(true);
        document.body.classList.add('modal-open');
    }
    
    const closeErrorModal = (event) => {
        setShowError(false);
        document.body.classList.remove('modal-open');
    }

    return (
        <Container>
            { isOpen
                ? <GameForm onAddGame={addGameHandler} onCancel={openCloseForm} onError={errorHandler} />
                : <button className="button big-button" onClick={openCloseForm}>Add New Game</button>
            }
            { showError
                ? <ModalInfo onClose={closeErrorModal} message={errorMessage} />
                : <></>
            }
        </Container>
    );
}

export default NewGame;