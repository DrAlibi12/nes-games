import React, {useState} from "react";
import Button from "../Button/Button";

import './GameForm.css';

function GameForm(props) {
    const [gameName, setGameName] = useState("");
    const [gameYear, setGameYear] = useState("");

    const generateErrorObject = (title, message) => {
        return {
            title, message
        }
    }

    const formGetError = () => {
        if (gameName.trim().length === 0 || gameYear.trim().length === 0) {
            return generateErrorObject("INVALID INPUT", "Game name and game year must be completed.");
        }
        const intYear = parseInt(gameYear);
        const minYear = 1983;
        const maxYear = new Date().getFullYear();
        if (isNaN(intYear)) {
            return generateErrorObject("INVALID YEAR", "Game year must be a number.");
        }
        if (intYear < minYear || intYear > maxYear) {
            return generateErrorObject("YEAR OUT OF RANGE", `Game year must be between ${minYear} and ${maxYear}.`);
        }
        return null;
    }

    const gameNameChangeHandler = (event) => {
        setGameName(event.target.value);
    }

    const gameYearChangeHandler = (event) => {
        setGameYear(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const error = formGetError();
        if (error !== null) {
            props.onError(error);
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
            <div className="game-form__input">
                <label>Game Name</label><br/>
                <input type="text" value={gameName} onChange={gameNameChangeHandler} />
            </div>
            <div className="game-form__input">
                <label>Release Year</label><br/>
                <input type="text" value={gameYear} onChange={gameYearChangeHandler} />
            </div>
            <div className="game-form__actions">
                <Button onClick={props.onCancel} label='Cancel' />
                <Button type='submit' label='Add Game' />
            </div>
        </form>
    );
}

export default GameForm;