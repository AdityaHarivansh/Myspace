import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

export default class Helpline extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container" style={{marginTop:"4rem"}}>
                    <div className="row" >
                        <div className="col-lg-6"style={{padding:"2rem"}}>>
                            <p style={{fontSize:"5rem",color:"#d74664",fontWeight:"bolder",margin:"0rem"}}>Talk to Someone</p>
                            <p style={{marginTop:"1rem",fontSize:"1.25rem",color:"white"}}>In need of help? Choose your country below:</p>
                            <select style={{marginTop:"2rem",width:"100%",height:"3rem",background:"#ebab64",color:"white",fontWeight:"bold",fontSize:"1.5rem",borderRadius:"1rem",padding:"0.5rem 1rem"}}>
                                <option>India</option>
                                <option>Australia</option>
                                <option>Spain</option>
                            </select>
                        </div>
                        <div className="col-lg-6" style={{padding:"2rem",background:"#283945",margin:"2rem 0rem",textAlign:"center"}}>
                            <p style={{color:"#ebab64",fontSize:"1.5rem",fontWeight:"bold"}}>AASRA</p>
                            <p style={{color:"white",fontSize:"1.25rem"}}>HOTLINE: 24x7 Helpline: 91-22-27546669</p>
                            <a href="http://www.aasra.info" style={{fontSize:"1rem",color:"#d74664"}}>http://www.aasra.info</a>
                            <p style={{color:"#ebab64",fontSize:"1.5rem",fontWeight:"bold",marginTop:"3rem"}}>Sneha Suicide Prevention Centre</p>
                            <p style={{color:"white",fontSize:"1.25rem"}}>HOTLINE: 24x7 Helpline: 91-44-24640050</p>
                            <a href="https://www.snehaindia.org" style={{fontSize:"1rem",color:"#d74664"}}>https://www.snehaindia.org</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
