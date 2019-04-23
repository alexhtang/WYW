import React from 'react';
import AddExercise from './AddExercise.jsx';
import AddMeal from './AddMeal.jsx';


export default class MealSummary extends React.Component {
    constructor() {
      super();
      this.state = {
        selectValue: '',
        showFoodFormPopup: false,
        showExerciseFormPopup: false
  
  
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
    }
  
    handleSelectChange(e){
      this.setState({selectValue: e.target.value});
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if(this.state.selectValue === 'addFood'){
      this.toggleFoodFormPopup();
      } else if(this.state.selectValue === 'addExercise'){
      this.toggleExerciseFormPopup();
      }
    }
  
    toggleFoodFormPopup() {
      this.setState({
        showFoodFormPopup: !this.state.showFoodFormPopup
      });
    }
    
    toggleExerciseFormPopup() {
      this.setState({
        showExerciseFormPopup: !this.state.showExerciseFormPopup
      });
    }
  
    render() {
      return (<div>
         <h4>Your Daily Summary</h4>
         <h5>Total Calories: {this.props.totalCalories}</h5>
  
        <h4>Enter Food or Exercise</h4>
        
        <select 
                                value={this.state.selectValue} 
                                onChange={this.handleSelectChange}>
    <option value="">Select Option</option>
    <option value="addFood">Add Food</option>
    <option value="addExercise">Add Exercise</option>
        </select>
            <button onClick = {this.handleSubmit}>Add</button>
  
            {this.state.showFoodFormPopup ? 
          <AddMeal
            text='Close Me'
            closeFoodFormPopup={this.toggleFoodFormPopup.bind(this)}
            createFood = {this.props.createFood}
          />
          : null
        }
                    {this.state.showExerciseFormPopup ? 
          <AddExercise
            text='Close Me'
            closeExerciseFormPopup={this.toggleExerciseFormPopup.bind(this)}
            createFood= {this.props.createFood}
          />
          : null
        }
        </div>
  
      );
    }
  }

