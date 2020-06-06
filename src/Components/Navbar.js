import React, { Component } from 'react'
import Logo from '../Assets/Logo.PNG'
import '../Stylesheets/Navbar.scss'
import Switch from '../Assets/switch.png'
import { NavLink } from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand" href="#"><img src={Logo} style={{height:"6rem",width:"8rem",padding:"0rem",marginRight:"20rem"}}></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><img src={Switch} style={{height:"2rem",width:"2rem"}}></img></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{float:"right"}}>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item" style={{fontSize:"1.25rem",margin:"1rem"}}>
                                <NavLink exact={true} to="/" className="nav-link" activeStyle={{backgroundColor:"#ebab64"}} > 
                                    Home
                                </NavLink>
                                {/* <a class="nav-link active" href="/" style={{color:"white",borderRadius:"2rem", padding:"0.5rem"}}>Home <span class="sr-only">(current)</span></a> */}
                            </li>
                            <li class="nav-item" style={{fontSize:"1.25rem",margin:"1rem"}}>
                                <NavLink exact={true} to="/interaction" className="nav-link" activeStyle={{backgroundColor:"#ebab64"}} >   
                                    Interaction
                                </NavLink>
                                {/* <a class="nav-link" href="#" style={{color:"white",borderRadius:"2rem", padding:"0.5rem"}}>Interaction</a> */}
                            </li>
                            <li class="nav-item" style={{fontSize:"1.25rem",margin:"1rem"}}>
                                <NavLink exact={true} to="/articles" className="nav-link" activeStyle={{backgroundColor:"#ebab64"}} >   
                                    Articles
                                </NavLink>
                                {/* <a class="nav-link" href="#" style={{color:"white",borderRadius:"2rem", padding:"0.5rem"}}>Articles</a> */}
                            </li>
                            <li class="nav-item" style={{fontSize:"1.25rem",margin:"1rem"}}>
                                <NavLink exact={true} to="/my-stories" className="nav-link" activeStyle={{backgroundColor:"#ebab64"}} >   
                                    My Stories
                                </NavLink>
                                {/* <a class="nav-link" href="#" style={{color:"white",borderRadius:"2rem", padding:"0.5rem"}}>My Stories</a> */}
                            </li>
                            <li class="nav-item" style={{fontSize:"1.25rem",margin:"1rem"}}>
                                <NavLink exact={true} to="/helpline" className="nav-link" activeStyle={{backgroundColor:"#ebab64"}} >   
                                    Helpline
                                </NavLink>
                                {/* <a class="nav-link" href="#" style={{color:"white",borderRadius:"2rem", padding:"0.5rem"}}>Helpline</a> */}
                            </li>
                            <li class="nav-item" style={{fontSize:"1.25rem",margin:"1rem"}}>
                                <NavLink exact={true} to="/about-us" className="nav-link" activeStyle={{backgroundColor:"#ebab64"}} >   
                                    Testimonials
                                </NavLink>
                                {/* <a class="nav-link" href="#" style={{color:"white",borderRadius:"2rem", padding:"0.5rem"}}>About us</a> */}
                            </li>
                            <li class="nav-item" style={{fontSize:"1.25rem",margin:"1rem"}}>
                                <NavLink exact={true} to="/login" className="nav-link" activeStyle={{backgroundColor:"#ebab64"}} >   
                                    Login
                                </NavLink>
                                {/* <a class="nav-link" href="/Login" style={{color:"white",borderRadius:"2rem", padding:"0.5rem"}}>Log in</a> */}
                            </li>
                        </ul>
                        {/* <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}
