import React from 'react'
import classes from './CartItem.module.css'

function CartItem(props) {
    return (
        <li className={classes["cart-item"]}>
            <div className={classes["item-summery"]}>
                <h2>{props.name}</h2>
                <div className={classes["item-data"]}>
                    <span className={classes.price}>{`$${props.price.toFixed(2)}`}</span>
                    <span className={classes.amount}>{props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}

export default CartItem
