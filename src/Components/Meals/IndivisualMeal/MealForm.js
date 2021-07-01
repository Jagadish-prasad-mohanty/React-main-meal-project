import React, { useRef, useState } from 'react';
import Input from '../../UI/Input/Input'
import classes from './MealForm.module.css';

function MealForm(props) {
    const [checkValidAmount,setCheckValidAmount]=useState(true);

    const getCountRef=useRef();

    const submitHandler= (e)=>{
        e.preventDefault();
        console.log("clicked");
        const count=getCountRef.current.value;
        const countNumber=+count;

        if (count.trim().length===0 || countNumber<1 || countNumber>5){
            setCheckValidAmount(false);
            return;
        }

        props.getCartCount(countNumber);

    }
    
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input label='Amount'
                ref={getCountRef}
                input={{
                        id:'amount_'+ props.id,
                        min:'1',
                        max:'5',
                        step:'1',
                        type:'number',
                        defaultValue:'1'
                    }}
            />

            <button>
                + Add
            </button>
            {!checkValidAmount?"Enter a valid number in 1-5":null}
        </form>
    )
}

export default MealForm
