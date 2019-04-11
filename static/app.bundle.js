webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
module.exports = __webpack_require__(121);


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');
var BodyRow = function BodyRow(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.userData.height
    ),
    React.createElement(
      'td',
      null,
      props.userData.weight
    ),
    React.createElement(
      'td',
      null,
      props.userData.age
    ),
    React.createElement(
      'td',
      null,
      props.userData.activity
    ),
    React.createElement(
      'td',
      null,
      props.userData.gender
    )
  );
};

function BodyStats(props) {
  var bodyData = props.bodystats.map(function (userData, index) {
    return React.createElement(BodyRow, { key: index, userData: userData });
  });
  return React.createElement(
    'div',
    { style: { textAlign: 'center' } },
    React.createElement(
      'table',
      { className: 'bordered-table', style: { fontFamily: 'Bookman Old Style', marginLeft: '37%' } },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Height'
          ),
          React.createElement(
            'th',
            null,
            'Weight'
          ),
          React.createElement(
            'th',
            null,
            'Age'
          ),
          React.createElement(
            'th',
            null,
            'Activity'
          ),
          React.createElement(
            'th',
            null,
            'Gender'
          )
        )
      ),
      React.createElement(
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
      return React.createElement(
        'div',
        { style: { fontFamily: 'Bookman Old Style', fontStyle: 'bold', fontSize: '25px', textAlign: 'center' } },
        React.createElement(
          'h1',
          null,
          'Suggested Caloric Intake: '
        ),
        React.createElement(
          'h1',
          { style: { color: 'green' } },
          this.props.calories
        )
      );
    }
  }]);

  return NutritionStats;
}(React.Component);

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
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { style: { fontFamily: 'Bookman Old Style' }, name: 'updateBodyStat', onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'height', maxLength: '4', placeholder: 'Height (ft\'inches)', style: { borderRadius: '5px' } }),
          React.createElement('input', { type: 'text', name: 'weight', maxLength: '3', placeholder: 'Weight (lbs)', style: { borderRadius: '5px' } }),
          React.createElement('input', { type: 'text', name: 'age', maxLength: '2', placeholder: 'Age', style: { borderRadius: '5px' } }),
          React.createElement('hr', null),
          React.createElement(
            'label',
            { name: 'activity' },
            'Activity Level:'
          ),
          React.createElement(
            'select',
            { style: { marginRight: '20px' }, name: 'activity' },
            React.createElement(
              'option',
              null,
              'Light'
            ),
            React.createElement(
              'option',
              null,
              'Moderate'
            ),
            React.createElement(
              'option',
              null,
              'Vigorous'
            )
          ),
          React.createElement(
            'label',
            { name: 'gender' },
            'Biological Gender:'
          ),
          React.createElement(
            'select',
            { name: 'gender' },
            React.createElement(
              'option',
              null,
              'Male'
            ),
            React.createElement(
              'option',
              null,
              'Female'
            )
          ),
          React.createElement(
            'button',
            { style: { borderRadius: '5px' } },
            'Update'
          )
        )
      );
    }
  }]);

  return AddBodyInfo;
}(React.Component);

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

      return React.createElement(
        'div',
        { style: { textAlign: "center" } },
        React.createElement(
          'h1',
          { style: { fontStyle: 'bold', fontSize: '100', fontFamily: 'Bookman Old Style', paddingBottom: '50px' } },
          'Calorie Calculator'
        ),
        React.createElement(BodyStats, { bodystats: this.state.bodystats }),
        React.createElement('hr', null),
        React.createElement(AddBodyInfo, { update: this.update }),
        React.createElement('hr', null),
        React.createElement(NutritionStats, { calories: this.state.calories })
      );
    }
  }]);

  return FitnessTracker;
}(React.Component);

ReactDOM.render(React.createElement(FitnessTracker, null), contentNode); // Render the component inside the content Node

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("mealcontent");

var MealSummary = function (_React$Component) {
  _inherits(MealSummary, _React$Component);

  function MealSummary() {
    _classCallCheck(this, MealSummary);

    return _possibleConstructorReturn(this, (MealSummary.__proto__ || Object.getPrototypeOf(MealSummary)).apply(this, arguments));
  }

  _createClass(MealSummary, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          "Enter food name and information"
        )
      );
    }
  }]);

  return MealSummary;
}(React.Component);

/*
      <h4>Total Calories: {this.props.totalCalories}</h4>
 */

var FoodTableRow = function FoodTableRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.food.foodName
    ),
    React.createElement(
      "td",
      null,
      props.food.numberOfServings
    ),
    React.createElement(
      "td",
      null,
      props.food.mealType
    ),
    React.createElement(
      "td",
      null,
      props.food.calories
    ),
    React.createElement(
      "td",
      null,
      props.food.fat
    ),
    React.createElement(
      "td",
      null,
      props.food.carbohydrates
    )
  );
};

function MealTable(props) {
  var FoodTableRows = props.foods.map(function (food) {
    return React.createElement(FoodTableRow, { key: food.id, food: food });
  });
  return React.createElement(
    "table",
    { className: "bordered-table" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Food Name"
        ),
        React.createElement(
          "th",
          null,
          "Servings"
        ),
        React.createElement(
          "th",
          null,
          "Meal Type"
        ),
        React.createElement(
          "th",
          null,
          "Calories"
        ),
        React.createElement(
          "th",
          null,
          "Fat"
        ),
        React.createElement(
          "th",
          null,
          "Carbohydrates"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      FoodTableRows
    )
  );
}

