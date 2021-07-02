import React, { useContext } from 'react';
import classes from './Cart.module.css'
import Model from '../UI/Model/Model';
import CartItems from './CartItems';
import Context from '../../store/Context';

function Cart(props) {
    const cartCtx=useContext(Context);
    const totalAmount=`$${cartCtx.total.toFixed(2)}`;
    return (
        <Model onClick={props.onClick}>
            <ul className={classes["cart-items"]}>
                <CartItems items={cartCtx.items}/>
                </ul>
            <div className={classes.total}>
            <span>Total Amount</span>
                <span>{totalAmount}</span> 
            </div>
            
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClick}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Model>
    )
}

export default Cart
