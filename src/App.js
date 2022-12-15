import React, { Component } from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ContentFiltering from "./ContentFiltering";
import HealthCareWorkers from "./HealthCareWorkersCheck";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/filter' element={<ContentFiltering />}></Route>
          <Route exact path='/workers' element={< HealthCareWorkers />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App