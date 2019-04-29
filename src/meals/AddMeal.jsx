import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

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
      });
  
      // Clear the form for the next input.
      this.props.closeFoodFormPopup();
    }
  
    handleSelectChange(e){
        this.setState({mealType: e.target.value});
      }
  
    render() {
      return (
        <div style = {{marginLeft: 'auto', marginRight: 'auto', width: '50%', textAlign: 'center'}}>
          <Form inline name="addMeal" onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl
                type="text"
                name = "foodName"
                placeholder="Food Name"
                style = {{marginRight: '5px'}}
              />
              <FormControl
                type="text"
                name = "calories"
                placeholder="Calories"
                style = {{marginRight: '5px'}}
              />
              <FormControl
                type="text"
                name = "fat"
                placeholder="Fat"
                style = {{marginRight: '5px'}}
              />
              <FormControl
                type="text"
                name = "carbohydrates"
                placeholder="Carbohydrates"
                style = {{marginRight: '5px'}}
              />
              
            </FormGroup>
            <div style = {{marginLeft: 'auto', marginRight: 'auto', width: '50%', textAlign: 'center'}}>
            <FormControl onChange = {this.handleSelectChange} componentClass="select" placeholder="select">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option> 
                   
              </FormControl>
              <Button bsStyle = 'primary'>Add</Button>
              </div>

              
            {/* <input type="text" name="foodName" placeholder="Food Name" /> */}
            {/* <input type="text" name="calories" placeholder="Calories" />
            <input type="text" name="fat" placeholder="Fat" />
            <input type="text" name="carbohydrates" placeholder="Carbohydrates"/>   */}
            
            
            
          </Form>
        </div>
      );
    }
  }