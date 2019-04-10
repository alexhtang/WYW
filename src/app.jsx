

const contentNode = document.getElementById('contents');

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
    <div style={{textAlign: 'center'}}>
    <table style={{fontFamily: 'Bookman Old Style', marginLeft: '37%'}}>
      <thead>
        <tr>
          <th>Height</th>
          <th>Weight</th>
          <th>Age</th>
          <th>Activity</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </table>
    </div>
  );
}

class NutritionStats extends React.Component {

  render() {
    return (
      <div style = {{fontFamily: 'Bookman Old Style', fontStyle: 'bold', fontSize: '25px', textAlign: 'center'}}>
        <h1 >Suggested Caloric Intake: </h1>
        <h1 style= {{color: 'green'}}>{this.props.calories}</h1>
      </div>
      )
  }
}

class AddBodyInfo extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.updateBodyStat;
        this.props.update({
          height: (form.height.value),
          weight: form.weight.value,
          age: form.age.value,
          activity: form.activity.value,
          gender: form.gender.value
        });
        // clear the form for the next input
        form.height.value = ""; form.weight.value = ""; form.age.value = ""; form.activity.value= ""; form.gender.value = "";
      }
    
      render() {
        return (
          <div>
            <form style={{fontFamily: 'Bookman Old Style'}} name="updateBodyStat" onSubmit={this.handleSubmit}>
              <input type="text" name="height" maxLength = "4" placeholder="Height (ft'inches)" style = {{borderRadius: '5px'}} />
              <input type="text" name="weight" maxLength = "3" placeholder="Weight (lbs)" style = {{borderRadius: '5px'}}/>
              <input type="text" name="age" maxLength = "2" placeholder="Age" style = {{borderRadius: '5px'}}/><hr></hr>
              <label name="activity">Activity Level:</label>
              <select style={{marginRight:'20px'}} name = "activity">
                <option>Light</option>
                <option>Moderate</option>
                <option>Vigorous</option>
              </select>
              <label name="gender">Biological Gender:</label>
              <select name = "gender">
                <option>Male</option>
                <option>Female</option>
              </select>
              <button style={{borderRadius: '5px'}}>Update</button>
            </form>
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

class FitnessTracker extends React.Component {
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
        <h1 style={{fontStyle: 'bold', fontSize: '100', fontFamily: 'Bookman Old Style', paddingBottom: '50px'}}>Calorie Calculator</h1>
        <BodyStats bodystats = {this.state.bodystats} />
        <hr />
        <AddBodyInfo update = {this.update} />
        <hr />
        <NutritionStats calories = {this.state.calories}/>
      </div>
    );
  }
}

ReactDOM.render(<FitnessTracker />, contentNode);  // Render the component inside the content Node