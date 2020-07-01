import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


class ForgotPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            restartLinkPassword: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    handleChange = input => (event)=>{
        this.setState({[input]: event.target.value})
    }
    onSubmit = (event)=>{
        event.preventDefault()
        const saveRestartLinkPassword = {
            email: this.state.restartLinkPassword
        }
        if(!saveRestartLinkPassword.email){
            return(toast.warning("Enter Email",{position: 'top-center'}))
        }    

        axios.post ("http://localhost:8000/user/forgotpassword",saveRestartLinkPassword)
        .then(res => (toast.success("Link have sent to email address")))
        .catch(err => (toast.error(err.response.data)))

    }

    render() { 
        return ( 
            <div className='passwordForgot'>
                <ToastContainer />
                <h1>RECOVERY YOUR PASSWORD VIA INBOX</h1>
                <div className='recoverInput'>
                    <label>Enter Your Email Address: </label>
                    <input placeholder='email' onChange={this.handleChange("restartLinkPassword")}  name='restartLinkPassword'/>
                </div>
                
                <button className='btn btn-success' onClick={this.onSubmit}>Recover Password</button>
            </div>
         );
    }
}
 
export default ForgotPassword;