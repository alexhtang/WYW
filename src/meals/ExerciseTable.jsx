import React from 'react';
import {Table, Panel} from 'react-bootstrap';

const ExerciseTableRow = (props) => (
    <tr>
      <td>{props.exercise.exerciseName}</td>
      <td>{props.exercise.calories}</td>
    </tr>
  );

export function ExerciseTable(props) {
    const ExerciseTableRows = props.exercise.map((exercise, index) => (
      <ExerciseTableRow key={index} exercise={exercise} />
    ));
    return (
      <div>
      <Panel>
        <Table bordered hover striped>
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>{ExerciseTableRows}</tbody>
        </Table>
      </Panel>
      <p>Exercise Calories: {props.exercise.reduce((accumulator, currentValue)=> accumulator+parseInt(currentValue.calories),0) }</p>
  </div>
    );
  }

  export default ExerciseTable;