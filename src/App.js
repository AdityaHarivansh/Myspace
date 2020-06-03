import React, { Component } from 'react'
// import Navbar from './Components/Navbar'
import Articles from './Screens/Articles'
import Profile from './Screens/Profile'


export default class App extends Component {
  render() {
    return (
      <div style={{background:"#131B24"}}>
        {/* <Navbar></Navbar> */}
        {/* <Articles></Articles> */}
        <Profile></Profile>
      </div>
    )
  }
}
