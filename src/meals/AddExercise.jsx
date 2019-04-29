import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

export default class AddExercise extends React.Component {
    constructor() {
      super();
      this.state = {
    }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      /*let form = document.forms.addExercise;
      this.props.createFood({
        ExerciseName: form.exerciseName.value,
        calories: form.calories.value,
      });
  
      // Clear the form for the next input.
      form.ExerciseName.value = '';
      form.calories.value = '';*/
      this.props.closeExerciseFormPopup();
    }
  
    render() {
      return (
        <div style = {{marginLeft: 'auto', marginRight: 'auto', marginTop:'10px', width: '30%', textAlign: 'center'}}>
          <Form inline name="addExercise" onSubmit={this.handleSubmit}>
          <FormControl
                type="text"
                name = "ExerciseName"
                placeholder="Exercise Name"
                style = {{marginRight: '5px'}}
            />
            <FormControl
                type="text"
                name = "calories"
                placeholder="Calories"
                style = {{marginRight: '5px'}}
              />

            {/* <input type="text" name="ExerciseName" placeholder="Exercise Name" />
            <input type="text" name="calories" placeholder="Calories" /> */}
            <Button bsStyle = 'primary'>Add</Button>
          </Form>
        </div>
      );
    }
  
  }

