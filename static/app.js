"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var BodyRow = function BodyRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.userData.height
    ),
    React.createElement(
      "td",
      null,
      props.userData.weight
    ),
    React.createElement(
      "td",
      null,
      props.userData.age
    ),
    React.createElement(
      "td",
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
          "Height"
        ),
        React.createElement(
          "th",
          null,
          "Weight"
        ),
        React.createElement(
          "th",
          null,
          "Age"
        ),
        React.createElement(
          "th",
          null,
          "Gender"
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

// class BodyStats extends React.Component {
//     render() {
//         const borderedStyle = {border: "1px solid black", padding: 6};
//         const bodyData = this.props.bodystats.map(userData => (<BodyRow key={userData.id} userData={userData} />));
//         return (
//           <table style={{borderCollapse: "collapse"}}>
//             <thead>
//               <tr>
//                 <th style={borderedStyle}>Height</th>
//                 <th style={borderedStyle}>Weight</th>
//                 <th style={borderedStyle}>Age</th>
//                 <th style={borderedStyle}>Biological Gender</th>
//               </tr>
//             </thead>
//             <tbody>{bodyData}</tbody>
//           </table>
//         )
//       }
// }

// class BodyRow extends React.Component {
//     render() {
//       const borderedStyle = {border: "1px solid black", padding: 4};
//       const userData = this.props.userData;
//       return (
//         <tr>
//             <td style={borderedStyle}>{userData.height}</td>
//             <td style={borderedStyle}>{userData.weight}</td>
//             <td style={borderedStyle}>{userData.age}</td>
//             <td style={borderedStyle}>{userData.gender}</td>
//         </tr>
//       )
//     }
//   }

var NutritionStats = function (_React$Component) {
  _inherits(NutritionStats, _React$Component);

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

var AddBodyInfo = function (_React$Component2) {
  _inherits(AddBodyInfo, _React$Component2);

  function AddBodyInfo() {
    _classCallCheck(this, AddBodyInfo);

    var _this2 = _possibleConstructorReturn(this, (AddBodyInfo.__proto__ || Object.getPrototypeOf(AddBodyInfo)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
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
        { className: "form-group" },
        React.createElement(
          "form",
          { name: "updateBodyStat", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "height", placeholder: "Height (ft'inches)" }),
          React.createElement("input", { type: "text", name: "weight", placeholder: "Weight (lbs)" }),
          React.createElement("input", { type: "text", name: "age", placeholder: "Age" }),
          React.createElement("hr", null),
          React.createElement(
            "label",
            { "for": "gender" },
            "Biological Gender:"
          ),
          React.createElement(
            "select",
            { "class": "form-control", name: "gender" },
            React.createElement(
              "option",
              null,
              "Male"
            ),
            React.createElement(
              "option",
              null,
              "Female"
            )
          ),
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

var FitnessTracker = function (_React$Component3) {
  _inherits(FitnessTracker, _React$Component3);

  function FitnessTracker() {
    _classCallCheck(this, FitnessTracker);

    var _this3 = _possibleConstructorReturn(this, (FitnessTracker.__proto__ || Object.getPrototypeOf(FitnessTracker)).call(this));

    _this3.state = { bodystats: [] };

    _this3.update = _this3.update.bind(_this3);
    return _this3;
  }

  _createClass(FitnessTracker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;

      fetch('/api/data').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("Hi");

            _this4.setState({ bodystats: data.records });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch bodyStat:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: "update",
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
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add update: ' + error.message);
          });
        }
      });
    }

    // update(userInput) {

    //   bodystats[0] = (userInput);
    //   this.setState({ bodystats: bodystats });
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