var AddMeal = function (_React$Component2) {
  _inherits(AddMeal, _React$Component2);

  function AddMeal() {
    _classCallCheck(this, AddMeal);

    var _this2 = _possibleConstructorReturn(this, (AddMeal.__proto__ || Object.getPrototypeOf(AddMeal)).call(this));

    _this2.state = {
      mealType: 'Breakfast'
    };
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.handleSelectChange = _this2.handleSelectChange.bind(_this2);
    return _this2;
  }

  _createClass(AddMeal, [{
    key: "handleSubmit",
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
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(e) {
      this.setState({ mealType: e.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "addMeal", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "foodName", placeholder: "Food Name" }),
          React.createElement("input", { type: "text", name: "calories", placeholder: "Calories" }),
          React.createElement("input", { type: "text", name: "fat", placeholder: "Fat" }),
          React.createElement("input", { type: "text", name: "carbohydrates", placeholder: "Carbohydrates" }),
          React.createElement("input", { type: "number", name: "numberOfServings", placeholder: "Number of Servings" }),
          React.createElement(
            "select",
            {
              defaultValue: "Breakfast",
              value: this.state.mealType,
              onChange: this.handleSelectChange
            },
            React.createElement(
              "option",
              { value: "Breakfast" },
              "Breakfast"
            ),
            React.createElement(
              "option",
              { value: "Lunch" },
              "Lunch"
            ),
            React.createElement(
              "option",
              { value: "Dinner" },
              "Dinner"
            ),
            React.createElement(
              "option",
              { value: "Snack" },
              "Snack"
            )
          ),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return AddMeal;
}(React.Component);

var MealList = function (_React$Component3) {
  _inherits(MealList, _React$Component3);

  function MealList() {
    _classCallCheck(this, MealList);

    var _this3 = _possibleConstructorReturn(this, (MealList.__proto__ || Object.getPrototypeOf(MealList)).call(this));

    _this3.state = { foods: [],
      totalCalories: 0 };

    _this3.addMeal = _this3.addMeal.bind(_this3);
    return _this3;
  }

  _createClass(MealList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;

      fetch('/api/meals').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            data.records.forEach(function (meal) {
              meal.created = new Date(meal.created);
              if (meal.completionDate) meal.completionDate = new Date(meal.completionDate);
            });
            _this4.setState({ foods: data.records });
            _this4.setState({ totalCalories: 0 });
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
    key: "addMeal",
    value: function addMeal(newMeal) {
      var _this5 = this;

      fetch('/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMeal)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedMeal) {
            var newMeals = _this5.state.foods.concat(updatedMeal);
            _this5.setState({ foods: newMeals });
            _this5.setState({ totalCalories: newMeals.reduce(function (total, amount) {
                return total.calories + amount.calories;
              }) });
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Meal Tracker"
        ),
        React.createElement(MealSummary, { totalCalories: this.state.totalCalories }),
        React.createElement("hr", null),
        React.createElement(MealTable, { foods: this.state.foods }),
        React.createElement("hr", null),
        React.createElement(AddMeal, { createFood: this.addMeal })
      );
    }
  }]);

  return MealList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MealList, null), contentNode);

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("reviewcontent");

var ReviewMessage = function (_React$Component) {
  _inherits(ReviewMessage, _React$Component);

  function ReviewMessage() {
    _classCallCheck(this, ReviewMessage);

    return _possibleConstructorReturn(this, (ReviewMessage.__proto__ || Object.getPrototypeOf(ReviewMessage)).apply(this, arguments));
  }

  _createClass(ReviewMessage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Let us know how you feel about Watch Your Weight!"
      );
    }
  }]);

  return ReviewMessage;
}(React.Component);

var ReviewRow = function ReviewRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.issue.name
    ),
    React.createElement(
      "td",
      null,
      props.issue.rating
    ),
    React.createElement(
      "td",
      null,
      props.issue.comment
    )
  );
};

function ReviewTable(props) {
  var reviewRows = props.reviewInfo.map(function (issue) {
    return React.createElement(ReviewRow, { key: issue.id, issue: issue });
  });
  return React.createElement(
    "table",
    { className: "bordered-table" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Name"
        ),
        React.createElement(
          "th",
          null,
          "Rating"
        ),
        React.createElement(
          "th",
          null,
          "Comment"
        )
      )
    ),
    React.createElement(
      "tbody",
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
    key: "handleSubmit",
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
    key: "handleSelectChange",
    value: function handleSelectChange(e) {
      this.setState({ reviewType: e.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "issueAdd", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "name", placeholder: "Name" }),
          React.createElement("input", { type: "text", name: "rating", placeholder: "Rating" }),
          React.createElement("hr", null),
          React.createElement("textarea", { rows: 5, cols: 50, name: "comment", "margin-bottom": "0", placeholder: "Comment" }),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return ReviewAdd;
}(React.Component);

var ReviewList = function (_React$Component3) {
  _inherits(ReviewList, _React$Component3);

  function ReviewList() {
    _classCallCheck(this, ReviewList);

    var _this3 = _possibleConstructorReturn(this, (ReviewList.__proto__ || Object.getPrototypeOf(ReviewList)).call(this));

    _this3.state = { reviewInfo: [] };

    _this3.add = _this3.add.bind(_this3);
    return _this3;
  }

  _createClass(ReviewList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
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
    key: "add",
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Review"
        ),
        React.createElement(ReviewMessage, null),
        React.createElement("hr", null),
        React.createElement(ReviewTable, { reviewInfo: this.state.reviewInfo }),
        React.createElement("hr", null),
        React.createElement(ReviewAdd, { createReview: this.add })
      );
    }
  }]);

  return ReviewList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(ReviewList, null), contentNode);

/***/ })

},[117]);
//# sourceMappingURL=app.bundle.js.map