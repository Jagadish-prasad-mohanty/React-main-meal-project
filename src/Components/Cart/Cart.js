import React, { useState, useContext } from 'react';
import classes from './Cart.module.css'
import Model from '../UI/Model/Model';
import CartItems from './CartItems';
import Context from '../../store/Context';
import CheckOut from './CheckOut';

function Cart(props) {
    const [isOrder,setIsOrder]=useState(false);
    const cartCtx=useContext(Context);
    const totalAmount=`$${cartCtx.total.toFixed(2)}`;

    const orderButtonHandler=(event)=>{
        event.preventDefault();
        setIsOrder(true)
    }
    const orderActions = <div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.onCancle}>Close</button>
    <button className={classes.button} onClick={orderButtonHandler}>Order</button>
</div>
    return (
        <Model onClick={props.onClick}>
            <ul className={classes["cart-items"]}>
                <CartItems items={cartCtx.items}/>
                </ul>
            <div className={classes.total}>
            <span>Total Amount</span>
                <span>{totalAmount}</span> 
            </div>

            {isOrder && <CheckOut onCancle={props.onCancle} items={cartCtx.items}/>}
            
            {!isOrder && orderActions}
        </Model>
    )
}

export default Cart
