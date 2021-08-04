import Model from '../UI/Model/Model';
import classes from './OrderPreview.module.css'
const OrderPreview =(props)=>{
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
    return <Model onClick={props.onCancle}>
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
    </Model>
}

export default OrderPreview;