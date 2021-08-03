import React, { useRef, useState } from 'react'
import classes from './CheckOut.module.css'
const isEmpty =(val)=>{
    return val.length===0
}
const checkPostal= (code)=>{
    return code.length>=5
}
const CheckOut= (props)=>{
    //creating ref for inputs
    const nameRef=useRef();
    const emailRef=useRef();
    const streetRef=useRef();
    const postalRef=useRef();
    const cityRef=useRef();

    //state for inputValid
    const [formIsValid,setFormIsValid] = useState({
        name:true,
        email:true,
        postal:true,
        city:true,
        street:true
    })

    //state for touched state
    const [nameIsTouched,setNameIsTouched]=useState(false)
    const [emailIsTouched,setEmailIsTouched]=useState(false)
    const [streetIsTouched,setStreetIsTouched]=useState(false)
    const [cityIsTouched,setCityIsTouched]=useState(false)
    const [postalIsTouched,setPostalIsTouched]=useState(false)

    const nameBlurHandler= () =>{
        setNameIsTouched(true)
    }
    const emailBlurHandler= () =>{
        setEmailIsTouched(true)
    }
    const postalBlurHandler= () =>{
        setPostalIsTouched(true)
    }
    const streetBlurHandler= () =>{
        setStreetIsTouched(true)
    }
    const cityBlurHandler= () =>{
        setCityIsTouched(true)
    }



    //function for submit
    const onSubmitHandler =(e)=>{
        e.preventDefault();

       // input values  store in a variable
        const enteredName=nameRef.current.value
        const enteredEmail=emailRef.current.value
        const enteredStreet=streetRef.current.value
        const enteredPostal=postalRef.current.value
        const enteredCity=cityRef.current.value

        // store validity value in a variable
        const nameInValidity=nameIsTouched && isEmpty(enteredName)
        const emailInValidity=emailIsTouched && isEmpty(enteredEmail)
        const postalInValidity=postalIsTouched && !checkPostal(enteredPostal)
        const streetInValidity=streetIsTouched && isEmpty(enteredStreet)
        const cityInValidity=cityIsTouched && isEmpty(enteredCity)

        // putback the validities to the form valid
        setFormIsValid({
            name:!nameInValidity,
            email:!emailInValidity,
            street:!streetInValidity,
            city:!cityInValidity,
            postal:!postalInValidity
        })

        if (!formIsValid.name || !formIsValid.email || !formIsValid.postal || !formIsValid.city || !formIsValid.street){
            return
        }

        // const orderedData= {
        //     meals:props.items,
        //     personData:{
        //         name:enteredName,
        //         email:enteredEmail,
        //         street:enteredStreet,
        //         postal:enteredPostal,
        //         city:enteredCity
        //     }
        // }
        // console.log(orderedData);

    }
    // classses add to the action
    const nameClasses=`${classes.action} ${formIsValid.name?'':classes.invalid}`
    const emailClasses=`${classes.action} ${formIsValid.email?'':classes.invalid}`
    const streetClasses=`${classes.action} ${formIsValid.street?'':classes.invalid}`
    const postalClasses=`${classes.action} ${formIsValid.postal?'':classes.invalid}`
    const cityClasses=`${classes.action} ${formIsValid.city?'':classes.invalid}`
    return <form onSubmit={onSubmitHandler} className={classes.form}>
    <div className={nameClasses}>
    <div>
        <label>Your Name</label>
        <input onBlur={nameBlurHandler} ref={nameRef} type='text'/>
    </div>
        {formIsValid.name?'':<p style={{display:'block'}}>Enter valid name</p>}
    </div>
    <div className={emailClasses}>  
    <div>
        <label>Email Id</label>
        <input onBlur={emailBlurHandler} ref={emailRef} type='email'/>
    </div>
    {formIsValid.email?'':<p style={{flex:1}}>Enter valid email</p>}
    </div>
    <div className={streetClasses}>
    <div>
        <label>Street</label>
        <input onBlur={streetBlurHandler} ref={streetRef} type='text'/>
    </div>
    {formIsValid.street?'':<p style={{display:'block'}}>Enter valid street</p>}
    </div>
    <div className={cityClasses}>
    <div>

        <label>City</label>
        <input onBlur={cityBlurHandler} ref={cityRef} type='text'/>
    </div>
    {formIsValid.city?'':<p style={{display:'block'}}>Enter valid city</p>}
    </div>
    <div className={postalClasses}>
    <div>

        <label>Postal Code</label>
        <input onBlur={postalBlurHandler} ref={postalRef} type='text'/>
    </div>
    {formIsValid.postal?'':<p style={{display:'block'}}>Enter valid postal</p>}
    </div>
    <div className={classes.controls}>
        <button className={classes['button-alt']} onClick={props.onCancle}>cancel</button>
        <button type='submit' className={classes.button}>confirm</button>
    </div>
    </form>
}

export default CheckOut