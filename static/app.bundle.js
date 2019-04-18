webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(70);

var _Dashboard = __webpack_require__(235);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _FitnessTracker = __webpack_require__(236);

var _FitnessTracker2 = _interopRequireDefault(_FitnessTracker);

var _Meals = __webpack_require__(237);

var _Meals2 = _interopRequireDefault(_Meals);

var _Review = __webpack_require__(241);

var _Review2 = _interopRequireDefault(_Review);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById("contents");

// A simple component to indicate that a page was not found.
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

// This defines the main application layout that can be used
// across nested routes. The `props.children` property is received
// by the parent route. See the route definitions below.
var App = function App(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'nav',
        { className: ' header navbar navbar-expand-lg navbar-light border-dark border-bottom rounded-bottom' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          _react2.default.createElement(
            'a',
            { className: 'navbar-brand' },
            'WYW'
          ),
          ' '
        ),
        _react2.default.createElement(
          'button',
          { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
          _react2.default.createElement(
            'ul',
            { className: 'navbar-nav mr-auto' },
            _react2.default.createElement(
              'li',
              { className: 'nav-item active' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/FitnessTracker' },
                'Fitness Tracker'
              ),
              '            '
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item active' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/Meals' },
                'Meals'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item active' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/Review' },
                'Reviews'
              ),
              '            '
            )
          )
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          'Logout'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'contents' },
      props.children
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      'COMPSCI 326'
    )
  );
};

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: _react2.default.PropTypes.object.isRequired
};

// The "routed app" that defines the different routes that
// are supposed in this application. As you can see, If the
// URL path is '/' we will render the IssueList component,
// if the path is '/issues/:id' we render the IssueEdit component,
// and if we get anything else we render the NoMatch view.
// This router uses the "hash history" approach to implement
// single-page apps with multiple views.
var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: App },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Dashboard2.default }),
      _react2.default.createElement(_reactRouter.Router, { path: '/FitnessTracker', component: _FitnessTracker2.default }),
      _react2.default.createElement(_reactRouter.Router, { path: '/Meals', component: _Meals2.default }),
      _react2.default.createElement(_reactRouter.Router, { path: '/Review', component: _Review2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(HomePage, null)
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

var BodyStats = function (_React$Component2) {
  _inherits(BodyStats, _React$Component2);

  function BodyStats() {
    _classCallCheck(this, BodyStats);

    return _possibleConstructorReturn(this, (BodyStats.__proto__ || Object.getPrototypeOf(BodyStats)).apply(this, arguments));
  }

  _createClass(BodyStats, [{
    key: 'render',
    value: function render() {
      var borderedStyle = { border: "1px solid black", padding: 6 };
      return _react2.default.createElement('div', { 'class': 'row' });
    }
  }]);

  return BodyStats;
}(_react2.default.Component);

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

var Description = function (_React$Component3) {
  _inherits(Description, _React$Component3);

  function Description() {
    _classCallCheck(this, Description);

    return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
  }

  _createClass(Description, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { textAlign: "center" } },
        'This is a placeholder for a description of the webapp.'
      );
    }
  }]);

  return Description;
}(_react2.default.Component);

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

var TitleTest = function (_React$Component4) {
  _inherits(TitleTest, _React$Component4);

  function TitleTest() {
    _classCallCheck(this, TitleTest);

    return _possibleConstructorReturn(this, (TitleTest.__proto__ || Object.getPrototypeOf(TitleTest)).apply(this, arguments));
  }

  _createClass(TitleTest, [{
    key: 'render',
    value: function render() {
      var textStyle = { textAlign: "center" };
      return _react2.default.createElement(
        'div',
        { style: { justifyContent: 'center', alignItems: 'center', textAlign: "center" } },
        _react2.default.createElement('img', { src: '/Ftracker_asset.png', height: '200px', width: '500px', style: { paddingTop: "20" } }),
        _react2.default.createElement(
          'h1',
          { style: { padding: 20, textAlign: "center" } },
          'Welcome to WYW (Watch Your Weight)'
        )
      );
    }
  }]);

  return TitleTest;
}(_react2.default.Component);

