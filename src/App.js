import React, { Component } from 'react'
// import Navbar from './Components/Navbar'
import Articles from './Screens/Articles'


export default class App extends Component {
  render() {
    return (
      <div style={{background:"#131B24"}}>
        {/* <Navbar></Navbar> */}
        <Articles></Articles>
      </div>
    )
  }
}
