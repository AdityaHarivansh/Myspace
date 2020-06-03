import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Experience from '../Components/Experience'
import Others from '../Components/Others'
import Prof from '../Assets/Prof.png'

import Blog1 from '../Assets/Blog1.png'
import Blog2 from '../Assets/Blog2.png'
import Blog3 from '../Assets/Blog3.png'

export default class Feed extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="row" style={{justifyContent:"center",padding:"1rem"}}>
                                <p style={{background:"#d74664",fontSize:"1.25rem",padding:"0.5rem",color:"white"}}> Favourite Topics</p>
                                <p style={{color:"white",borderRadius:"2rem",border:"0.25rem solid #ebab64",padding:"0.5rem"}}>Anxiety</p>
                                <p style={{color:"white",borderRadius:"2rem",border:"0.25rem solid #ebab64",padding:"0.5rem"}}>Depression</p>
                                <p style={{color:"white",borderRadius:"2rem",border:"0.25rem solid #ebab64",padding:"0.5rem"}}>Confidence</p>
                                <p style={{color:"white",borderRadius:"2rem",border:"0.25rem solid #ebab64",padding:"0.5rem"}}>Hesitations</p>
                                <p style={{color:"white",borderRadius:"2rem",border:"0.25rem solid #ebab64",padding:"0.5rem"}}>Taboos</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <Experience></Experience>
                            <div className="row" style={{marginTop:"4rem"}}>
                                <div className="col-lg-4" style={{padding:"0rem",paddingLeft:"1rem"}}>
                                    <p style={{fontSize:"2rem",color:"white",style:"float"}}>Favourite Articles</p>
                                </div>
                                <div className="col-lg-8" style={{padding:"0rem",margin:"auto"}}>
                                    <div style={{background:"#ebab64",height:"0.5rem"}}></div>
                                </div>
                            </div>

                            <div className="row" style={{marginTop:"4rem"}}>
                                <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                                    <img src={Blog1} style={{height:"15rem",width:"100%"}}></img>
                                    <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>The ultimate guide to creating an awesome Mental Health</p>
                                    <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>Guide on how to build a Mental Health</p>
                                </div>
                                <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                                    <img src={Blog2} style={{height:"15rem",width:"100%"}}></img>
                                    <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>The ultimate guide to creating an awesome Mental Health</p>
                                    <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>Guide on how to build a Mental Health</p>
                                </div>
                                <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                                    <img src={Blog3} style={{height:"15rem",width:"100%"}}></img>
                                    <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>The ultimate guide to creating an awesome Mental Health</p>
                                    <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>Guide on how to build a Mental Health</p>
                                </div>
                                
                            </div>

                        </div>
                        <div className="col-lg-2">
                            <div className="row" style={{justifyContent:"center"}}>
                                <img src={Prof} style={{borderRadius:"100%",height:"8rem",width:"8rem"}}></img>
                            </div>
                            <div className="row" style={{justifyContent:"center"}}>
                                <p style={{color:"white",fontSize:"1.25rem",margin:"0rem",padding:"0.5rem"}}>ID : 123456789</p>
                            </div>
                            <div className="row" style={{justifyContent:"center"}}>
                                <p style={{color:"white",fontSize:"1.25rem",margin:"0rem",padding:"0.5rem"}}>AGE : 21</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
