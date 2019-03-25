"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var issues = [{
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
        "Enter food name and information"
      );
    }
  }]);

  return IssueFilter;
}(React.Component);

// NEW: changed the IssueRow class to a "stateless component".
// class IssueRow extends React.Component {
//   render() {
//     const issue = this.props.issue;
//     return (
//       <tr>
//         <td>{issue.id}</td>
//         <td>{issue.status}</td>
//         <td>{issue.owner}</td>
//         <td>{issue.created.toDateString()}</td>
//         <td>{issue.effort}</td>
//         <td>
//           {issue.completionDate ? issue.completionDate.toDateString() : ""}
//         </td>
//         <td>{issue.title}</td>
//       </tr>
//     );
//   }
// }


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
      props.issue.foodName
    ),
    React.createElement(
      "td",
      null,
      props.issue.mealType
    ),
    React.createElement(
      "td",
      null,
      props.issue.numberOfServings
    ),
    React.createElement(
      "td",
      null,
      props.issue.calories
    ),
    React.createElement(
      "td",
      null,
      props.issue.fat
    ),
    React.createElement(
      "td",
      null,
      props.issue.carbohydrates
    )
  );
};

// NEW: changed IssueTable from a class to a "stateless component".
// class IssueTable extends React.Component {
//   render() {
//     const issueRows = this.props.issues.map(issue => (
//       <IssueRow key={issue.id} issue={issue} />
//     ));
//     return (
//       <table className="bordered-table">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Status</th>
//             <th>Owner</th>
//             <th>Created</th>
//             <th>Effort</th>
//             <th>Completion Date</th>
//             <th>Title</th>
//           </tr>
//         </thead>
//         <tbody>{issueRows}</tbody>
//       </table>
//     );
//   }
// }
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
      issueRows
    )
  );
}

var IssueAdd = function (_React$Component2) {
  _inherits(IssueAdd, _React$Component2);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    var _this2 = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

    _this2.state = {
      mealType: 'Breakfast'
    };
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
          { name: "issueAdd", onSubmit: this.handleSubmit },
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
          "Meal Tracker"
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