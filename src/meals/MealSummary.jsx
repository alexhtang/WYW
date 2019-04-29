import React from 'react';
import AddExercise from './AddExercise.jsx';
import AddMeal from './AddMeal.jsx';
import {Table, Panel, Jumbotron, Form, FormControl, FormGroup, Button, ControlLabel} from 'react-bootstrap';

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
      return (
      <div>
        <Jumbotron>
        <h4>Enter Food or Exercise</h4>
      <div style ={{width: '12%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
        <Form inline>
          <FormGroup controlId="formActiviy">
            <FormControl style = {{marginRight: '7px', height: '30px'}} onChange = {this.handleSelectChange} componentClass="select" placeholder="select">
              <option value="">Select Option</option>
              <option value="addFood">Add Food</option>
              <option value="addExercise">Add Exercise</option>
            </FormControl>
              <Button
              onClick = {this.handleSubmit}
              bsStyle = 'primary'>
                Add
              </Button>
          </FormGroup>
        </Form>
        </div>
        {/* <select 
        value={this.state.selectValue} 
        onChange={this.handleSelectChange}>
          
        </select>
            <button onClick = {this.handleSubmit}>Add</button> */}
  
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
        <div style = {{textAlign: 'center', width: '400px', marginLeft: 'auto', marginRight:'auto', marginTop: '30px'}}>
         <Panel>
          <Table striped bordered>
            <thead>
              <tr>
                <th style ={{textAlign:'center'}}><h4>Your Daily Summary</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5>Total Calories: {this.props.totalCalories}</h5>
                </td>
              </tr>
            </tbody>
          </Table>
         </Panel>
         </div>
      </Jumbotron>

      
      
        </div>
  
      );
    }
  }

