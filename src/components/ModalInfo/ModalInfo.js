import React from "react";
import Button from "../Button/Button";

import './ModalInfo.css';

function ModalInfo(props) {
    return (
        <>
            <div className="backdrop" onClick={props.onClose}/>
            <div className="modal-info">
                <header>
                    {props.title}
                </header>
                <div className="message">
                    {props.message}
                </div>
                <footer>
                    <Button onClick={props.onClose} label='Ok'/>
                </footer>
            </div>
        </>
    );
}

export default ModalInfo;