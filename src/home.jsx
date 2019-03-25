const contentNode = document.getElementById('contents');

class BodyStats extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid black", padding: 6};
        return (
          <div class = "row">
          </div>
        )
      }
}

// class BodyRow extends React.Component {
//     render() {
//       const borderedStyle = {border: "1px solid black", padding: 4};
//       return (
//         <tr>
//             <td style={borderedStyle}>{this.props.body_height}</td>
//             <td style={borderedStyle}>{this.props.body_weight}</td>
//             <td style={borderedStyle}>{this.props.body_age}</td>
//             <td style={borderedStyle}>{this.props.body_gender}</td>
//         </tr>
//       )
//     }
//   }

class Description extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>This is a placeholder for a description of the webapp.</div>
    )
  }
}

class AddLogIn extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.updateLogIn;
        this.props.createIssue({
          username: form.username.value,
          password: form.password.value,
        });
        // clear the form for the next input
        form.username.value = ""; form.password.value = "";
      }
    
      render() {
        return (
          <div style={{textAlign: "center"}}>
            <form name="updateLogin" onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="Username" />
              <input type="text" name="password" placeholder="Password" />
              <button>Log In</button>
            </form>
          </div>
        )
      }
}

class TitleTest extends React.Component {
    render() {
        const textStyle = {textAlign: "center"};
        return(
            <h1 style={{padding: 40, textAlign: "center"}}>Welcome to WYW (Watch Your Weight)</h1>
        )
    }
}

class ButtonTable extends React.Component {
    render() {
        const borderedStyle = {padding: 6};
        return (
          <div style={{textAlign: "center"}}>
                <button>Meals</button>
                {' '}
                <button>Nutrition Tracker</button>
                {' '}
                <button>My Account</button>
                {' '}
                <button>History</button>
          </div>
        )
      }
}

class FitnessTracker extends React.Component {
  render() {
    return (
      <div>
        <TitleTest />
        {/* <BodyStats /> */}
        <hr />
        <AddLogIn />
        <hr />
        <Description />
        <hr/>
        <ButtonTable />
      </div>
    );
  }
}

ReactDOM.render(<FitnessTracker />, contentNode);  // Render the component inside the content Node