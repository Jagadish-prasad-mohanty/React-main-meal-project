import React from 'react';
import ReactDOM from 'react-dom'
import classes from './Model.module.css';

const BackDrop= props=>{
    return <div className={classes.BackDrop}/>
}

const ModalElem= props=>{
    return <div className={classes.Modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const renderId=document.getElementById("model-backdrop")

function Modal(props) {
    return (
        <>
         {ReactDOM.createPortal(<BackDrop/>,renderId)}
         {ReactDOM.createPortal(<ModalElem>{props.children}</ModalElem>,renderId)}
        </>
    )
}

export default Modal
