// NEW: added the import for react.
import React from 'react';
import MealSummary from './MealSummary.jsx';
import MealTable from './MealTable.jsx';
import BreakfastTable from './BreakfastTable.jsx';
import LunchTable from './LunchTable.jsx';
import DinnerTable from './DinnerTable.jsx';
import SnackTable from './SnackTable.jsx';
import {Grid, Col, Row} from 'react-bootstrap';



export default class Meals extends React.Component {
  constructor() {
    super();
    this.state = { foods: [],
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: [],
      exercise: [],
    totalCalories: 0 };

    this.addMeal = this.addMeal.bind(this);

  }

  componentDidMount() {
    this.loadData();
    this.loadBreakfastData();
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
          this.setState({ breakfast: data.records.filter(food =>food.mealType==='Breakfast') });
          this.setState({ lunch: data.records.filter(food =>food.mealType==='Lunch') });
          this.setState({ dinner: data.records.filter(food =>food.mealType==='Dinner') });
          this.setState({ snack: data.records.filter(food =>food.mealType==='Snack') });

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
              if(updatedMeal.mealType ==='Breakfast'){
                const newMeals = this.state.breakfast.concat(updatedMeal);
                this.setState({ breakfast: newMeals });
              } else if(updatedMeal.mealType ==='Lunch') {
                const newMeals = this.state.lunch.concat(updatedMeal);
                this.setState({ lunch: newMeals });
              } else if(updatedMeal.mealType ==='Dinner') {
                const newMeals = this.state.dinner.concat(updatedMeal);
                this.setState({ dinner: newMeals });
              } else if(updatedMeal.mealType ==='Snack') {
                const newMeals = this.state.snack.concat(updatedMeal);
                this.setState({ snack: newMeals });
              }

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
      <div style = {{textAlign: 'center'}}>
        <h1>Meal Tracker</h1>
        <MealSummary totalCalories={this.totalCalories} createFood = {this.addMeal}  totalCalories = {this.state.totalCalories} />
        <br />
        <Grid>
          <Row>
            <Col md = {6}>
              <div>
                <h1>Breakfast</h1>
              </div>
              <BreakfastTable foods ={this.state.breakfast}></BreakfastTable>
            </Col>
            <Col md = {6}>
              <div>
                <h1>Lunch</h1>
              </div>
              <LunchTable foods ={this.state.lunch}></LunchTable>
            </Col>
          </Row>
          <Row>
            <Col md = {6}>
                <div>
                  <h1>Snack</h1>
                </div>
                <SnackTable foods ={this.state.snack}></SnackTable>
            </Col>
            <Col md = {6}>
              <div>
                <h1>Dinner</h1>
              </div>
              <DinnerTable foods ={this.state.dinner}></DinnerTable>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
