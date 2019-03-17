//Array of objects and each object == issues
//
const issues = [{
  id: 1,
  status: "Open",
  owner: "Ravan",
  created: new Date("2016-08-15"),
  effort: 5,
  completionDate: undefined,
  title: "Error in console when clicking Add"
}, {
  id: 2,
  status: "Assigned",
  owner: "Eddie",
  created: new Date("2016-08-15"),
  effort: 14,
  completionDate: new Date("2016-08-30"),
  title: "Missing bottom border on panel"
}];

var contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "This is a placeholder for the Issue Filter."
    );
  }
}

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
const IssueRow = props => React.createElement(
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
    props.issue.status
  ),
  React.createElement(
    "td",
    null,
    props.issue.owner
  ),
  React.createElement(
    "td",
    null,
    props.issue.created.toDateString()
  ),
  React.createElement(
    "td",
    null,
    props.issue.effort
  ),
  React.createElement(
    "td",
    null,
    props.issue.completionDate ? props.issue.completionDate.toDateString() : ""
  ),
  React.createElement(
    "td",
    null,
    props.issue.title
  )
);

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
  const issueRows = props.issues.map(issue => React.createElement(IssueRow, { key: issue.id, issue: issue }));
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
          "Status"
        ),
        React.createElement(
          "th",
          null,
          "Owner"
        ),
        React.createElement(
          "th",
          null,
          "Created"
        ),
        React.createElement(
          "th",
          null,
          "Effort"
        ),
        React.createElement(
          "th",
          null,
          "Completion Date"
        ),
        React.createElement(
          "th",
          null,
          "Title"
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

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); //Prevents default broswer action
    let form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date()
    });
    // Clear the form for the next input.
    form.owner.value = '';
    form.title.value = '';
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { name: "issueAdd", onSubmit: this.handleSubmit },
        React.createElement("input", { type: "text", name: "owner", placeholder: "Owner" }),
        React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
        React.createElement(
          "button",
          null,
          "Add"
        )
      )
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };

    this.createIssue = this.createIssue.bind(this);
  }

  //Mounted component in DOM: passed to ReactDOM.render() --> Everything else has been constructed
  componentDidMount() {
    this.loadData();
  }

  //Asynchronous call to grab data-->simulating network call to instantiate test data
  loadData() {
    setTimeout(() => {
      this.setState({
        issues: issues
      });
    }, 500);
  }

  //Slices origninal issue list
  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Issue Tracker"
      ),
      React.createElement(IssueFilter, null),
      React.createElement("hr", null),
      React.createElement(IssueTable, { issues: this.state.issues }),
      React.createElement("hr", null),
      React.createElement(IssueAdd, { createIssue: this.createIssue })
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(React.createElement(IssueList, null), contentNode);