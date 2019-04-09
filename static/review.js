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