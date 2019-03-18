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
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement(BodyRow, { body_weight: "9999",
            body_height: "6'4" })
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
          React.createElement("input", { type: "text", name: "height", placeholder: "Height" }),
          React.createElement("input", { type: "text", name: "weight", placeholder: "Weight" }),
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

var IssueList = function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  function IssueList() {
    _classCallCheck(this, IssueList);

    return _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).apply(this, arguments));
  }

  _createClass(IssueList, [{
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
        React.createElement(BodyStats, null),
        React.createElement("hr", null),
        React.createElement(AddBodyInfo, null),
        React.createElement("hr", null),
        React.createElement(NutritionStats, null)
      );
    }
  }]);

  return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode); // Render the component inside the content Node