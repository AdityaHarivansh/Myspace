import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Others from '../Components/Others'
import '../Stylesheets/Feed.scss'

export default class Feed extends Component {
    render() {
        return (
            <div className="Feed-container">
                <Navbar></Navbar>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2" style={{padding:"0rem"}}>

                        </div>
                        <div className="col-lg-8" style={{padding:"0rem",borderRadius:'1rem'}}>
                            <Others id={"123456789"} story={"Luckily, I am aware of what is going on; my head remains calm as I write these words. Letting myself become overcome with the anxiety that is taking hold of my body, the natural response I feel when confronted with difficult tasks or stress, is not going to happen. I would like to show that if they are spotted early enough, mental health problems can be managed and even prevented.Dealing with depression is an everyday struggle. It is definitely true that some days are worse than others, but I have learned to manage it, to become aware of my symptoms, my triggers, and to remain in control.However, this has not always been the case. It is only of late that I have come to understand what is going on inside and the relationship between my body and mind. Awareness is the key to prevention and that is why I would like to share with you my story of battling depression. I do not want anyone else to feel the way I have done, to feel trapped and isolated by mental health problems and to not be able to see a light at the end of the tunnel."}></Others>
                            <Others id={"112233445"} story={"The first big step for me was accepting, or as is often more difficult, realising that I was mentally unwell. It took me a long time to do this. The days I spent lying in my bedroom on my year abroad, telling myself I was 'just bored', was me refusing to accept the reality that was my mental ill health. "}></Others>
                        </div>
                        <div className="col-lg-2" style={{padding:"0rem"}}>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
