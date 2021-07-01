import React, { useContext } from "react";
import Context from "../../../store/Context";
import Card from "../../UI/Card/Card";
import classes from "./IndivisualMeal.module.css";
import MealForm from "./MealForm";

function IndivisualMeal(props) {
  const useCtx=useContext(Context);
    const price=`$${props.price.toFixed(2)}`;
    const getCartCountHandler= count=>{
      useCtx.addItem({
        id:props.id,
        name:props.name,
        price:props.price,
        amount:count
      })
    }
  return (
    <li>
      <Card className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.desc}>{props.desc}</div>
          <div className={classes.price}>{price}</div>
        </div>
      <MealForm getCartCount={getCartCountHandler} id={props.id}/>
      </Card>
    </li>
  );
}

export default IndivisualMeal;
