import React, { Component } from 'react'
import '../Stylesheets/Articles.scss'
import Navbar from '../Components/Navbar'
import Blog1 from '../Assets/Blog1.png'
import Blog2 from '../Assets/Blog2.png'
import Blog3 from '../Assets/Blog3.png'
import Facebook from '../Assets/facebook.png'
import Instagram from '../Assets/Instagram.png'
import Twitter from '../Assets/twitter.png'
// import Cross from '../Assets/cross.png'
import Logo from '../Assets/White-Logo.PNG'
// import Footer from '../Footer'




export default class Articles extends Component {

    render() {
        return (
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="container" style={{marginTop:"2rem"}}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12 Image" onClick={this.openModal}>
                                    <img src={Blog1} style={{height:"32rem",width:"100%"}}></img>
                                    <div className="overlay">
                                        <div className="text1">
                                            <img src={Logo} style={{height:"20%",width:"25%"}}></img>
                                        </div>
                                        <div className="text">
                                            <p style={{marginTop:"1rem",width:"100%",fontSize:"2rem",fontWeight:"500",color:"#ebab64",fontWeight:"800"}}>The ultimate guide to creating an awesome Mental Health</p>
                                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1.5rem",color:"#d74664",fontWeight:"700"}}>Guide on how to build a Mental Health</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 Image" style={{marginTop:"2rem"}} onClick={this.openModal}>
                                    <img src={Blog1} style={{height:"15rem",width:"100%"}}></img>
                                    <div className="overlay">
                                        <div className="text1">
                                            <img src={Logo} style={{height:"20%",width:"25%"}}></img>
                                        </div>
                                        <div className="text">
                                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1rem",fontWeight:"500",color:"#ebab64",fontWeight:"800"}}>The ultimate guide to creating an awesome Mental Health</p>
                                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"0.75rem",color:"#d74664",fontWeight:"700"}}>Guide on how to build a Mental Health</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 Image" style={{marginTop:"2rem"}} onClick={this.openModal}>
                                    <img src={Blog2} style={{height:"15rem",width:"100%"}}></img>
                                    <div className="overlay">
                                        <div className="text1">
                                            <img src={Logo} style={{height:"20%",width:"25%"}}></img>
                                        </div>
                                        <div className="text">
                                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1rem",fontWeight:"500",color:"#ebab64",fontWeight:"800"}}>The ultimate guide to creating an awesome Mental Health</p>
                                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"0.75rem",color:"#d74664",fontWeight:"700"}}>Guide on how to build a Mental Health</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{padding:"0rem",paddingLeft:"2rem"}} onClick={this.openModal}>
                            <div className="row Image1">
                                <img src={Blog1} style={{height:"15rem",width:"100%"}}></img>
                                <div className="overlay1">
                                        <div className="text11">
                                            <img src={Logo} style={{height:"20%",width:"25%"}}></img>
                                        </div>
                                        <div className="text21">
                                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1rem",fontWeight:"500",color:"#ebab64",fontWeight:"800"}}>The ultimate guide to creating an awesome Mental Health</p>
                                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"0.75rem",color:"#d74664",fontWeight:"700"}}>Guide on how to build a Mental Health</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="row Image2" style={{marginTop:"2rem"}} onClick={this.openModal}>
                                <img src={Blog2} style={{height:"15rem",width:"100%"}}></img>
                                <div className="overlay2">
                                        <div className="text12">
                                            <img src={Logo} style={{height:"20%",width:"25%"}}></img>
                                        </div>
                                        <div className="text22">
                                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1rem",fontWeight:"500",color:"#ebab64",fontWeight:"800"}}>The ultimate guide to creating an awesome Mental Health</p>
                                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"0.75rem",color:"#d74664",fontWeight:"700"}}>Guide on how to build a Mental Health</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="row Image3" style={{marginTop:"2rem"}} onClick={this.openModal}>
                                <img src={Blog3} style={{height:"15rem",width:"100%"}}></img>
                                <div className="overlay3">
                                        <div className="text13">
                                            <img src={Logo} style={{height:"20%",width:"25%"}}></img>
                                        </div>
                                        <div className="text23">
                                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1rem",fontWeight:"500",color:"#ebab64",fontWeight:"800"}}>The ultimate guide to creating an awesome Mental Health</p>
                                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"0.75rem",color:"#d74664",fontWeight:"700"}}>Guide on how to build a Mental Health</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"4rem"}}>
                        <div className="col-lg-2" style={{padding:"0rem",paddingLeft:"1rem"}}>
                            <p style={{fontSize:"2rem",color:"white",style:"float"}}>Anxiety</p>
                        </div>
                        <div className="col-lg-10" style={{padding:"0rem",margin:"auto"}}>
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
                    <div className="row" style={{marginTop:"4rem"}}>
                        <div className="col-lg-2" style={{padding:"0rem",paddingLeft:"1rem"}}>
                            <p style={{fontSize:"2rem",color:"white",style:"float"}}>Depression</p>
                        </div>
                        <div className="col-lg-10" style={{padding:"0rem",margin:"auto"}}>
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
                    <div className="row" style={{marginTop:"4rem"}}>
                        <div className="col-lg-2" style={{padding:"0rem",paddingLeft:"1rem"}}>
                            <p style={{fontSize:"2rem",color:"white",style:"float"}}>Confidence</p>
                        </div>
                        <div className="col-lg-10" style={{padding:"0rem",margin:"auto"}}>
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
                {/* <div style={{background:"#283549",marginTop:"4rem"}}>
                    <div className="container">
                            <Footer></Footer>
                    </div>
                </div> */}
            </div>
        )
    }
}

