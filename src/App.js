import React from 'react'
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components.js/FoodBox';
import AddFoodForm from './components.js/AddFoodForm';
import Search from 'antd/es/transfer/search';


function App() {
  const [foodList, UpdateFoodsList] = useState(foods);
  const [foodData, setFoodData] = useState(foods);
  const addNewFood = (newFood) =>{
    const updatedFood = [...foods, newFood];
    UpdateFoodsList(updatedFood);
    }

    const filterFoodList = (str) => {
      let filteredFood;
      
      if (str === "All") {
        filteredFood = foods;
      } else {
        filteredFood = foodData.filter((food) => {
          return food.title[0].toLowerCase() === str.toLowerCase();
        });
      }
     
      setFoodData(filteredFood);
    };  
  return (
    <div>
      <h1>Food List</h1>
      <Search filterFood={filterFoodList}/>
      <AddFoodForm addFood={addNewFood} />
      {foodList.map((food) => (
        <FoodBox key={food.name} food={food} />
      ))}
    </div>
  )
}

export default App