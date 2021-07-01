import React, { useContext } from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderIcon.module.css';
import Context from '../../../store/Context';

function HeaderIcon(props) {

    const cartClickHandler= ()=>{
        props.onClick()
    }

    const cartCtx=useContext(Context);
    // console.log(cartCtx.items);
    const cartItemCount=cartCtx.items.reduce((num,item)=>num+item.amount,0)

    return (
        <button className={`${classes.button} ${classes.bump}`} onClick={cartClickHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemCount}</span>
        </button>
    )
}

export default HeaderIcon
