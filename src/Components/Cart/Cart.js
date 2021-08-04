import React, { useState, useContext } from 'react';
import classes from './Cart.module.css'
import Model from '../UI/Model/Model';
import CartItems from './CartItems';
import Context from '../../store/Context';
import CheckOut from './CheckOut';
import OrderPreview from './OrderPreview';

function Cart(props) {
    const [isOrder,setIsOrder]=useState(false);
    // const [buyer,setBuyer]=useState('')
    const [previewData,setPreviewData] = useState(false)
    const cartCtx=useContext(Context);
    const totalAmount=`${'\u20A8'} ${cartCtx.total.toFixed(2)}`;

    const orderButtonHandler=(event)=>{
        event.preventDefault();
        setIsOrder(true)
    }
    const orderActions = <div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.onCancle}>Close</button>
    <button className={classes.button} onClick={orderButtonHandler}>Order</button>
</div>

    //handler for the person Data abs send to server
    const personDataHandler=(person)=>{
        const orderedData={
            address:person,
            orderDetails:cartCtx.items
        }
        
        const finalOrderedData=JSON.stringify(orderedData)
        console.log(finalOrderedData);
        
        const sendOrderedData =async ()=>{
            const response=await fetch("https://meals-order-reactjs-default-rtdb.firebaseio.com/orderedData.json",
            {
            method:'POST',
            body:finalOrderedData,
            headers: {
            'Content-Type': 'application/json',
        }})
        const data=await response.json()
        console.log(data);
        }
        sendOrderedData();
        setPreviewData(true);
    }
    
   
    //cart elements when cart is not empty
    const orders=<div>
        <ul className={classes["cart-items"]}>
                <CartItems items={cartCtx.items}/>
                </ul>
            <div className={classes.total}>
            <span>Total Amount</span>
                <span>{totalAmount}</span> 
            </div>

            {isOrder && <CheckOut onCancle={props.onCancle} getPersonData={personDataHandler}/>}
            
            {!isOrder && orderActions}

            


    </div>
    return (
        <Model onClick={props.onCancle}>
            {!previewData ?cartCtx.items.length===0?<h2 style={{textAlign:'center',marginTop:'3rem'}}>Start adding meals to the cart</h2>:orders:<OrderPreview onCancle={props.onCancle} items={cartCtx.items} totalAmount={totalAmount}/>}
        </Model>
    )
}

export default Cart
