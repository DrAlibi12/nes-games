import React from "react";

import './ModalInfo.css';

function ModalInfo(props) {
    return (
        <>
        <div
            style={{background:'black', opacity:0.5, position:'absolute', width:'100%', height:'100%', zIndex:1000, left:0, top:0, verticalAlign:'middle'}}
            onClick={props.onClose}
        >
        </div>
        <div style={{position:'absolute', zIndex:2000, width:'30rem', height:'20rem', background:'white', top:'50%', left:'50%', transform:'translate(-50%, -50%)', textAlign:'center'}}>
            <div style={{display:'table-cell', verticalAlign:'middle'}}>
                <label>{props.message}</label>
            </div>
        </div>
        </>
    );
}

export default ModalInfo;