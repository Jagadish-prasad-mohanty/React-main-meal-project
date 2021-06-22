import React from 'react';
import Input from '../../UI/Input/Input'
import classes from './MealForm.module.css';

function MealForm(props) {
    return (
        <form className={classes.form}>
            <Input label='Amount'
                input={
                    {
                        id:'_amount'+ props.id,
                        min:'1',
                        max:'5',
                        step:'1',
                        type:'number',
                        defaultValue:'1'
                    }
                }
            />

            <button>
                + Add
            </button>
        </form>
    )
}

export default MealForm
