import React, { useContext } from 'react'
import classes from './CartItem.module.css';
import Context from '../../store/Context';

function CartItem(props) {
    const ctx=useContext(Context);
    const incrCartItemHandler= ()=>{
        ctx.incItem(props.item)
    }
    const decrCartItemHandler= ()=>{
        ctx.removeItem(props.item.id)
    }
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
                <button onClick={decrCartItemHandler}>-</button>
                <button onClick={incrCartItemHandler}>+</button>
            </div>
        </li>
    )
}

export default CartItem
