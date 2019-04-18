import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, withRouter, IndexRoute, Link } from 'react-router';

import Dashboard from './Dashboard.jsx';
import FitnessTracker from './FitnessTracker.jsx';
import Meals from './Meals.jsx';
import Review from './Review.jsx';


var contentNode = document.getElementById("contents");

// A simple component to indicate that a page was not found.
const NoMatch = () => <p>Page Not Found</p>;

// This defines the main application layout that can be used
// across nested routes. The `props.children` property is received
// by the parent route. See the route definitions below.
const App = (props) => (
  <div>
      <div className="header">
<nav className=" header navbar navbar-expand-lg navbar-light border-dark border-bottom rounded-bottom">
        <Link to ="/">
       <a className="navbar-brand" >WYW</a> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to = "/FitnessTracker">Fitness Tracker</Link>            </li>
            <li className="nav-item active">
             
              <Link to = "/Meals">Meals</Link>
            </li>
            <li className="nav-item active">
            <Link to = "/Review">Reviews</Link>            </li>
          </ul>
        </div>
      </nav>

      <p><Link to="/">Logout</Link></p>

    </div>
    <div className="contents">
      {props.children}
    </div>
    <div className="footer">
      COMPSCI 326
    </div>
   
  </div >
);

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

// The "routed app" that defines the different routes that
// are supposed in this application. As you can see, If the
// URL path is '/' we will render the IssueList component,
// if the path is '/issues/:id' we render the IssueEdit component,
// and if we get anything else we render the NoMatch view.
// This router uses the "hash history" approach to implement
// single-page apps with multiple views.
const RoutedApp = () => (
  <Router history={hashHistory} >
    {/* <Redirect from="/" to="/issues" /> - replaced this with the Dashboard component */}
    <Route path="/" component={App} >
      <IndexRoute component={Dashboard} />
      <Router path = "/FitnessTracker" component = {FitnessTracker} />
      <Router path = "/Meals" component = {Meals} />
      <Router path = "/Review" component = {Review} />

      <Route path="*" component={NoMatch} />
    </Route>
  </Router>);

ReactDOM.render(<RoutedApp />, contentNode);
