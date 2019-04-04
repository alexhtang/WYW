const contentNode = document.getElementById('contents');

const BodyRow = (props) => (
  <tr>
    <td>{props.userData.height}</td>
    <td>{props.userData.weight}</td>
    <td>{props.userData.age}</td>
    <td>{props.userData.gender}</td>
  </tr>
);

function BodyStats(props) {
  const bodyData = props.bodystats.map((userData, index) => (
    <BodyRow key={index} userData={userData} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Height</th>
          <th>Weight</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </table>
  );
}

class NutritionStats extends React.Component {
  render() {
    return (
      <div>This is a placeholder for ingested calories and meals.</div>
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
          height: form.height.value,
          weight: form.weight.value,
          age: form.age.value,
          gender: form.gender.value
        });
        // clear the form for the next input
        form.height.value = ""; form.weight.value = ""; form.age.value = ""; form.gender.value = "";
      }
    
      render() {
        return (
          <div className = "form-group">
            <form name="updateBodyStat" onSubmit={this.handleSubmit}>
              <input type="text" name="height" placeholder="Height (ft'inches)" />
              <input type="text" name="weight" placeholder="Weight (lbs)" />
              <input type="text" name="age" placeholder="Age" /><hr></hr>
              <label for="gender">Biological Gender:</label>
              <select class="form-control" name = "gender">
                <option>Male</option>
                <option>Female</option>
              </select>
              <button>Update</button>
            </form>
          </div>
        )
      }
}

class FitnessTracker extends React.Component {
  constructor() {
    super();
    this.state = { bodystats: [] };

    this.update = this.update.bind(this);
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

//No longer necessary after fetch
  // update(userInput) {
  //   bodystats[0] = (userInput);
  //   this.setState({ bodystats: bodystats });
  // }
  
  render() {
    return (
      <div>
        <h1>Fitness Tracker</h1>
        <BodyStats bodystats = {this.state.bodystats} />
        <hr />
        <AddBodyInfo update = {this.update} />
        <hr />
        <NutritionStats />
      </div>
    );
  }
}

ReactDOM.render(<FitnessTracker />, contentNode);  // Render the component inside the content Node