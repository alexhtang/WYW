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

// class BodyStats extends React.Component {
//     render() {
//         const borderedStyle = {border: "1px solid black", padding: 6};
//         const bodyData = this.props.bodystats.map(userData => (<BodyRow key={userData.id} userData={userData} />));
//         return (
//           <table style={{borderCollapse: "collapse"}}>
//             <thead>
//               <tr>
//                 <th style={borderedStyle}>Height</th>
//                 <th style={borderedStyle}>Weight</th>
//                 <th style={borderedStyle}>Age</th>
//                 <th style={borderedStyle}>Biological Gender</th>
//               </tr>
//             </thead>
//             <tbody>{bodyData}</tbody>
//           </table>
//         )
//       }
// }

// class BodyRow extends React.Component {
//     render() {
//       const borderedStyle = {border: "1px solid black", padding: 4};
//       const userData = this.props.userData;
//       return (
//         <tr>
//             <td style={borderedStyle}>{userData.height}</td>
//             <td style={borderedStyle}>{userData.weight}</td>
//             <td style={borderedStyle}>{userData.age}</td>
//             <td style={borderedStyle}>{userData.gender}</td>
//         </tr>
//       )
//     }
//   }

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

  loadData() {
    fetch('/api/data').then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log("Hi");
          
          this.setState({ bodystats: data.records });
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch bodyStat:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

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