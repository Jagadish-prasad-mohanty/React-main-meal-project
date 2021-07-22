import React, { useEffect, useState } from "react";
import classes from "./AvailableMealsComponent.module.css";
import IndivisualMeal from "./IndivisualMeal/IndivisualMeal";
import Card from "../UI/Card/Card";


function AvailableMealsComponent() {
  const [meals,setMeals] =useState([])
  useEffect(()=>{
    const fetchMeals = async() =>{
      const response = await fetch("https://meals-order-reactjs-default-rtdb.firebaseio.com/meals.json");
      const data= await response.json();
      let loadedMeals=[];
      for (let key in data){
        loadedMeals.push({
          id:key,
          ...data[key]
        })
      }
      setMeals(loadedMeals);
    }
    fetchMeals();
  }, [])
  let avlMeals=<h2 style={{textAlign:"center",color:"white"}}>LOADING...</h2>
  if (meals.length!==0){
  avlMeals =meals.map((meal) => (
    <IndivisualMeal
      key={meal.id}
      id={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));}
  return (
    <section className={classes.meals}>
    <Card className={classes.Card}>
      
      <ul>{avlMeals}</ul>
    </Card>
    </section>
  );
}

export default AvailableMealsComponent;
