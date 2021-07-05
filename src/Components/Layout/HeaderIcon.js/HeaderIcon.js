import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderIcon.module.css';
import Context from '../../../store/Context';

function HeaderIcon(props) {
    const [btnIsHighlighted,setBtnIsHighlighted]=useState(false)

    const cartClickHandler= ()=>{
        props.onClick()
    }

    const cartCtx=useContext(Context);
    // console.log(cartCtx.items);
    const cartItemCount=cartCtx.items.reduce((num,item)=>num+item.amount,0)

    const btnClasses=`${classes.button} ${btnIsHighlighted?classes.bump:null}`;

    const {total} = cartCtx

    useEffect(()=>{
        setBtnIsHighlighted(true);
        const timer=setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return ()=>{
            clearTimeout(timer);
        }
    },
    [total] )


    return (
        <button className={btnClasses} onClick={cartClickHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span className={classes["cart-text"]}>Your Cart</span>
            <span className={classes.badge}>{cartItemCount}</span>
        </button>
    )
}

export default HeaderIcon
