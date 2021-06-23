import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./IndivisualMeal.module.css";
import MealForm from "./MealForm";

function IndivisualMeal(props) {
    const price=`$${props.price.toFixed(2)}`
  return (
    <li>
      <Card className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.desc}>{props.desc}</div>
          <div className={classes.price}>{price}</div>
        </div>
      <MealForm id={props.id}/>
      </Card>
    </li>
  );
}

export default IndivisualMeal;
