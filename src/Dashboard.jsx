import React from 'react';
import { Link } from 'react-router';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}



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

// class AddLogIn extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//       handleSubmit(e) {
//         e.preventDefault();
//         var form = document.forms.updateLogIn;
//         this.props.update();
//         this.props.createIssue({
//           username: form.username.value,
//           password: form.password.value,
//         });
//         // clear the form for the next input
//         form.username.value = ""; form.password.value = "";
//       }
  
//       render() {
//         return (
        
//           <div style={{textAlign: "center"}}>
//             <form name="updateLogin" onSubmit={this.handleSubmit}>
//               <input type="text" name="username" placeholder="Username" />
//               <input type="text" name="password" placeholder="Password" />
//               <button>Log In</button>
//             </form>
//           </div>
//         )
//       }
// }

// class LoggedIn extends React.Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.props.update();
//   }

//   render(){
//     return(
//       <div style={{textAlign: "center"}}>
//         <p>You are logged in!</p>
//         <input type="button" value="Log Out" onClick={this.handleClick}></input>
//       </div>
//     )
//   }
// }

class TitleTest extends React.Component {
  render() {
      const textStyle = {textAlign: "center"};
      return(
        <div style = {{justifyContent: 'center', alignItems: 'center', textAlign: "center"}}>
          <img src = "/assets/Ftracker_asset.png" height = "200px" width = "500px" style={{paddingTop: "20"}}/>
          <h1 style={{padding: 20, textAlign: "center"}}>Welcome to WYW (Watch Your Weight)</h1>
        </div>
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

class HomePage extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isLoggedIn: false
  };

  this.update = this.update.bind(this);
}

update() {
  this.setState({isLoggedIn: !this.state.isLoggedIn});
}

render() {
  const isLoggedIn = this.state.isLoggedIn;
  let logIn;

  if(isLoggedIn){
    logIn = <div style={{textAlign: "center"}}>
             <p>You are logged in!</p>
             <input type="button" value="Log Out" onClick={this.update}></input>
           </div>
  }
  else{
    logIn = <div style={{textAlign: "center"}}>
          <form name="updateLogin" onSubmit={this.update}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <Link to='/FitnessTracker'><button>Log In</button> </Link>
          </form>
    </div>
  }

  return (
    <div>
      <TitleTest />
      <hr />
      {logIn}
      <hr />
      <Description />
      <hr/>
      <ButtonTable />
    </div>
  );
}
}