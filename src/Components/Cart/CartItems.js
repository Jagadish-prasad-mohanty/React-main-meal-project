import React from 'react';
import CartItem from './CartItem';

function CartItems(props) {
    const cartitems=props.items.map(cart=><CartItem key={cart.id} name={cart.name} price={cart.price} amount={cart.amount}></CartItem>)
    return (
        <>
           {cartitems} 
        </>
    )
}

export default CartItems
