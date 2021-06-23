import React from 'react';
import classes from './Cart.module.css'
import Model from '../UI/Model/Model';

function Cart() {
    const cartitems=(<ul className={classes["cart-items"]}>{[{name:"Susii"}].map(cart=><li>{cart.name}</li>)}</ul>)
    return (
        <Model>
            {cartitems}
            <div className={classes.total}>
            <span>Total Amount</span>
                <span>32.66</span> 
            </div>
                
            
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Model>
    )
}

export default Cart
