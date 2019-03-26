"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var foods = [{
  id: 1,
  foodName: "Omelette",
  mealType: "Breakfast",
  numberOfServings: 1,
  calories: 350,
  fat: 35,
  carbohydrates: 12
}, {
  id: 2,
  foodName: "Grilled Chicken",
  mealType: "Lunch",
  numberOfServings: 2,
  calories: 160,
  fat: 5,
  carbohydrates: 0
}];

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
        ),
        React.createElement(
          "h4",
          null,
          "Total Calories: ",
          this.props.totalCalories
        )
      );
    }
  }]);

  return MealSummary;
}(React.Component);

var FoodTableRow = function FoodTableRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.food.id
    ),
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
          "Id"
        ),
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
        servings: 0
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
    _this3.calculateCalories = _this3.calculateCalories.bind(_this3);
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

      this.setState({
        foods: foods
      });
      this.calculateCalories();
    }
  }, {
    key: "calculateCalories",
    value: function calculateCalories() {
      var cal = foods.reduce(function (total, amount) {
        return total.calories + amount.calories;
      });
      this.setState({ totalCalories: cal });
    }
  }, {
    key: "addMeal",
    value: function addMeal(newMeal) {
      var newMeals = this.state.foods.slice();
      newMeal.id = this.state.foods.length + 1;
      newMeals.push(newMeal);
      this.setState({ foods: newMeals,
        totalCalories: Number(this.state.totalCalories) + Number(newMeal.calories)
      });
    }
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