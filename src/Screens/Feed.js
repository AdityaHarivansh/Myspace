import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Others from '../Components/Others'

export default class Feed extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-8">
                            <Others></Others>
                        </div>
                        <div className="col-lg-2">

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
