import React, { useEffect, useState } from "react";
import classes from "./AvailableMealsComponent.module.css";
import IndivisualMeal from "./IndivisualMeal/IndivisualMeal";
import Card from "../UI/Card/Card";
import Spinner from '../UI/Spinner/Spinner';

function AvailableMealsComponent() {
  const [meals,setMeals] =useState([])
  const [IsLoading,setIsLoading] =useState(true);
  const [error,setError] = useState();
  useEffect(()=>{

    const fetchMeals = async() =>{
      const response = await fetch("https://meals-order-reactjs-default-rtdb.firebaseio.com/meals.json");
      if (!response.ok){
        throw new Error("Something went wrong!!");
      }
      const data= await response.json();
      let loadedMeals=[];
      for (let key in data){
        loadedMeals.push({
          id:key,
          ...data[key]
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false)
    }
    fetchMeals().catch((err)=>{
      setIsLoading(false)
      console.log("[catch..]",err.message);
      setError(err.message); 
    });
  }, [])
  let avlMeals;
  if (IsLoading){
    return <Spinner/>
  }
  console.log(error);
  if (error){
    return <h3 style={{marginTop:'5rem',textAlign:'center',color:'#96350e'}}>{error}</h3>
  }
  avlMeals =meals.map((meal) => (
    <IndivisualMeal
      key={meal.id}
      id={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
    <Card className={classes.Card}>
      <ul>{avlMeals}</ul>
    </Card>
    </section>
  );
}

export default AvailableMealsComponent;
