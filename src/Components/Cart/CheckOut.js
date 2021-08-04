import React, { useState , useEffect} from "react";
import classes from "./CheckOut.module.css";
const isEmpty = (val) => {
  return val.length === 0;
};
const checkPostal = (code) => {
  return code.length >= 5;
};
const CheckOut = (props) => {
  //creating ref for inputs
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredStreet, setStreet] = useState("");
  const [enteredCity, setCity] = useState("");
  const [enteredPostal, setPostal] = useState("");

  //state for inputValid
  const [formIsValid, setFormIsValid] = useState({
    name: false,
    email: false,
    postal: false,
    city: false,
    street: false,
  });

  //state for touched state
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [streetIsTouched, setStreetIsTouched] = useState(false);
  const [cityIsTouched, setCityIsTouched] = useState(false);
  const [postalIsTouched, setPostalIsTouched] = useState(false);

  // blur functions
  const nameBlurHandler = (e) => {
    setNameIsTouched(true);
  };
  const emailBlurHandler = (e) => {
      e.preventDefault()
    setEmailIsTouched(true);
  };
  const postalBlurHandler = (e) => {
      e.preventDefault()
    setPostalIsTouched(true);
  };
  const streetBlurHandler = (e) => {
      e.preventDefault()
    setStreetIsTouched(true);
  };
  const cityBlurHandler = (e) => {
      e.preventDefault()
    setCityIsTouched(true);
  };
  // input change handlers
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const postalChangeHandler = (event) => {
    setPostal(event.target.value);
  };
  const streetChangeHandler = (event) => {
    setStreet(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

//   store validity value in a variable
  const nameInValidity = nameIsTouched && isEmpty(enteredName);
  const emailInValidity = emailIsTouched && isEmpty(enteredEmail);
  const postalInValidity = postalIsTouched && !checkPostal(enteredPostal);
  const streetInValidity = streetIsTouched && isEmpty(enteredStreet);
  const cityInValidity = cityIsTouched && isEmpty(enteredCity);

// //   putback the validities to the form valid
    useEffect(()=>{
    setFormIsValid({
        name: !nameInValidity,
        email: !emailInValidity,
        street: !streetInValidity,
        city: !cityInValidity,
        postal: !postalInValidity,
    });
        
    }, [nameInValidity,emailInValidity,streetInValidity,cityInValidity,postalInValidity,
      // nameIsTouched,emailIsTouched,postalIsTouched,cityIsTouched,streetIsTouched
    ] )

    const disable=!nameIsTouched && !emailIsTouched && !postalIsTouched && !streetIsTouched && !cityIsTouched
  //function for submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCityIsTouched(true)
    setNameIsTouched(true)
    setPostalIsTouched(true)
    setEmailIsTouched(true)
    setStreetIsTouched(true)
    const nameInValidity = isEmpty(enteredName);
    const emailInValidity = isEmpty(enteredEmail);
    const postalInValidity = !checkPostal(enteredPostal);
    const streetInValidity = isEmpty(enteredStreet);
    const cityInValidity = isEmpty(enteredCity);

    // putback the validities to the form valid
    setFormIsValid({
      name: !nameInValidity,
      email: !emailInValidity,
      street: !streetInValidity,
      city: !cityInValidity,
      postal: !postalInValidity,
    });

    if (
      !formIsValid.name ||
      !formIsValid.email ||
      !formIsValid.postal ||
      !formIsValid.city ||
      !formIsValid.street
    ) {
      return;
    }
    console.log(formIsValid);

    // seding the buyer data to cart Component
    const personData={
            name:enteredName,
            email:enteredEmail,
            street:enteredStreet,
            postal:enteredPostal,
            city:enteredCity
        }
    props.getPersonData(personData)
  };
  // classses add to the action
  const nameClasses = `${classes.action} ${
    formIsValid.name ? "" : classes.invalid
  }`;
  const emailClasses = `${classes.action} ${
    formIsValid.email ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.action} ${
    formIsValid.street ? "" : classes.invalid
  }`;
  const postalClasses = `${classes.action} ${
    formIsValid.postal ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.action} ${
    formIsValid.city ? "" : classes.invalid
  }`;
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.formInputs}>
        <div className={nameClasses}>
          <div>
            <label>Your Name</label>
            <input
              onBlur={nameBlurHandler}
              onChange={nameChangeHandler}
              type="text"
            />
          </div>
          {formIsValid.name ? (
            ""
          ) : (
            <p style={{ display: "block" }}>Enter valid name</p>
          )}
        </div>
        <div className={emailClasses}>
          <div>
            <label>Email Id</label>
            <input
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
              type="email"
            />
          </div>
          {formIsValid.email ? "" : <p style={{ flex: 1 }}>Enter valid email</p>}
        </div>
        <div className={streetClasses}>
          <div>
            <label>Street</label>
            <input
              onBlur={streetBlurHandler}
              onChange={streetChangeHandler}
              type="text"
            />
          </div>
          {formIsValid.street ? (
            ""
          ) : (
            <p style={{ display: "block" }}>Enter valid street</p>
          )}
        </div>
        <div className={cityClasses}>
          <div>
            <label>City</label>
            <input
              onBlur={cityBlurHandler}
              onChange={cityChangeHandler}
              type="text"
            />
          </div>
          {formIsValid.city ? (
            ""
          ) : (
            <p style={{ display: "block" }}>Enter valid city</p>
          )}
        </div>
        <div className={postalClasses}>
          <div>
            <label>Postal Code</label>
            <input
              onBlur={postalBlurHandler}
              onChange={postalChangeHandler}
              type="text"
            />
          </div>
          {formIsValid.postal ? (
            ""
          ) : (
            <p style={{ display: "block" }}>Enter valid postal</p>
          )}
        </div>
        </div>
        <div className={classes.controls}>
        <button className={classes["button-alt"]} onClick={props.onCancle}>
          cancel
        </button>
        <button type="submit" className={classes.button} disabled={disable}>
          confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
