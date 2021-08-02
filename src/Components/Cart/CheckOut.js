import React, { useRef } from 'react'
import classes from './CheckOut.module.css'
const isEmpty =(val)=>{
    return val.length===0
}
const checkPostal= (code)=>{
    return code.length===5
}
const CheckOut= (props)=>{
    const nameRef=useRef();
    const emailRef=useRef();
    const streetRef=useRef();
    const postalRef=useRef();
    const cityRef=useRef();
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        const enteredName=nameRef.current.value
        const enteredEmail=emailRef.current.value
        const enteredStreet=streetRef.current.value
        const enteredPostal=postalRef.current.value
        const enteredCity=cityRef.current.value

        if (isEmpty(enteredName) || isEmpty(enteredCity) || isEmpty(enteredStreet) || checkPostal(enteredPostal)){
            alert("Enter valid inputs")
            return
        }

        const orderedData= {
            meals:props.items,
            personData:{
                name:enteredName,
                email:enteredEmail,
                street:enteredStreet,
                postal:enteredPostal,
                city:enteredCity
            }
        }
        console.log(orderedData);

    }
    return <form onSubmit={onSubmitHandler} className={classes.form}>
    <div className={classes.action}>
    <label>Your Name</label>
        <input ref={nameRef} type='text'/>
    </div>
    <div className={classes.action}>  
    <label>Email Id</label>
    <input ref={emailRef} type='email'/>
    </div>
    <div className={classes.action}>
    <label>Street</label>
    <input ref={streetRef} type='text'/>
    </div>
    <div className={classes.action}>
    <label>City</label>
    <input ref={cityRef} type='text'/>
    </div>
    <div className={classes.action}>
    <label>Postal Code</label>
    <input ref={postalRef} type='text'/>
    </div>
    <div className={classes.controls}>
        <button className={classes['button-alt']} onClick={props.onCancle}>cancel</button>
        <button type='submit' className={classes.button}>confirm</button>
    </div>
    </form>
}

export default CheckOut