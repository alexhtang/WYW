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
      return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
          "div",
          { "class": "col-2" },
          " ",
          React.createElement(
            "button",
            { type: "button", "class": "btn btn-primary" },
            "Back"
          )
        ),
        React.createElement(
          "div",
          { "class": "col-8" },
          "Timothy Richards"
        ),
        React.createElement(
          "div",
          { "class": "col-2" },
          " ",
          React.createElement(
            "button",
            { type: "button", "class": "btn btn-primary" },
            "More Options"
          )
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
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          { style: borderedStyle },
          this.props.body_height
        ),
        React.createElement(
          "td",
          { style: borderedStyle },
          this.props.body_weight
        ),
        React.createElement(
          "td",
          { style: borderedStyle },
          this.props.body_age
        ),
        React.createElement(
          "td",
          { style: borderedStyle },
          this.props.body_gender
        )
      );
    }
  }]);

  return BodyRow;
}(React.Component);

var Description = function (_React$Component3) {
  _inherits(Description, _React$Component3);

  function Description() {
    _classCallCheck(this, Description);

    return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
  }

  _createClass(Description, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "This is a placeholder for a description of the webapp."
      );
    }
  }]);

  return Description;
}(React.Component);

var AddLogIn = function (_React$Component4) {
  _inherits(AddLogIn, _React$Component4);

  function AddLogIn() {
    _classCallCheck(this, AddLogIn);

    var _this4 = _possibleConstructorReturn(this, (AddLogIn.__proto__ || Object.getPrototypeOf(AddLogIn)).call(this));

    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    return _this4;
  }

  _createClass(AddLogIn, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.updateBodyStat;
      this.props.createIssue({
        height: form.height.value,
        weight: form.weight.value
      });
      // clear the form for the next input
      form.height.value = "";form.weight.value = "";
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
          React.createElement("input", { type: "text", name: "username", placeholder: "Username" }),
          React.createElement("input", { type: "text", name: "password", placeholder: "Password" }),
          React.createElement(
            "button",
            null,
            "Log In"
          )
        )
      );
    }
  }]);

  return AddLogIn;
}(React.Component);

var TitleTest = function (_React$Component5) {
  _inherits(TitleTest, _React$Component5);

  function TitleTest() {
    _classCallCheck(this, TitleTest);

    return _possibleConstructorReturn(this, (TitleTest.__proto__ || Object.getPrototypeOf(TitleTest)).apply(this, arguments));
  }

  _createClass(TitleTest, [{
    key: "render",
    value: function render() {
      var textStyle = { textAlign: "center" };
      return React.createElement(
        "h1",
        { style: { padding: 40, textAlign: "center" } },
        "Welcome to WYW (Watch Your Weight)"
      );
    }
  }]);

  return TitleTest;
}(React.Component);

var ButtonTable = function (_React$Component6) {
  _inherits(ButtonTable, _React$Component6);

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
        null,
        ' ',
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

var FitnessTracker = function (_React$Component7) {
  _inherits(FitnessTracker, _React$Component7);

  function FitnessTracker() {
    _classCallCheck(this, FitnessTracker);

    return _possibleConstructorReturn(this, (FitnessTracker.__proto__ || Object.getPrototypeOf(FitnessTracker)).apply(this, arguments));
  }

  _createClass(FitnessTracker, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(TitleTest, null),
        React.createElement("hr", null),
        React.createElement(AddLogIn, null),
        React.createElement("hr", null),
        React.createElement(Description, null),
        React.createElement("hr", null),
        React.createElement(ButtonTable, null)
      );
    }
  }]);

  return FitnessTracker;
}(React.Component);

ReactDOM.render(React.createElement(FitnessTracker, null), contentNode); // Render the component inside the content Node