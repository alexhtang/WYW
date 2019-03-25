const issues = [
    {
      id: 1,
      foodName: "Omelette",
      mealType: "Breakfast",
      numberOfServings: 1,
      calories: 350,
      fat: 35,
      carbohydrates: 12
    },
    {
        id: 2,
        foodName: "Grilled Chicken",
        mealType: "Lunch",
        numberOfServings: 2,
        calories: 160,
        fat: 5,
        carbohydrates: 0
      }
  ];
  
  var contentNode = document.getElementById("mealcontent");
  
  class IssueFilter extends React.Component {
    render() {
      return <div>Enter food name and information</div>;
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
  const IssueRow = (props) => (
    <tr>
      <td>{props.issue.id}</td>
      <td>{props.issue.foodName}</td>
      <td>{props.issue.mealType}</td>
      <td>{props.issue.numberOfServings}</td>
      <td>{props.issue.calories}</td>
      <td>{props.issue.fat}</td>
      <td>{props.issue.carbohydrates}</td>
    </tr>
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
    const issueRows = props.issues.map(issue => (
      <IssueRow key={issue.id} issue={issue} />
    ));
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Food Name</th>
            <th>Servings</th>
            <th>Meal Type</th>
            <th>Calories</th>
            <th>Fat</th>
            <th>Carbohydrates</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
  
  class IssueAdd extends React.Component {
    constructor() {
      super();
      this.state = {
        mealType: 'Breakfast',
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      let form = document.forms.issueAdd;
      this.props.createIssue({
        foodName: form.foodName.value,
        calories: form.calories.value,
        mealType: this.state.mealType,
        servings: 0,
      });
 
      // Clear the form for the next input.
      form.foodName.value = '';
      form.calories.value = '';
    }

    handleSelectChange(e){
        this.setState({mealType: e.target.value});
      }
  
    render() {
      return (
        <div>
          <form name="issueAdd" onSubmit={this.handleSubmit}>
            <input type="text" name="foodName" placeholder="Food Name" />
            <input type="text" name="calories" placeholder="Calories" />
            <select 
                                defaultValue= 'Breakfast'
                                value={this.state.mealType} 
                                onChange={this.handleSelectChange}
   >
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
        </select>
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
          <h1>Meal Tracker</h1>
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