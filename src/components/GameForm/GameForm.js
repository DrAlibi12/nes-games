import React, {useState} from "react";

import './GameForm.css';

function GameForm(props) {
    const [errorMessage, setErrorMessage] = useState("");
    const [gameName, setGameName] = useState("");
    const [gameYear, setGameYear] = useState("");

    const formIsValid = () => {
        if (gameName.trim() === "") {
            setErrorMessage("Game name cannot be empty.");
            return false;
        }
        if (gameYear.trim() === "") {
            setErrorMessage("Game year cannot be empty.");
            return false;
        }
        const intYear = parseInt(gameYear);
        const minYear = 1983;
        const maxYear = new Date().getFullYear();
        if (isNaN(intYear)) {
            setErrorMessage("Game year must be a number.");
            return false;
        }
        if (intYear < minYear || intYear > maxYear) {
            setErrorMessage(`Game year must be between ${minYear} and ${maxYear}.`);
            return false;
        }
        return true;
    }

    const gameNameChangeHandler = (event) => {
        setGameName(event.target.value);
    }

    const gameYearChangeHandler = (event) => {
        setGameYear(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid()) {
            props.onError(errorMessage);
            return;
        }
        const newGame = {
            name: gameName,
            year: gameYear,
            key: Math.random()
        }
        props.onAddGame(newGame);
        setGameName("");
        setGameYear("");
    }

    return (
        <form name="game-form" onSubmit={formSubmitHandler}>
            <div>
                <label style={{fontWeight:'bold', color:'#303691'}}>Game Name</label><br/>
                <input type="text" value={gameName} onChange={gameNameChangeHandler} style={{padding:'0px', width:'100%'}} />
            </div>
            <div>
                <label style={{fontWeight:'bold', color:'#303691'}}>Release Year</label><br/>
                <input type="text" value={gameYear} onChange={gameYearChangeHandler} style={{padding:'0px', width:'100%'}} />
            </div>
            <div style={{float:'right'}}>
                <button className='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' className='button'>Add Game</button>
            </div>
        </form>
    );
}

export default GameForm;