var ButtonTable = function (_React$Component5) {
  _inherits(ButtonTable, _React$Component5);

  function ButtonTable() {
    _classCallCheck(this, ButtonTable);

    return _possibleConstructorReturn(this, (ButtonTable.__proto__ || Object.getPrototypeOf(ButtonTable)).apply(this, arguments));
  }

  _createClass(ButtonTable, [{
    key: 'render',
    value: function render() {
      var borderedStyle = { padding: 6 };
      return _react2.default.createElement(
        'div',
        { style: { textAlign: "center" } },
        _react2.default.createElement(
          'button',
          null,
          'Meals'
        ),
        ' ',
        _react2.default.createElement(
          'button',
          null,
          'Nutrition Tracker'
        ),
        ' ',
        _react2.default.createElement(
          'button',
          null,
          'My Account'
        ),
        ' ',
        _react2.default.createElement(
          'button',
          null,
          'History'
        )
      );
    }
  }]);

  return ButtonTable;
}(_react2.default.Component);

var HomePage = function (_React$Component6) {
  _inherits(HomePage, _React$Component6);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this6 = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this6.state = {
      isLoggedIn: false
    };

    _this6.update = _this6.update.bind(_this6);
    return _this6;
  }

  _createClass(HomePage, [{
    key: 'update',
    value: function update() {
      this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      var logIn = void 0;

      if (isLoggedIn) {
        logIn = _react2.default.createElement(
          'div',
          { style: { textAlign: "center" } },
          _react2.default.createElement(
            'p',
            null,
            'You are logged in!'
          ),
          _react2.default.createElement('input', { type: 'button', value: 'Log Out', onClick: this.update })
        );
      } else {
        logIn = _react2.default.createElement(
          'div',
          { style: { textAlign: "center" } },
          _react2.default.createElement(
            'form',
            { name: 'updateLogin', onSubmit: this.update },
            _react2.default.createElement('input', { type: 'text', name: 'username', placeholder: 'Username' }),
            _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'Password' }),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/FitnessTracker' },
              _react2.default.createElement(
                'button',
                null,
                'Log In'
              ),
              ' '
            )
          )
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(TitleTest, null),
        _react2.default.createElement('hr', null),
        logIn,
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Description, null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(ButtonTable, null)
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


var BodyRow = function BodyRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.userData.height
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.weight
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.age
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.activity
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.gender
    )
  );
};

function BodyStats(props) {
  var bodyData = props.bodystats.map(function (userData, index) {
    return _react2.default.createElement(BodyRow, { key: index, userData: userData });
  });
  return _react2.default.createElement(
    'div',
    { style: { textAlign: 'center' } },
    _react2.default.createElement(
      'table',
      { className: 'bordered-table', style: { fontFamily: 'Bookman Old Style', marginLeft: 'auto', marginRight: 'auto' } },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Height'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Weight'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Age'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Activity'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Gender'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        bodyData
      )
    )
  );
}

var NutritionStats = function (_React$Component) {
  _inherits(NutritionStats, _React$Component);

  function NutritionStats() {
    _classCallCheck(this, NutritionStats);

    return _possibleConstructorReturn(this, (NutritionStats.__proto__ || Object.getPrototypeOf(NutritionStats)).apply(this, arguments));
  }

  _createClass(NutritionStats, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { fontFamily: 'Bookman Old Style', fontStyle: 'bold', fontSize: '25px', textAlign: 'center' } },
        _react2.default.createElement(
          'h1',
          null,
          'Suggested Caloric Intake: '
        ),
        _react2.default.createElement(
          'h1',
          { style: { color: 'green' } },
          this.props.calories
        )
      );
    }
  }]);

  return NutritionStats;
}(_react2.default.Component);

