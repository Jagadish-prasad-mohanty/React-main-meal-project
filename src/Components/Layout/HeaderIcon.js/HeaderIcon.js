import React from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderIcon.module.css';

function HeaderIcon() {
    return (
        <button className={`${classes.button} ${classes.bump}`}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderIcon
