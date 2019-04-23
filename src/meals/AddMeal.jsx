import React from 'react';


export default class AddMeal extends React.Component {
    constructor() {
      super();
      this.state = {
        mealType: 'Breakfast',
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      let form = document.forms.addMeal;
      this.props.createFood({
        foodName: form.foodName.value,
        calories: form.calories.value,
        mealType: this.state.mealType,
        fat: form.fat.value,
        carbohydrates: form.carbohydrates.value,
        numberOfServings: form.numberOfServings.value,
      });
  
      // Clear the form for the next input.
      form.foodName.value = '';
      form.calories.value = '';
      this.props.closeFoodFormPopup();
    }
  
    handleSelectChange(e){
        this.setState({mealType: e.target.value});
      }
  
    render() {
      return (
        <div>
          <form name="addMeal" onSubmit={this.handleSubmit}>
            <input type="text" name="foodName" placeholder="Food Name" />
            <input type="text" name="calories" placeholder="Calories" />
            <input type="text" name="fat" placeholder="Fat" />
            <input type="text" name="carbohydrates" placeholder="Carbohydrates"/>
            <input type="number" name="numberOfServings" placeholder="Number of Servings"/>
  
            <select 
                                value={this.state.mealType} 
                                onChange={this.handleSelectChange}
   >
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
        </select>
            <button>Add</button>
          </form>
        </div>
      );
    }
  }