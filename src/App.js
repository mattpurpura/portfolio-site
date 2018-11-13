import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from './Pages/Landing'


class App extends Component {
  render() {
    return (
     <Router>
       <Route exact path='/' component={Landing} />
     </Router>
    );
  }
}

export default App;
