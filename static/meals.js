'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("mealcontent");

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
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h4',
          null,
          'Your Daily Summary'
        ),
        React.createElement(
          'h5',
          null,
          'Total Calories: ',
          this.props.totalCalories
        ),
        React.createElement(
          'h4',
          null,
          'Enter Food or Exercise'
        ),
        React.createElement(
          'select',
          {
            value: this.state.selectValue,
            onChange: this.handleSelectChange },
          React.createElement(
            'option',
            { value: '' },
            'Select Option'
          ),
          React.createElement(
            'option',
            { value: 'addFood' },
            'Add Food'
          ),
          React.createElement(
            'option',
            { value: 'addExercise' },
            'Add Exercise'
          )
        ),
        React.createElement(
          'button',
          { onClick: this.handleSubmit },
          'Add'
        ),
        this.state.showFoodFormPopup ? React.createElement(AddMeal, {
          text: 'Close Me',
          closeFoodFormPopup: this.toggleFoodFormPopup.bind(this),
          createFood: this.props.createFood
        }) : null,
        this.state.showExerciseFormPopup ? React.createElement(AddExercise, {
          text: 'Close Me',
          closeExerciseFormPopup: this.toggleExerciseFormPopup.bind(this),
          createFood: this.props.createFood
        }) : null
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
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.food.foodName
    ),
    React.createElement(
      'td',
      null,
      props.food.numberOfServings
    ),
    React.createElement(
      'td',
      null,
      props.food.mealType
    ),
    React.createElement(
      'td',
      null,
      props.food.calories
    ),
    React.createElement(
      'td',
      null,
      props.food.fat
    ),
    React.createElement(
      'td',
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
    'table',
    { className: 'bordered-table' },
    React.createElement(
      'thead',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          'Food Name'
        ),
        React.createElement(
          'th',
          null,
          'Servings'
        ),
        React.createElement(
          'th',
          null,
          'Meal Type'
        ),
        React.createElement(
          'th',
          null,
          'Calories'
        ),
        React.createElement(
          'th',
          null,
          'Fat'
        ),
        React.createElement(
          'th',
          null,
          'Carbohydrates'
        )
      )
    ),
    React.createElement(
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
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { name: 'addExercise', onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'ExerciseName', placeholder: 'Exercise Name' }),
          React.createElement('input', { type: 'text', name: 'calories', placeholder: 'Calories' }),
          React.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return AddExercise;
}(React.Component);

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
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { name: 'addMeal', onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'foodName', placeholder: 'Food Name' }),
          React.createElement('input', { type: 'text', name: 'calories', placeholder: 'Calories' }),
          React.createElement('input', { type: 'text', name: 'fat', placeholder: 'Fat' }),
          React.createElement('input', { type: 'text', name: 'carbohydrates', placeholder: 'Carbohydrates' }),
          React.createElement('input', { type: 'number', name: 'numberOfServings', placeholder: 'Number of Servings' }),
          React.createElement(
            'select',
            {
              value: this.state.mealType,
              onChange: this.handleSelectChange
            },
            React.createElement(
              'option',
              { value: 'Breakfast' },
              'Breakfast'
            ),
            React.createElement(
              'option',
              { value: 'Lunch' },
              'Lunch'
            ),
            React.createElement(
              'option',
              { value: 'Dinner' },
              'Dinner'
            ),
            React.createElement(
              'option',
              { value: 'Snack' },
              'Snack'
            )
          ),
          React.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return AddMeal;
}(React.Component);

var MealList = function (_React$Component4) {
  _inherits(MealList, _React$Component4);

  function MealList() {
    _classCallCheck(this, MealList);

    var _this4 = _possibleConstructorReturn(this, (MealList.__proto__ || Object.getPrototypeOf(MealList)).call(this));

    _this4.state = { foods: [],
      totalCalories: 0 };

    _this4.addMeal = _this4.addMeal.bind(_this4);
    return _this4;
  }

  _createClass(MealList, [{
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
            _this6.setState({ totalCalories: Number(_this6.state.totalCalories) + Number(updatedMeal.calories) });
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
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Meal Tracker'
        ),
        React.createElement(MealSummary, _defineProperty({ totalCalories: this.totalCalories, createFood: this.addMeal }, 'totalCalories', this.state.totalCalories)),
        React.createElement('hr', null),
        React.createElement(MealTable, { foods: this.state.foods }),
        React.createElement('hr', null)
      );
    }
  }]);

  return MealList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MealList, null), contentNode);

//          <AddMeal createFood={this.addMeal} />