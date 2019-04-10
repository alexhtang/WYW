webpackJsonp([0],{

/***/ 117:
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
      { style: { fontFamily: 'Bookman Old Style', marginLeft: '37%' } },
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

/***/ })

},[117]);
//# sourceMappingURL=app.bundle.js.map