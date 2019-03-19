const contentNode = document.getElementById('contents');

const bodystats = [
  {
    height: "0",
    weight: "0",
    age: "0",
    gender: "N/A"
  }
];


class BodyStats extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid black", padding: 6};
        const bodyData = this.props.bodystats.map(userData => <BodyRow key={userData.height} userData={userData} />)
        return (
          <table style={{borderCollapse: "collapse"}}>
            <thead>
              <tr>
                <th style={borderedStyle}>Height</th>
                <th style={borderedStyle}>Weight</th>
                <th style={borderedStyle}>Age</th>
                <th style={borderedStyle}>Biological Gender</th>
              </tr>
            </thead>
            <tbody>{bodyData}</tbody>
          </table>
        )
      }
}

class BodyRow extends React.Component {
    render() {
      const borderedStyle = {border: "1px solid black", padding: 4};
      const userData = this.props.userData;
      return (
        <tr>
            <td style={borderedStyle}>{userData.height}</td>
            <td style={borderedStyle}>{userData.weight}</td>
            <td style={borderedStyle}>{userData.age}</td>
            <td style={borderedStyle}>{userData.gender}</td>
        </tr>
      )
    }
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
    this.state = { bodystats: bodystats };

    this.update = this.update.bind(this);
  }

  update(userInput) {
    
    bodystats[0] = (userInput);
    this.setState({ bodystats: bodystats });
  }
  
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