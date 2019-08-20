import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import FormikAppForm from './components/FriendForm';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
            <Link to="/login">Login</Link>
            <div />
            <Link to="/protected">Friends/Add Friend</Link>
            {/* <div />
            <Link to="/protected">Add Friend</Link> */}
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FormikAppForm} />
        <PrivateRoute exact path="/protected" component={FriendsList}/>
      </div>
    </Router>
  );
}

export default App;
