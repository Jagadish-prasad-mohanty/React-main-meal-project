import React from 'react';
import ReactDOM from 'react-dom'
import classes from './Model.module.css';

const BackDrop= props=>{
    const backdropClickHandler=()=>{
        props.onClick();
    }
    return <div className={classes.BackDrop} onClick={backdropClickHandler}/>
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
         {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>,renderId)}
         {ReactDOM.createPortal(<ModalElem>{props.children}</ModalElem>,renderId)}
        </>
    )
}

export default Modal
