import React, { Component } from 'react'
// import Navbar from './Components/Navbar'
import Articles from './Screens/Articles'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './Screens/Login.js';
import SignUp from './Screens/SignUp';



export default class App extends Component {
  render() {
    return (
      // <div style={{background:"#131B24"}}>
      //   <Navbar></Navbar>
      //   <Articles></Articles>
      // </div>

      <Router>
        <div style = {{background:'#131B24'}}>
          <Route exact path="/" component={Articles}></Route>
          <Route exact path = "/login" component={Login}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/articles" component={Articles}></Route>
          <Route exact path="/helpline"></Route>
          <Route exact path="/interaction"></Route>
          <Route exact path="my-stories"></Route>
          <Route exact path="about-us"></Route>
        </div>
      </Router>
    )
  }
}
