// NEW: added the import for react.
import React from 'react';
import MealSummary from './MealSummary.jsx';
import MealTable from './MealTable.jsx';





export default class Meals extends React.Component {
  constructor() {
    super();
    this.state = { foods: [],
    totalCalories: 0 };
  
    this.addMeal = this.addMeal.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {

    fetch('/api/meals').then(response => {
      if (response.ok) {
        response.json().then(data => {
          data.records.forEach(meal => {
            meal.created = new Date(meal.created);
            //this.setState({totalCalories: Number(this.state.totalCalories)+meal.calories});

            if (meal.completionDate)
              meal.completionDate = new Date(meal.completionDate);
          });
          this.setState({ foods: data.records });
          this.setState({totalCalories: data.totalCalories});

        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch issues:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
 
}

/*
   this.setState({
        foods: foods,
      });
      this.calculateCalories();
*/


  addMeal(newMeal) {
    fetch('/api/meals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMeal),
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(updatedMeal => {
              const newMeals = this.state.foods.concat(updatedMeal);
              this.setState({ foods: newMeals });
              this.setState({totalCalories: parseInt(this.state.totalCalories) + parseInt(updatedMeal.calories)});
            });
        }
        else {
          res.json()
            .then(error => {
              alert('Failed to add issue: ' + error.message);
            });
        }
      });
    
    
}



  render() {
    return (
      <div>
        <h1>Meal Tracker</h1>
        <MealSummary totalCalories={this.totalCalories} createFood = {this.addMeal}  totalCalories = {this.state.totalCalories} />

        <hr />
        <MealTable foods={this.state.foods} />
        <hr />
      </div>
    );
  }
}
