import { useContext } from 'react';
import Context from '../../store/Context';
import Model from '../UI/Model/Model';
import classes from './OrderPreview.module.css'
const OrderPreview =(props)=>{
    const cartCtx=useContext(Context)
    const order=props.items.map(item=>{
        return <li key={item.id} className={classes["cart-item"]}>
         <div className={classes["item-summery"]}>
                <h2>{item.name}</h2>
                <div className={classes["item-data"]}>
                    <span className={classes.price}>{`${'\u20A8'} ${item.price.toFixed(2)}`}</span>
                    <span className={classes.amount}>{item.amount}</span>
                </div>
            </div>
            </li>
    })
    const modelOnClick= ()=>{
        props.onCancle();
        cartCtx.reset();
        
    }
    return <Model onClick={modelOnClick} >
        <h2>Thank You For Your Intrest!!</h2>
        <br/>
        <h4>You have successfully ordered your meals &#128519;</h4>
        <h5>Bellow is your order details</h5>
        <ul style={{height:'15rem',overflow:'auto'}}>

        {order}
        </ul>
        {<div className={classes.total}>
            <span>Total Amount</span>
                <span>{props.totalAmount}</span> 
            </div>}

        <h3>You order would be there in <span style={{color:'red'}}>15 min</span></h3>
        <div className={classes.actions}>
        <button className={classes.button} onClick={modelOnClick}>Close</button>
</div>
    </Model>
}

export default OrderPreview;