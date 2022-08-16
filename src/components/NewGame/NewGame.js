import React, { useState } from "react";
import Container from "../Container/Container";
import GameForm from "../GameForm/GameForm";
import ModalInfo from "../ModalInfo/ModalInfo";
import Button from "../Button/Button";

import sndCoin from './../../assets/coin.ogg';
import sndDead from './../../assets/dead.ogg';
import sndKick from './../../assets/kick.wav';
import sndBump from './../../assets/bump.wav';

function NewGame(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    
    const audio = new Audio();

    const playAudio = (audioSource) => {
        audio.pause();
        audio.src = audioSource;
        audio.play();
    }

    const openCloseForm = (event) => {
        setIsOpen((prevValue) => {
            if (!prevValue) {
                playAudio(sndKick);
            } else {
                playAudio(sndBump);
            }
            return !prevValue;
        });
    }

    const addGameHandler = (newGame) => {
        playAudio(sndCoin);
        props.onAddGame(newGame);
    }

    const errorHandler = (error) => {
        playAudio(sndDead);
        setError(error);
        document.body.classList.add('modal-open');
    }
    
    const closeErrorModal = (event) => {
        setError();
        document.body.classList.remove('modal-open');
    }

    return (
        <Container>
            { error && <ModalInfo onClose={closeErrorModal} title={error.title} message={error.message} /> }
            { isOpen
                ? <GameForm onAddGame={addGameHandler} onCancel={openCloseForm} onError={errorHandler} />
                : <Button bigButton={true} label='Add New Game' onClick={openCloseForm} />
            }
        </Container>
    );
}

export default NewGame;