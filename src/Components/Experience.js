import React, { Component } from 'react'
import Person from '../Assets/person.png'
import Like from '../Assets/like.png'
import Comment from '../Assets/comment.png'
import Save from '../Assets/save.png'
import '../Stylesheets/Experience.scss'

export default class Experience extends Component {
    render() {
        return (
            <div >
                <div className="container" style={{background:"#283945"}}>
                    <div className="row" style={{padding:"1rem"}}>
                        <img src={Person} style={{width:"3rem",height:"3rem",float:"left"}}></img>
                        <p style={{font:"2rem",color:"white",padding:"0.5rem"}}>Your Story</p>
                    </div>
                    <div className="row " style={{padding:"0.5rem 1rem"}}>
                        <input type="text"placeholder="Share your experience" style={{width:"100%",height:"50vh"}}></input>
                    </div>
                    <div className="row" style={{padding:"0.5rem 1rem"}}>
                        <div className="col-lg-4" style={{padding:"0rem",background:"white"}}>
                            <img src={Like} style={{padding:"0.5rem 1rem" ,height:"3rem",width:"4rem",float:"left"}}></img>
                            <p style={{padding:"0.5rem",color:"#131B24",fontSize:"1rem",padding:"1rem",margin:"0rem",fontWeight:"bold"}}>Like</p>
                        </div>
                        <div className="col-lg-4" style={{padding:"0rem",background:"white"}}>
                            <img src={Comment} style={{padding:"0.5rem 1rem" ,height:"3rem",width:"4rem",float:"left"}}></img>
                            <p style={{padding:"0.5rem",color:"#131B24",fontSize:"1rem",padding:"1rem",margin:"0rem",fontWeight:"bold"}}>Comment</p>
                        </div>
                        <div className="col-lg-4" style={{padding:"0rem",background:"white"}}>
                            <img src={Save} style={{padding:"0.5rem 1rem" ,height:"3rem",width:"4rem",float:"left"}}></img>
                            <p style={{padding:"0.5rem",color:"#131B24",fontSize:"1rem",padding:"1rem",margin:"0rem",fontWeight:"bold"}}>Save</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
