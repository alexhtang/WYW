import React from 'react';


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
    const FoodTableRows = props.foods.map(food => (
      <FoodTableRow key={food.id} food={food} />
    ));
    return (
      <table className="bordered-table">
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
      </table>
    );
  }

  export default BreakfastTable;