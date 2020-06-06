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
            <div className="Article-container">
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
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Have Anxiety? Don't worry we have just the thing for you. </p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>11 pro tips to fight anxiety!</p>
                        </div>
                        <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                            <img src={Blog2} style={{height:"15rem",width:"100%"}}></img>
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Parental Anxiety catching upto you?</p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>5 Easy steps to help you become a better parent.</p>
                        </div>
                        <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                            <img src={Blog3} style={{height:"15rem",width:"100%"}}></img>
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Worrying about your career a little too much?</p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>Here are a few tips for you!</p>
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
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Feeling Depressed alot lately?</p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>Few tips to make you feel better!</p>
                        </div>
                        <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                            <img src={Blog2} style={{height:"15rem",width:"100%"}}></img>
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Depressed about your life?</p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>A few insider from experts to make it worth living!</p>
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
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Running low on Confidence?</p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>This article will help it boost back up!</p>
                        </div>
                        <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                            <img src={Blog2} style={{height:"15rem",width:"100%"}}></img>
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Self Confidence is a key to success</p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>Build self Confidence like a pro!</p>
                        </div>
                        <div className="col-lg-4" style={{padding:"1rem"}} onClick={this.openModal}>
                            <img src={Blog3} style={{height:"15rem",width:"100%"}}></img>
                            <p style={{marginTop:"1rem",width:"100%",fontSize:"1.5rem",fontWeight:"500",color:"#ebab64"}}>Learn from the best of the best in developing the traits you need.</p>
                            <p style={{marginTop:"0.5rem",width:"100%",fontSize:"1rem",color:"#d74664"}}>Guide on how to build a successful career</p>
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

