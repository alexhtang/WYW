import React from 'react';


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
        <div>
          <form name="addExercise" onSubmit={this.handleSubmit}>
            <input type="text" name="ExerciseName" placeholder="Exercise Name" />
            <input type="text" name="calories" placeholder="Calories" />
            <button>Add</button>
          </form>
        </div>
      );
    }
  
  }

