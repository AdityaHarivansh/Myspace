import React, { Component } from 'react'
// import Navbar from './Components/Navbar'
import Articles from './Screens/Articles'
import Profile from './Screens/Profile'
import Feed from './Screens/Feed'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './Screens/Login.js';
import SignUp from './Screens/SignUp';
import Helpline from './Screens/Helpline';
import AboutUs from './Screens/AboutUs';



export default class App extends Component {
  render() {
    return (
      // <div style={{background:"#131B24"}}>
      //   <Navbar></Navbar>
      //   <Articles></Articles>
      // </div>

      <Router>
        <div style = {{background:'#131B24'}}>
          <Route exact path="/" component={Feed}></Route>
          <Route exact path = "/login" component={Login}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/articles" component={Articles}></Route>
          <Route exact path="/helpline" component={Helpline}></Route>
          <Route exact path="/interaction"></Route>
          <Route exact path="/my-stories" component={Profile}></Route>
          <Route exact path="/about-us" component={AboutUs}></Route>
        </div>
      </Router>
    )
  }
}
