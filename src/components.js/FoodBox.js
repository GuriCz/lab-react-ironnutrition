import React from 'react'
import { Card, Col, Button } from 'antd';

function FoodBox({food}) {
    const { name, image, calories, servings } = food;
    const totalCalories = calories * servings;

    return (
      <Col>
        <Card
          title={name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {totalCalories} </b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;