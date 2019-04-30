import React from 'react';
import {Table, Panel} from 'react-bootstrap';

const FoodTableRow = (props) => (
    <tr>
      <td>{props.food.foodName}</td>
      <td>{props.food.mealType}</td>
      <td>{props.food.calories}</td>
      <td>{props.food.fat}</td>
      <td>{props.food.carbohydrates}</td>
    </tr>
  );

export function BreakfastTable(props) {
    const FoodTableRows = props.foods.map((food, index) => (
      <FoodTableRow key={index} food={food} />
    ));
    return (
      <div>
      <Panel>
        <Table bordered hover striped>
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
      </Panel>
              <p>Breakfast Calories: {props.foods.reduce((accumulator, currentValue)=> accumulator+parseInt(currentValue.calories),0) }</p>
              </div>
    );
  }

  export default BreakfastTable;