var AddBodyInfo = function (_React$Component2) {
  _inherits(AddBodyInfo, _React$Component2);

  function AddBodyInfo() {
    _classCallCheck(this, AddBodyInfo);

    var _this2 = _possibleConstructorReturn(this, (AddBodyInfo.__proto__ || Object.getPrototypeOf(AddBodyInfo)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(AddBodyInfo, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.updateBodyStat;
      this.props.update({
        height: form.height.value,
        weight: form.weight.value,
        age: form.age.value,
        activity: form.activity.value,
        gender: form.gender.value
      });
      // clear the form for the next input
      form.height.value = "";form.weight.value = "";form.age.value = "";form.activity.value = "";form.gender.value = "";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { style: { fontFamily: 'Bookman Old Style' }, name: 'updateBodyStat', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'height', maxLength: '4', placeholder: 'Height (ft\'inches)', style: { borderRadius: '5px' } }),
          _react2.default.createElement('input', { type: 'text', name: 'weight', maxLength: '3', placeholder: 'Weight (lbs)', style: { borderRadius: '5px' } }),
          _react2.default.createElement('input', { type: 'text', name: 'age', maxLength: '2', placeholder: 'Age', style: { borderRadius: '5px' } }),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'label',
            { name: 'activity' },
            'Activity Level:'
          ),
          _react2.default.createElement(
            'select',
            { style: { marginRight: '20px' }, name: 'activity' },
            _react2.default.createElement(
              'option',
              null,
              'Light'
            ),
            _react2.default.createElement(
              'option',
              null,
              'Moderate'
            ),
            _react2.default.createElement(
              'option',
              null,
              'Vigorous'
            )
          ),
          _react2.default.createElement(
            'label',
            { name: 'gender' },
            'Biological Gender:'
          ),
          _react2.default.createElement(
            'select',
            { name: 'gender' },
            _react2.default.createElement(
              'option',
              null,
              'Male'
            ),
            _react2.default.createElement(
              'option',
              null,
              'Female'
            )
          ),
          _react2.default.createElement(
            'button',
            { style: { borderRadius: '5px' } },
            'Update'
          )
        )
      );
    }
  }]);

  return AddBodyInfo;
}(_react2.default.Component);

function calculate(h, w, age, g, activity) {
  var suggested = 0;
  w = parseInt(w);
  age = parseInt(age);
  var inches = parseInt(h.charAt(0)) * 12 + parseInt(h.substring(2, h.length));
  if (g === 'Male') {
    suggested = 66 + 6.2 * w + 12.7 * inches - 6.76 * age;
    if (activity === 'Light') {
      suggested = suggested * 1.53;
    }
    if (activity === 'Moderate') {
      suggested = suggested * 1.76;
    }
    if (activity === 'Vigorous') {
      suggested = suggested * 2.25;
    }
  } else {
    suggested = 655.1 + 4.35 * w + 4.7 * inches - 4.7 * age;
    if (activity === 'Light') {
      suggested = suggested * 1.53;
    }
    if (activity === 'Moderate') {
      suggested = suggested * 1.76;
    }
    if (activity === 'Vigorous') {
      suggested = suggested * 2.25;
    }
  }

  return Math.round(suggested);
}

