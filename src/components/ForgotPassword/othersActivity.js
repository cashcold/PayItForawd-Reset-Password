import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


class ActivitPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPassword: '',
            token: ''
         }

         this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
    
   
   
    onSubmit = (event)=>{
        event.preventDefault()
        const saveLinkPassword = {
            password: this.state
        }
        const token  = this.props.match.params.token
        event.preventDefault()
        axios.post(`http://localhost:8000/user/activtypassword/${token}`, saveLinkPassword).then(res => {toast.success("Password Update") }).catch(err => {toast.error(err.response.data)})
    }
    render() { 
        return ( 
            <div className='passwordForgot'>
                <ToastContainer />
                <h1>ENTER NEW  PASSWORD</h1>
                <div className='recoverInput'>
                    <label>PASSWORD: </label>
                    <input name="newPassword"  onChange={this.handleChange("newPassword")}/>
                </div>
                
                <button className='btn btn-success' onClick={this.onSubmit}>Save Password</button>
            </div>
         );
    }
}
 
export default ActivitPassword;



import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


class ActivitPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPassword: '',
            token: ''
         }

         this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
    
    componentDidMount(){
        let token = this.props.match.params.token
        let splitToken = token.split(" /")
        let reqToken = splitToken[0]
        console.log(reqToken)
        this.setState({token: reqToken})
    }
   
    onSubmit = (event)=>{
        event.preventDefault()
        const saveLinkPassword = {
            password: this.state.newPassword,
            token: this.state.token
        }
        event.preventDefault()
        axios.post(`http://localhost:8000/user/activtypassword/${this.state.token}`, saveLinkPassword).then(res => {toast.success("Password Update") }).catch(err => {toast.error(err.response.data)})
    }
    render() { 
        return ( 
            <div className='passwordForgot'>
                <ToastContainer />
                <h1>ENTER NEW  PASSWORD</h1>
                <div className='recoverInput'>
                    <label>PASSWORD: </label>
                    <input name="newPassword"  onChange={this.handleChange("newPassword")}/>
                </div>
                
                <button className='btn btn-success' onClick={this.onSubmit}>Save Password</button>
            </div>
         );
    }
}
 
export default ActivitPassword;