import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";

import './ModalInfo.css';

function Backdrop(props) {
    return <div className="backdrop" onClick={props.onClose}/>;
}

function Overlay(props) {
    return (
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
    );
}

function ModalInfo(props) {
    return (
        <>
            {
                ReactDOM.createPortal(
                    <Backdrop onClose={props.onClose}/>,
                    document.getElementById("backdrop-root")
                )
            }
            {
                ReactDOM.createPortal(
                    <Overlay title={props.title} message={props.message} onClose={props.onClose} />,
                    document.getElementById("overlay-root")
                )
            }
        </>
    );
}

export default ModalInfo;