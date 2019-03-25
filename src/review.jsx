const issues = [
  {
    id: 1,
    name: "Brian",
    rating: "5",
    comment: "Amazing!"
  },
  {
    id: 2,
    name: "Alex",
    rating: "5",
    comment: "Finally I can get my six-pack!"
    }
];

var contentNode = document.getElementById("reviewcontent");

class IssueFilter extends React.Component {
  render() {
    return <div>Let us know how you feel about Watch Your Weight!</div>;
  }
}

const IssueRow = (props) => (
  <tr>
    <td>{props.issue.id}</td>
    <td>{props.issue.name}</td>
    <td>{props.issue.rating}</td>
    <td>{props.issue.comment}</td>
  </tr>
);

function IssueTable(props) {
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.issueAdd;
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

  handleSelectChange(e){
      this.setState({mealType: e.target.value});
    }

  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="rating" placeholder="Rating" />
          <input type="text" name="comment" placeholder="Comment" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };

    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        issues: issues
      });
    }, 500);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  render() {
    return (
      <div>
        <h1>Review</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<IssueList />, contentNode);