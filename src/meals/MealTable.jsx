import React from 'react';
import {Table} from 'react-bootstrap'

const FoodTableRow = (props) => (
    <tr>
      <td>{props.food.foodName}</td>
      <td>{props.food.mealType}</td>
      <td>{props.food.calories}</td>
      <td>{props.food.fat}</td>
      <td>{props.food.carbohydrates}</td>
    </tr>
  );

export function MealTable(props) {
    const FoodTableRows = props.foods.map(food => (
      <FoodTableRow key={food.id} food={food} />
    ));
    return (
      <div style = {{width: '50%', marginLeft: 'auto', marginRight:'auto'}}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Meal Type</th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Carbohydrates</th>
            </tr>
          </thead>
          <tbody>{FoodTableRows}</tbody>
        </Table>
      </div>
    );
  }

  export default MealTable;
