import React, { Component } from 'react';
import '../Stylesheets/login.scss'
import Navbar from '../Components/Navbar';
// import axios from 'axios'

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    // handleSubmit = (e) =>{
    //     console.log(this.state);
    //     e.preventDefault();
    //     axios.post("http://localhost:8081/LoggedIn",this.state)
    //     .then((res)=>{
    //         console.log(res);
    //         this.props.sendData(res)
    //         alert(res.data.msg);
    //         if(res.data.msg == 'User Logged In'){
    //             // this.props.sendData(res.data.data);
    //             console.log(this.props);
    //             this.props.history.push({
    //                 pathname: "/home",
    //                 state:res.data.data
    //             });
    //         }
    //         else
    //         {
    //              this.props.history.push('/');
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err.message);
    //     })
    // }

    handleChange = (e) =>{
        this.setState({
            [e.target.type]: e.target.value,
        })
    }


    render() {


        return (
            <div id="log12">
                <Navbar></Navbar>
                <div id="login" >
                        <form>
                            <h1>LOG IN</h1>
                            <input type="email" placeholder="Email-Id" required onChange={ this.handleChange } /><br />
                            <input type="password" placeholder="Password" required onChange={ this.handleChange } /><br />
                            {/* <input type="checkbox" name="" id="" /><span>Remember Me </span><br /> */}
                            <button id="lbut" onClick={ this.handleSubmit }>Login</button><br/>
                            <a href="/SignUp"><span id="Sulink">Don't have an account?Create one.</span></a>  
                        </form>  
                        
                    </div>
                </div>
        )
    }
}
