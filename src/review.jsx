// NEW: added the import for react.
import React from 'react';
import {Panel, Form, FormControl, Button, FormGroup, Table, Jumbotron, Collapse, Well} from 'react-bootstrap';


class ReviewMessage extends React.Component {
  render() {
    return <div style = {{fontFamily: "Work Sans", fontSize: '25'}}>Let us know how you feel about Watch Your Weight!</div>;
  }
}

const ReviewRow = (props) => (
  <tr>
    <td>{props.issue.name}</td>
    <td>{props.issue.rating}</td>
    <td style = {{ wordWrap:'break-word', maxWidth: '500px', overflowX: 'auto'}}>{props.issue.comment}</td>
  </tr>
);

function ReviewTable(props) {
  const reviewRows = props.reviewInfo.map(issue => (
    <ReviewRow key={issue.id} issue={issue} />
  ));
  return (
   <div style={{width: '90%', height: '300px', marginLeft: 'auto', marginRight: 'auto', overflowY: 'scroll'}}>
    
    <Table bordered hover >
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        
        <tbody >{reviewRows}</tbody>
        
      </Table>
    
    </div>
  );
}

class ReviewAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      open: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let form = document.forms.issueAdd;
    let form2 = document.forms.commentAdd;

    if((form.name.value).length==0){
      window.alert("Please fill in your name");
    }
    else if((form2.comment.value).length == 0){
      window.alert("Please leave a comment")
    }

    this.props.createReview({
      name: form.name.value,
      rating: form.rating.value,
      comment: form2.comment.value
    });

    // Clear the form for the next input.
    form.name.value = '';
    form.rating.value = '';
    form2.comment.value = '';
    
    this.setState({open: false})
  }

  handleSelectChange(e){
      this.setState({reviewType: e.target.value});
    }

  render() {
    return (
      <div style = {{marginLeft: 'auto', marginRight: 'auto', width: '50%'}}> 
      <Button
        onClick={() => this.setState({ open: !this.state.open })}>
        Add Review</Button>
       <Collapse in = {this.state.open}>
       <div>
       <Panel>
        <Panel.Heading style={{backgroundColor: 'Gainsboro'}}>
            <Form name = "issueAdd" inline>
          
          <FormGroup controlId="formActiviy">
            <FormControl
                  type="text"
                  name = "name"
                  placeholder="Name"
                  style = {{marginRight: '5px'}}
                />
              
              <FormControl name = "rating" style = {{marginRight: '7px', height: '35px'}} onChange = {this.handleSelectChange} componentClass="select" placeholder="select">
                <option value="" selected disabled hidden>Rating</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </FormControl>
          </FormGroup>
          <Button
          onClick = {this.handleSubmit}
          style = {{marginLeft: '5px'}}
          >Add</Button>
          </Form>
        </Panel.Heading>
        <Panel.Body>
        <Form name = 'commentAdd'>
        <FormGroup>
         <FormControl name = "rating" style  = {{height: '100'}} 
         onChange = {this.handleSelectChange} 
         name = "comment"
         componentClass="textarea" 
         placeholder="Leave a comment!">
         </FormControl>
          </FormGroup>
         </Form>
        </Panel.Body>
      </Panel>
      
      </div>
      </Collapse>
      
          {/* <input type="text" name="name" placeholder="Name" required/>
          
          <select name="rating" placeholder="Rating" required>
            <option value="" selected disabled hidden>Rating</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select> */}
          
          
        
      </div>
    );
  }
}

export default class Review extends React.Component {
  constructor() {
    super();
    this.state = { reviewInfo: [] };

    this.add = this.add.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    // setTimeout(() => {
    //   this.setState({
    //     issues: issues
    //   });
    // }, 500);
    fetch('/api/reviews').then(response => {
      if (response.ok) {      
        response.json().then(data => { 
          this.setState({ reviewInfo: data.records }); 
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch issues:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

  add(newReview) {
    fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(fixedReview => {
              const newReviews = this.state.reviewInfo.concat(fixedReview);
              newReviews.id = 1;
              this.setState({ reviewInfo: newReviews });
              //this.setState({ totalCalories: Number(this.state.totalCalories) + Number(newReview.calories)});
            });
        }
        else {
          res.json()
            .then(error => {
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

  render() {
    return (
      <div style = {{textAlign: "center"}}>
        <Jumbotron style={{backgroundColor: 'Gainsboro'}}>
        <h1 style={{fontStyle: 'bold', fontSize: '100', fontFamily: 'Work Sans', paddingBottom: '10px'}}>Review</h1>
        <ReviewMessage />
        </Jumbotron>
        
        <ReviewTable reviewInfo={this.state.reviewInfo} />
        
        <br />
        <ReviewAdd createReview={this.add} />
        
        
      </div>
    );
  }
}