var FitnessTracker = function (_React$Component3) {
  _inherits(FitnessTracker, _React$Component3);

  function FitnessTracker() {
    _classCallCheck(this, FitnessTracker);

    var _this3 = _possibleConstructorReturn(this, (FitnessTracker.__proto__ || Object.getPrototypeOf(FitnessTracker)).call(this));

    _this3.state = { bodystats: [], calories: 0 };
    _this3.update = _this3.update.bind(_this3);
    //this.calculate = this.calculate.bind(this);
    return _this3;
  }

  _createClass(FitnessTracker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }

    //Grabs data from server

  }, {
    key: 'loadData',
    value: function loadData() {
      var _this4 = this;

      fetch('/api/data').then(function (response) {
        if (response.ok) {
          //Returns whether there was a successful response
          response.json().then(function (data) {
            //Parses the body of the response as a JSON
            _this4.setState({ bodystats: data.records }); //Adds the saved data to the state on the load
            _this4.state.calories = calculate(_this4.state.bodystats[0].height, _this4.state.bodystats[0].weight, _this4.state.bodystats[0].age, _this4.state.bodystats[0].gender, _this4.state.bodystats[0].activity);
            _this4.setState({ calories: _this4.state.calories });
          });
        } else {
          response.json().then(function (error) {
            //If the response failed, returns an error
            alert("Failed to fetch bodyStat:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }

    //Updates User Body Stats

  }, {
    key: 'update',
    value: function update(userInput) {
      var _this5 = this;

      fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedStat) {
            _this5.state.bodystats[0] = updatedStat;
            _this5.setState({ bodystats: _this5.state.bodystats });
            _this5.state.calories = calculate(_this5.state.bodystats[0].height, _this5.state.bodystats[0].weight, _this5.state.bodystats[0].age, _this5.state.bodystats[0].gender, _this5.state.bodystats[0].activity);
            _this5.setState({ calories: _this5.state.calories });
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add update: ' + error.message);
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { style: { textAlign: "center" } },
        _react2.default.createElement(
          'h1',
          { style: { fontStyle: 'bold', fontSize: '100', fontFamily: 'Bookman Old Style', paddingBottom: '50px' } },
          'Calorie Calculator'
        ),
        _react2.default.createElement(BodyStats, { bodystats: this.state.bodystats }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(AddBodyInfo, { update: this.update }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(NutritionStats, { calories: this.state.calories })
      );
    }
  }]);

  return FitnessTracker;
}(_react2.default.Component);

exports.default = FitnessTracker;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


var MealSummary = function (_React$Component) {
  _inherits(MealSummary, _React$Component);

  function MealSummary() {
    _classCallCheck(this, MealSummary);

    var _this = _possibleConstructorReturn(this, (MealSummary.__proto__ || Object.getPrototypeOf(MealSummary)).call(this));

    _this.state = {
      selectValue: '',
      showFoodFormPopup: false,
      showExerciseFormPopup: false

    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    return _this;
  }

  _createClass(MealSummary, [{
    key: 'handleSelectChange',
    value: function handleSelectChange(e) {
      this.setState({ selectValue: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      if (this.state.selectValue === 'addFood') {
        this.toggleFoodFormPopup();
      } else if (this.state.selectValue === 'addExercise') {
        this.toggleExerciseFormPopup();
      }
    }
  }, {
    key: 'toggleFoodFormPopup',
    value: function toggleFoodFormPopup() {
      this.setState({
        showFoodFormPopup: !this.state.showFoodFormPopup
      });
    }
  }, {
    key: 'toggleExerciseFormPopup',
    value: function toggleExerciseFormPopup() {
      this.setState({
        showExerciseFormPopup: !this.state.showExerciseFormPopup
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Your Daily Summary'
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Total Calories: ',
          this.props.totalCalories
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Enter Food or Exercise'
        ),
        _react2.default.createElement(
          'select',
          {
            value: this.state.selectValue,
            onChange: this.handleSelectChange },
          _react2.default.createElement(
            'option',
            { value: '' },
            'Select Option'
          ),
          _react2.default.createElement(
            'option',
            { value: 'addFood' },
            'Add Food'
          ),
          _react2.default.createElement(
            'option',
            { value: 'addExercise' },
            'Add Exercise'
          )
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleSubmit },
          'Add'
        ),
        this.state.showFoodFormPopup ? _react2.default.createElement(AddMeal, {
          text: 'Close Me',
          closeFoodFormPopup: this.toggleFoodFormPopup.bind(this),
          createFood: this.props.createFood
        }) : null,
        this.state.showExerciseFormPopup ? _react2.default.createElement(AddExercise, {
          text: 'Close Me',
          closeExerciseFormPopup: this.toggleExerciseFormPopup.bind(this),
          createFood: this.props.createFood
        }) : null
      );
    }
  }]);

  return MealSummary;
}(_react2.default.Component);

/*
      <h4>Total Calories: {this.props.totalCalories}</h4>

*/

var FoodTableRow = function FoodTableRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.food.foodName
    ),
    _react2.default.createElement(
      'td',
      null,
      props.food.numberOfServings
    ),
    _react2.default.createElement(
      'td',
      null,
      props.food.mealType
    ),
    _react2.default.createElement(
      'td',
      null,
      props.food.calories
    ),
    _react2.default.createElement(
      'td',
      null,
      props.food.fat
    ),
    _react2.default.createElement(
      'td',
      null,
      props.food.carbohydrates
    )
  );
};

function MealTable(props) {
  var FoodTableRows = props.foods.map(function (food) {
    return _react2.default.createElement(FoodTableRow, { key: food.id, food: food });
  });
  return _react2.default.createElement(
    'table',
    { className: 'bordered-table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Food Name'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Servings'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Meal Type'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Calories'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Fat'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Carbohydrates'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      FoodTableRows
    )
  );
}

var AddExercise = function (_React$Component2) {
  _inherits(AddExercise, _React$Component2);

  function AddExercise() {
    _classCallCheck(this, AddExercise);

    var _this2 = _possibleConstructorReturn(this, (AddExercise.__proto__ || Object.getPrototypeOf(AddExercise)).call(this));

    _this2.state = {};
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(AddExercise, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
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
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { name: 'addExercise', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'ExerciseName', placeholder: 'Exercise Name' }),
          _react2.default.createElement('input', { type: 'text', name: 'calories', placeholder: 'Calories' }),
          _react2.default.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return AddExercise;
}(_react2.default.Component);

var AddMeal = function (_React$Component3) {
  _inherits(AddMeal, _React$Component3);

  function AddMeal() {
    _classCallCheck(this, AddMeal);

    var _this3 = _possibleConstructorReturn(this, (AddMeal.__proto__ || Object.getPrototypeOf(AddMeal)).call(this));

    _this3.state = {
      mealType: 'Breakfast'
    };
    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    _this3.handleSelectChange = _this3.handleSelectChange.bind(_this3);
    return _this3;
  }

  _createClass(AddMeal, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.addMeal;
      this.props.createFood({
        foodName: form.foodName.value,
        calories: form.calories.value,
        mealType: this.state.mealType,
        fat: form.fat.value,
        carbohydrates: form.carbohydrates.value,
        numberOfServings: form.numberOfServings.value
      });

      // Clear the form for the next input.
      form.foodName.value = '';
      form.calories.value = '';
      this.props.closeFoodFormPopup();
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(e) {
      this.setState({ mealType: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { name: 'addMeal', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'foodName', placeholder: 'Food Name' }),
          _react2.default.createElement('input', { type: 'text', name: 'calories', placeholder: 'Calories' }),
          _react2.default.createElement('input', { type: 'text', name: 'fat', placeholder: 'Fat' }),
          _react2.default.createElement('input', { type: 'text', name: 'carbohydrates', placeholder: 'Carbohydrates' }),
          _react2.default.createElement('input', { type: 'number', name: 'numberOfServings', placeholder: 'Number of Servings' }),
          _react2.default.createElement(
            'select',
            {
              value: this.state.mealType,
              onChange: this.handleSelectChange
            },
            _react2.default.createElement(
              'option',
              { value: 'Breakfast' },
              'Breakfast'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lunch' },
              'Lunch'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Dinner' },
              'Dinner'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Snack' },
              'Snack'
            )
          ),
          _react2.default.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return AddMeal;
}(_react2.default.Component);

var Meals = function (_React$Component4) {
  _inherits(Meals, _React$Component4);

  function Meals() {
    _classCallCheck(this, Meals);

    var _this4 = _possibleConstructorReturn(this, (Meals.__proto__ || Object.getPrototypeOf(Meals)).call(this));

    _this4.state = { foods: [],
      totalCalories: 0 };

    _this4.addMeal = _this4.addMeal.bind(_this4);
    return _this4;
  }

  _createClass(Meals, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this5 = this;

      fetch('/api/meals').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            data.records.forEach(function (meal) {
              meal.created = new Date(meal.created);
              //this.setState({totalCalories: Number(this.state.totalCalories)+meal.calories});

              if (meal.completionDate) meal.completionDate = new Date(meal.completionDate);
            });
            _this5.setState({ foods: data.records });
            _this5.setState({ totalCalories: data.totalCalories });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }

    /*
       this.setState({
            foods: foods,
          });
          this.calculateCalories();
    */

  }, {
    key: 'addMeal',
    value: function addMeal(newMeal) {
      var _this6 = this;

      fetch('/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMeal)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedMeal) {
            var newMeals = _this6.state.foods.concat(updatedMeal);
            _this6.setState({ foods: newMeals });
            _this6.setState({ totalCalories: parseInt(_this6.state.totalCalories) + parseInt(updatedMeal.calories) });
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add issue: ' + error.message);
          });
        }
      });
    }

    /*
    const newMeals = this.state.foods.slice();
        newMeal.id = this.state.foods.length + 1;
        newMeals.push(newMeal);
        this.setState({ foods: newMeals,
          totalCalories: Number(this.state.totalCalories) + Number(newMeal.calories)
      });
    */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Meal Tracker'
        ),
        _react2.default.createElement(MealSummary, _defineProperty({ totalCalories: this.totalCalories, createFood: this.addMeal }, 'totalCalories', this.state.totalCalories)),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(MealTable, { foods: this.state.foods }),
        _react2.default.createElement('hr', null)
      );
    }
  }]);

  return Meals;
}(_react2.default.Component);

