import React, { Component } from 'react'
import Person from '../Assets/person.png'
import Like from '../Assets/like.png'
import Comment from '../Assets/comment.png'
import Save from '../Assets/save.png'

export default class Others extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{background:"#283945",margin:"1rem"}}>
                    <div className="row" style={{padding:"1rem"}}>
                        <img src={Person} style={{width:"3rem",height:"3rem",float:"left"}}></img>
                        <p style={{font:"2rem",color:"white",padding:"0.5rem"}}>Anonymous</p>
                    </div>
                    <div className="row " style={{padding:"0.5rem 1rem"}}>
                        <p style={{fontSize:"1.5rem",color:"white"}}>
                        Allen Doederlein was diagnosed with major depressive disorder when he was 21. After four years of depression symptoms, the diagnosis helped explain his persistent feelings of hopelessness, agitation, and anxiety, as well as his sleep difficulties.

Doederlein, who now works as the executive director for external affairs at the Depression and Bipolar Support Alliance in Chicago, was in denial that he was depressed for many years.

"I think I might have been diagnosed sooner, but I found it difficult to be completely honest with psychiatrists and even with myself in the first several years I was in need of help," he says. "I believed I could 'shake it off’ or ‘snap out of it.’"

When Doederlein was finally diagnosed, he was fortunate to have a supportive and understanding family. Other family members had been diagnosed with major depressive disorder, so Doederlein's family had some experience with dealing with a depression diagnosis.
                        </p>
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
