// NEW: added the import for react.
import React from 'react';
import {Table, Carousel, CarouselItem, Button, Form, FormGroup, FormControl, HelpBlock, ControlLabel, Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import { formatWithOptions } from 'util';

const BodyRow = (props) => (
  <tr>
    <td>{props.userData.height}</td>
    <td>{props.userData.weight}</td>
    <td>{props.userData.age}</td>
    <td>{props.userData.activity}</td>
    <td>{props.userData.gender}</td>
  </tr>
);



function BodyStats(props) {
  const bodyData = props.bodystats.map((userData, index) => (
    <BodyRow key={index} userData={userData} />
  ));
  return (
    <div style={{fontFamily: 'Bookman Old Style', marginLeft: 'auto', marginRight:'auto', width: '50%'}}>
    <Table striped bordered hover>
      <thead>
        <tr >
          <th>Height</th>
          <th>Weight</th>
          <th>Age</th>
          <th>Activity</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </Table>
    </div>
  );
}

class NutritionStats extends React.Component {

  render() {
    return (
      <div style = {{fontFamily: 'Bookman Old Style', fontStyle: 'bold', fontSize: '25px', textAlign: 'center', marginLeft: 'auto', marginRight:'auto', width: '50%'}}>
        <Table striped bordered hover>
      <thead>
        <tr >
          <th><h1 style = {{textAlign: 'center'}}>Suggested Caloric Intake</h1></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h1 style= {{color: 'green'}}>{this.props.calories}</h1></td>
        </tr>
      </tbody>
    </Table>
      </div>
      )
  }
}

class AddBodyInfo extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleActivityChange = this.handleActivityChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        
        this.state = {
          height: '',
          weight: '',
          age: '',
          activity: 'Light',
          gender:'Male',
        };
      }
      


      getValidationStateHeight() {
        const s = this.state.height;
        const length = this.state.height.length;
        if(length == 0) return 'warning';
        else if(length<3 || length > 4) return 'error';
        else if(length == 4 && parseInt(s.substring(2,4))>12) return 'error';
        else if(s.charAt(1) == "'") return 'success';
        return null;
      }
      getValidationStateWeight() {
        const length = this.state.weight.length;
        if(length == 0) return 'warning';
        else if(length>3) return 'error';
        else if(length>1) return 'success';
        return null;
      }
      getValidationStateAge() {
        const length = this.state.age.length;
        if(length == 0) return 'warning';
        else if(length>2) return 'error';
        else if(length>0) return 'success';
        return null;
      }
    
      handleSubmit(e) {
        e.preventDefault();
        
        if(this.getValidationStateHeight() == 'error' || this.getValidationStateWeight() == 'error' || this.getValidationStateAge() == 'error'){
          window.alert('Please Fill Out the Form Correctly');
        }
        else if(this.getValidationStateHeight() == 'warning' || this.getValidationStateWeight() == 'warning' || this.getValidationStateAge() == 'warning'){
          window.alert('You are missing required fields!');
        }
        else{
          this.props.update({
            height: (this.state.height),
            weight: this.state.weight,
            age: this.state.age,
            activity: this.state.activity,
            gender: this.state.gender
          });
          
        }
        // clear the form for the next input
        // form.height.value = ""; form.weight.value = ""; form.age.value = ""; form.activity.value= ""; form.gender.value = "";
      }

      handleHeightChange(e) {
        e.preventDefault();
        
        this.setState({ height: e.target.value });
      }

      handleWeightChange(e){
        e.preventDefault();
        this.setState({ weight: e.target.value });
      }
      handleAgeChange(e){
        e.preventDefault();
        this.setState({ age: e.target.value });
      }
      handleActivityChange(e){
        e.preventDefault();
        this.setState({ activity: e.target.value });
      }
      handleGenderChange(e){
        e.preventDefault();
        this.setState({ gender: e.target.value });
      }
      
    
      render() {
        return (
          <div>
            <Grid>
              <Row>
                <Col md = {5}>
                <form > {/*Height*/}
                  <FormGroup
                    controlId="formHeight"
                    validationState={this.getValidationStateHeight()}
                  >
                    
                    <FormControl
                      type="text"
                      
                      value={this.state.value}
                      placeholder="Height (Ex. 6'4)"
                      onChange={this.handleHeightChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
                </Col>
                <Col md = {5}>
                <form> {/*Weight*/}
                  <FormGroup
                    controlId="formWeight"
                    validationState={this.getValidationStateWeight()}
                  >
                    
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Weight (lbs)"
                      onChange={this.handleWeightChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
                </Col>
                <Col md = {2}>
                <form> {/*Age*/}
                  <FormGroup
                    controlId="formAge"
                    validationState={this.getValidationStateAge()}
                  >
                    
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Age"
                      onChange={this.handleAgeChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
                </Col>
              </Row>

              <Row>
                <Col md = {5}>
                  <form>
                  <FormGroup controlId="formActiviy">
                    <ControlLabel>Activity Level</ControlLabel>
                    <FormControl onChange = {this.handleActivityChange} componentClass="select" placeholder="select">
                      <option value="Light">Light</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Vigorous">Vigorous</option>
                    </FormControl>
                  </FormGroup>
                  </form>
                </Col>
                <Col md = {5}>
                  <Form>
                  <FormGroup controlId="formGender">
                    <ControlLabel>Biological Gender</ControlLabel>
                    <FormControl onChange = {this.handleGenderChange} componentClass="select" placeholder="select">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </FormControl>
                  </FormGroup>
                  </Form>
                </Col>

                <Col md = {2}>
                  <Button
                      style = {{marginTop: '20px'}}
                      bsStyle = "secondary"
                      bsSize = "small"
                      onClick = {this.handleSubmit}>Update</Button>

                  
                </Col>
              </Row>
            </Grid>
          </div>
        )
      }
}

class AddCarousel extends React.Component{
  render() {
    return (
      <div style = {{paddingBottom: '15px'}}> 
        <Grid>
          <Col>
          
        <Carousel>
          <Carousel.Item>
            <img className='center-block' width = '600px' height = '300px' src="/assets/fitness1.jpg" />
            <Carousel.Caption>
              <h3>Fitness</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className = 'center-block' width = '600px' height='300px'  src="/assets/zen1.jpg" />
            <Carousel.Caption>
              <h3>Mind</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className = 'center-block' width = '600px' height='300px' src="/assets/health1.jpg" />
            <Carousel.Caption>
              <h3>Health</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Col>
        </Grid>
      </div>
    )
  }
}

function calculate(h, w, age, g, activity){
  let suggested = 0;
  w = parseInt(w);
  age = parseInt(age);
  const inches = parseInt(h.charAt(0)) * 12 + parseInt(h.substring(2, h.length));
  if(g === 'Male'){
    suggested = 66 + ( 6.2 * w ) + ( 12.7 * inches) - ( 6.76 * age);
    if(activity === 'Light'){
      suggested = suggested*1.53;
    }
    if(activity === 'Moderate'){
      suggested = suggested*1.76;
    }
    if(activity === 'Vigorous'){
      suggested = suggested*2.25;
    }
  }
  else{
    suggested = 655.1 + ( 4.35 * w) + ( 4.7 * inches) - ( 4.7 * age);
    if(activity === 'Light'){
      suggested = suggested*1.53;
    }
    if(activity === 'Moderate'){
      suggested = suggested*1.76;
    }
    if(activity === 'Vigorous'){
      suggested = suggested*2.25;
    }
  }
  
  return Math.round(suggested);
}

export default class FitnessTracker extends React.Component {
  constructor() {
    super();
    this.state = { bodystats: [], calories: 0 };
    this.update = this.update.bind(this);
    //this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  //Grabs data from server
  loadData() {
    fetch('/api/data').then(response => {
      if (response.ok) {                        //Returns whether there was a successful response
        response.json().then(data => {          //Parses the body of the response as a JSON
          this.setState({ bodystats: data.records });     //Adds the saved data to the state on the load
          this.state.calories = calculate(this.state.bodystats[0].height, this.state.bodystats[0].weight, this.state.bodystats[0].age, this.state.bodystats[0].gender, this.state.bodystats[0].activity);
          this.setState({calories: this.state.calories});
        });
      } else {
        response.json().then(error => {         //If the response failed, returns an error
          alert("Failed to fetch bodyStat:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }
  
  

  //Updates User Body Stats
  update(userInput) {
    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput),
    })
      .then(res => {  
        if (res.ok) {
          res.json()
            .then(updatedStat => {
              this.state.bodystats[0] = updatedStat
              this.setState({ bodystats: this.state.bodystats });
              this.state.calories = calculate(this.state.bodystats[0].height, this.state.bodystats[0].weight, this.state.bodystats[0].age, this.state.bodystats[0].gender, this.state.bodystats[0].activity);
              this.setState({calories: this.state.calories});
            });
        }
        else {
          res.json()
            .then(error => {
              alert('Failed to add update: ' + error.message);
            });
        }
      });
  }
  

  render() {
    
    return (
      <div style = {{textAlign: "center"}}>
        <div>
        <AddCarousel />
        </div>
        <BodyStats bodystats = {this.state.bodystats} />
        <hr />
        <AddBodyInfo update = {this.update} />
        <hr />
        <NutritionStats calories = {this.state.calories}/>
        <hr />
      </div>
    );
  }
}