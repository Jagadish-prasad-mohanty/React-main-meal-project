import React from 'react';
import classes from './Cart.module.css'
import Model from '../UI/Model/Model';

function Cart(props) {
    const cartitems=(<ul className={classes["cart-items"]}>{[{name:"Susii"}].map(cart=><li key={cart.name}>{cart.name}</li>)}</ul>)
    return (
        <Model onClick={props.onClick}>
            {cartitems}
            <div className={classes.total}>
            <span>Total Amount</span>
                <span>32.66</span> 
            </div>
                
            
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClick}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Model>
    )
}

export default Cart
