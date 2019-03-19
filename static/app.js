"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var bodystats = [{
  height: "",
  weight: "",
  age: "",
  gender: ""
}];

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
      var bodyData = this.props.bodystats.map(function (userData) {
        return React.createElement(BodyRow, { key: userData.height, userData: userData });
      });
      return React.createElement(
        "table",
        { style: { borderCollapse: "collapse" } },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { style: borderedStyle },
              "Height"
            ),
            React.createElement(
              "th",
              { style: borderedStyle },
              "Weight"
            ),
            React.createElement(
              "th",
              { style: borderedStyle },
              "Age"
            ),
            React.createElement(
              "th",
              { style: borderedStyle },
              "Biological Gender"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          bodyData
        )
      );
    }
  }]);

  return BodyStats;
}(React.Component);

var BodyRow = function (_React$Component2) {
  _inherits(BodyRow, _React$Component2);

  function BodyRow() {
    _classCallCheck(this, BodyRow);

    return _possibleConstructorReturn(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).apply(this, arguments));
  }

  _createClass(BodyRow, [{
    key: "render",
    value: function render() {
      var borderedStyle = { border: "1px solid black", padding: 4 };
      var userData = this.props.userData;
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          { style: borderedStyle },
          userData.height
        ),
        React.createElement(
          "td",
          { style: borderedStyle },
          userData.weight
        ),
        React.createElement(
          "td",
          { style: borderedStyle },
          userData.age
        ),
        React.createElement(
          "td",
          { style: borderedStyle },
          userData.gender
        )
      );
    }
  }]);

  return BodyRow;
}(React.Component);

var NutritionStats = function (_React$Component3) {
  _inherits(NutritionStats, _React$Component3);

  function NutritionStats() {
    _classCallCheck(this, NutritionStats);

    return _possibleConstructorReturn(this, (NutritionStats.__proto__ || Object.getPrototypeOf(NutritionStats)).apply(this, arguments));
  }

  _createClass(NutritionStats, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "This is a placeholder for ingested calories and meals."
      );
    }
  }]);

  return NutritionStats;
}(React.Component);

var AddBodyInfo = function (_React$Component4) {
  _inherits(AddBodyInfo, _React$Component4);

  function AddBodyInfo() {
    _classCallCheck(this, AddBodyInfo);

    var _this4 = _possibleConstructorReturn(this, (AddBodyInfo.__proto__ || Object.getPrototypeOf(AddBodyInfo)).call(this));

    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    return _this4;
  }

  _createClass(AddBodyInfo, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.updateBodyStat;
      this.props.update({
        height: form.height.value,
        weight: form.weight.value,
        age: form.age.value,
        gender: form.gender.value
      });
      // clear the form for the next input
      form.height.value = "";form.weight.value = "";form.age.value = "";form.gender.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "updateBodyStat", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "height", placeholder: "Height" }),
          React.createElement("input", { type: "text", name: "weight", placeholder: "Weight" }),
          React.createElement("input", { type: "text", name: "age", placeholder: "Age" }),
          React.createElement("input", { type: "text", name: "gender", placeholder: "Biological Gender" }),
          React.createElement(
            "button",
            null,
            "Update"
          )
        )
      );
    }
  }]);

  return AddBodyInfo;
}(React.Component);

var FitnessTracker = function (_React$Component5) {
  _inherits(FitnessTracker, _React$Component5);

  function FitnessTracker() {
    _classCallCheck(this, FitnessTracker);

    var _this5 = _possibleConstructorReturn(this, (FitnessTracker.__proto__ || Object.getPrototypeOf(FitnessTracker)).call(this));

    _this5.state = { bodystats: bodystats };

    _this5.update = _this5.update.bind(_this5);
    return _this5;
  }

  _createClass(FitnessTracker, [{
    key: "update",
    value: function update(userInput) {

      bodystats[0] = userInput;
      this.setState({ bodystats: bodystats });
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
          "Fitness Tracker"
        ),
        React.createElement(BodyStats, { bodystats: this.state.bodystats }),
        React.createElement("hr", null),
        React.createElement(AddBodyInfo, { update: this.update }),
        React.createElement("hr", null),
        React.createElement(NutritionStats, null)
      );
    }
  }]);

  return FitnessTracker;
}(React.Component);

ReactDOM.render(React.createElement(FitnessTracker, null), contentNode); // Render the component inside the content Node