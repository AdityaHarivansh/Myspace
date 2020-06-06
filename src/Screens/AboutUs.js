import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Depression1 from '../Assets/Depresion1.jpeg'
import Depression2 from '../Assets/Depresion2.jpeg'
import Depression3 from '../Assets/Depresion3.jpeg'
import Depression4 from '../Assets/Depresion4.jpeg'
import Depression5 from '../Assets/Depresion5.jpeg'
import Depression6 from '../Assets/Depresion6.jpeg'


export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container" style={{background:"#283945", borderRadius:'1rem'}}>
                    <div className="row" style={{padding:"2rem",margin:"2rem"}}>
                        <p style={{fontSize:"1.5rem",color:"white"}}>Prevention is at the heart of what we do. Our knowledge, informed by rigorous research and practical based study, has been pioneering change for more than 70 years and we aren't afraid to challenge the status quo or tackle difficult or under researched issues.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{justifyContent:"center",padding:"2rem"}}>
                            <div className="col-lg-4">
                                <div class="card" style={{width:"100%"}}>
                                    <img class="card-img-top" src={Depression1} style={{height:"40vh"}} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Adam</h5>
                                        <p class="card-text">I was depressed alot lately, but this website helped me come out of it. I'm much more happy these days ...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card" style={{width:"100%"}}>
                                    <img class="card-img-top" src={Depression2} style={{height:"40vh"}} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Julie</h5>
                                        <p class="card-text">Couldn't find a career goal in life due to my low self-confidence. Thankyou Mind Palace for helping me out!</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card" style={{width:"100%"}}>
                                    <img class="card-img-top" src={Depression3} style={{height:"40vh"}} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Sophia</h5>
                                        <p class="card-text">I used to suffer from loneliness and my sleep cycle was ruined. Thanks Mind Palace for helping me out!</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:"center",padding:"2rem"}}>
                            <div className="col-lg-4">
                                <div class="card" style={{width:"100%"}}>
                                    <img class="card-img-top" src={Depression4} style={{height:"40vh"}} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Ava</h5>
                                        <p class="card-text">I was suffering from anxiety and stress but thanks to Mind Palace I feel much better now!</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card" style={{width:"100%"}}>
                                    <img class="card-img-top" src={Depression5} style={{height:"40vh"}} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Sam</h5>
                                        <p class="card-text">I lost my parents at a young age and was depressed throughout my life! Thank you Mind Palace.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card" style={{width:"100%"}}>
                                    <img class="card-img-top" src={Depression6} style={{height:"40vh"}} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Aegon</h5>
                                        <p class="card-text">I had lost my family in a terrorist attack and was left all alone. But thanks to this site I got back up.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}
