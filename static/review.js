"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var issues = [{
  id: 1,
  name: "Brian",
  rating: "5",
  comment: "Amazing!"
}, {
  id: 2,
  name: "Alex",
  rating: "5",
  comment: "Finally I can get my six-pack!"
}];

var contentNode = document.getElementById("reviewcontent");

var IssueFilter = function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Let us know how you feel about Watch Your Weight!"
      );
    }
  }]);

  return IssueFilter;
}(React.Component);

var IssueRow = function IssueRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.issue.id
    ),
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

function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, { key: issue.id, issue: issue });
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
      issueRows
    )
  );
}

var IssueAdd = function (_React$Component2) {
  _inherits(IssueAdd, _React$Component2);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    var _this2 = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.handleSelectChange = _this2.handleSelectChange.bind(_this2);
    return _this2;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      this.props.createIssue({
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
          { name: "issueAdd", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "name", placeholder: "Name" }),
          React.createElement("input", { type: "text", name: "rating", placeholder: "Rating" }),
          React.createElement("input", { type: "text", name: "comment", placeholder: "Comment" }),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueList = function (_React$Component3) {
  _inherits(IssueList, _React$Component3);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this3 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this3.state = { issues: [] };

    _this3.createIssue = _this3.createIssue.bind(_this3);
    return _this3;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState({
          issues: issues
        });
      }, 500);
    }
  }, {
    key: "createIssue",
    value: function createIssue(newIssue) {
      var newIssues = this.state.issues.slice();
      newIssue.id = this.state.issues.length + 1;
      newIssues.push(newIssue);
      this.setState({ issues: newIssues });
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
          "Review"
        ),
        React.createElement(IssueFilter, null),
        React.createElement("hr", null),
        React.createElement(IssueTable, { issues: this.state.issues }),
        React.createElement("hr", null),
        React.createElement(IssueAdd, { createIssue: this.createIssue })
      );
    }
  }]);

  return IssueList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(IssueList, null), contentNode);