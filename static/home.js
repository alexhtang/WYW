"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var BodyStats = function (_React$Component) {
  _inherits(BodyStats, _React$Component);

  function BodyStats() {
    _classCallCheck(this, BodyStats);

    return _possibleConstructorReturn(this, (BodyStats.__proto__ || Object.getPrototypeOf(BodyStats)).apply(this, arguments));
  }

  _createClass(BodyStats, [{
    key: "render",
    value: function render() {
      var borderedStyle = { border: "1px solid black", padding: 6 };
      return React.createElement("div", { "class": "row" });
    }
  }]);

  return BodyStats;
}(React.Component);

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

var Description = function (_React$Component2) {
  _inherits(Description, _React$Component2);

  function Description() {
    _classCallCheck(this, Description);

    return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
  }

  _createClass(Description, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: { textAlign: "center" } },
        "This is a placeholder for a description of the webapp."
      );
    }
  }]);

  return Description;
}(React.Component);

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

var TitleTest = function (_React$Component3) {
  _inherits(TitleTest, _React$Component3);

  function TitleTest() {
    _classCallCheck(this, TitleTest);

    return _possibleConstructorReturn(this, (TitleTest.__proto__ || Object.getPrototypeOf(TitleTest)).apply(this, arguments));
  }

  _createClass(TitleTest, [{
    key: "render",
    value: function render() {
      var textStyle = { textAlign: "center" };
      return React.createElement(
        "div",
        { style: { justifyContent: 'center', alignItems: 'center', textAlign: "center" } },
        React.createElement("img", { src: "/Ftracker_asset.png", height: "200px", width: "500px", style: { paddingTop: "20" } }),
        React.createElement(
          "h1",
          { style: { padding: 20, textAlign: "center" } },
          "Welcome to WYW (Watch Your Weight)"
        )
      );
    }
  }]);

  return TitleTest;
}(React.Component);

var ButtonTable = function (_React$Component4) {
  _inherits(ButtonTable, _React$Component4);

  function ButtonTable() {
    _classCallCheck(this, ButtonTable);

    return _possibleConstructorReturn(this, (ButtonTable.__proto__ || Object.getPrototypeOf(ButtonTable)).apply(this, arguments));
  }

  _createClass(ButtonTable, [{
    key: "render",
    value: function render() {
      var borderedStyle = { padding: 6 };
      return React.createElement(
        "div",
        { style: { textAlign: "center" } },
        React.createElement(
          "button",
          null,
          "Meals"
        ),
        ' ',
        React.createElement(
          "button",
          null,
          "Nutrition Tracker"
        ),
        ' ',
        React.createElement(
          "button",
          null,
          "My Account"
        ),
        ' ',
        React.createElement(
          "button",
          null,
          "History"
        )
      );
    }
  }]);

  return ButtonTable;
}(React.Component);

var HomePage = function (_React$Component5) {
  _inherits(HomePage, _React$Component5);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this5 = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this5.state = {
      isLoggedIn: false
    };

    _this5.update = _this5.update.bind(_this5);
    return _this5;
  }

  _createClass(HomePage, [{
    key: "update",
    value: function update() {
      this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      var logIn = void 0;

      if (isLoggedIn) {
        logIn = React.createElement(
          "div",
          { style: { textAlign: "center" } },
          React.createElement(
            "p",
            null,
            "You are logged in!"
          ),
          React.createElement("input", { type: "button", value: "Log Out", onClick: this.update })
        );
      } else {
        logIn = React.createElement(
          "div",
          { style: { textAlign: "center" } },
          React.createElement(
            "form",
            { name: "updateLogin", onSubmit: this.update },
            React.createElement("input", { type: "text", name: "username", placeholder: "Username" }),
            React.createElement("input", { type: "password", name: "password", placeholder: "Password" }),
            React.createElement(
              "button",
              null,
              "Log In"
            )
          )
        );
      }

      return React.createElement(
        "div",
        null,
        React.createElement(TitleTest, null),
        React.createElement("hr", null),
        logIn,
        React.createElement("hr", null),
        React.createElement(Description, null),
        React.createElement("hr", null),
        React.createElement(ButtonTable, null)
      );
    }
  }]);

  return HomePage;
}(React.Component);

ReactDOM.render(React.createElement(HomePage, null), contentNode); // Render the component inside the content Node