exports.default = Meals;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


var ReviewMessage = function (_React$Component) {
  _inherits(ReviewMessage, _React$Component);

  function ReviewMessage() {
    _classCallCheck(this, ReviewMessage);

    return _possibleConstructorReturn(this, (ReviewMessage.__proto__ || Object.getPrototypeOf(ReviewMessage)).apply(this, arguments));
  }

  _createClass(ReviewMessage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Let us know how you feel about Watch Your Weight!'
      );
    }
  }]);

  return ReviewMessage;
}(_react2.default.Component);

var ReviewRow = function ReviewRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.issue.name
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.rating
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.comment
    )
  );
};

function ReviewTable(props) {
  var reviewRows = props.reviewInfo.map(function (issue) {
    return _react2.default.createElement(ReviewRow, { key: issue.id, issue: issue });
  });
  return _react2.default.createElement(
    'table',
    { className: 'bordered-table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Name'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Rating'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Comment'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      reviewRows
    )
  );
}

var ReviewAdd = function (_React$Component2) {
  _inherits(ReviewAdd, _React$Component2);

  function ReviewAdd() {
    _classCallCheck(this, ReviewAdd);

    var _this2 = _possibleConstructorReturn(this, (ReviewAdd.__proto__ || Object.getPrototypeOf(ReviewAdd)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.handleSelectChange = _this2.handleSelectChange.bind(_this2);
    return _this2;
  }

  _createClass(ReviewAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      this.props.createReview({
        name: form.name.value,
        rating: form.rating.value,
        comment: form.comment.value
      });

      // Clear the form for the next input.
      form.name.value = '';
      form.rating.value = '';
      form.comment.value = '';
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(e) {
      this.setState({ reviewType: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { name: 'issueAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Name' }),
          _react2.default.createElement('input', { type: 'text', name: 'rating', placeholder: 'Rating' }),
          _react2.default.createElement('hr', null),
          _react2.default.createElement('textarea', { rows: 5, cols: 50, name: 'comment', placeholder: 'Comment' }),
          _react2.default.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return ReviewAdd;
}(_react2.default.Component);

var Review = function (_React$Component3) {
  _inherits(Review, _React$Component3);

  function Review() {
    _classCallCheck(this, Review);

    var _this3 = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this));

    _this3.state = { reviewInfo: [] };

    _this3.add = _this3.add.bind(_this3);
    return _this3;
  }

  _createClass(Review, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this4 = this;

      // setTimeout(() => {
      //   this.setState({
      //     issues: issues
      //   });
      // }, 500);
      fetch('/api/reviews').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            _this4.setState({ reviewInfo: data.records });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: 'add',
    value: function add(newReview) {
      var _this5 = this;

      fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (fixedReview) {
            var newReviews = _this5.state.reviewInfo.concat(fixedReview);
            newReviews.id = 1;
            _this5.setState({ reviewInfo: newReviews });
            //this.setState({ totalCalories: Number(this.state.totalCalories) + Number(newReview.calories)});
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add issue: ' + error.message);
          });
        }
      });
    }

    // createIssue(newIssue) {
    //   const newIssues = this.state.issues.slice();
    //   newIssue.id = this.state.issues.length + 1;
    //   newIssues.push(newIssue);
    //   this.setState({ issues: newIssues });
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Review'
        ),
        _react2.default.createElement(ReviewMessage, null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(ReviewTable, { reviewInfo: this.state.reviewInfo }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(ReviewAdd, { createReview: this.add })
      );
    }
  }]);

  return Review;
}(_react2.default.Component);

exports.default = Review;

/***/ })

},[119]);
//# sourceMappingURL=app.bundle.js.map