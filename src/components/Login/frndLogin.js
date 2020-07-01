import React, { Component, Fragment } from 'react';
import { Redirect,Link } from 'react-router-dom'
import axios from 'axios'
import {Container ,Button} from 'react-bootstrap'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
// import '../Login/Login.css'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            fields :{
                AdminEmail:'',
            AdminPassword:'',
            },
            errors:{
                AdminEmail:'',
                AdminPassword:'',
            }
        }
    }
    setError = (err, msg) => {
        this.setState({
            error: err,
            errorMessage: msg
        })
    }
    onChangeHandler = (event) => {
        // this.setState({ [event.target.name]: event.target.value })
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        })
    }
    isValidForm=()=>{
        let fields= this.state.fields;
        let errors =this.state.fields;
        let formIsValid=true;
        let validationError=false
        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // validation of Admin Email
            if(!fields["AdminEmail"])
            {
                formIsValid = false;
                validationError =true;
                errors["AdminEmail"]="*plz enter the email id"
            }
            if(typeof fields["AdminEmail"]!== "undefined")
            {
                if (!fields["AdminEmail"].match(mail))
                {
                    validationError =2;
                    formIsValid = false;
                    errors["AdminEmail"]="*plz enter the valid Email"
                }
            }
            if(!fields["AdminPassword"])
            {
                validationError =2;
                formIsValid = false;
                errors["AdminPassword"]="*plz enter the Password"
            }
            this.setState({
                errors:errors,
            })
            return formIsValid
    }
    loginHandler = (event) => {
        event.preventDefault();
        console.log("the satate is...")
        console.log(this.state)
        if (this.isValidForm())
        {
            axios.post('http://localhost:3050/Adminlogin',loginHandler)
            .then(response => {
                console.log("asdfg")
                console.log(response)
                console.log(response.data.token)
                localStorage.setItem("auth", JSON.stringify(response.data.token))
                return token
                this.setState({
                    authlogin: true
                }).then(res => {toast.success("Login Successful !", setTimeout(()=>{
                    toast.success("LOADING ACCOUNT") 
                },2000),{
                    
                    });}).then(res => window.location="/dashboard" ).catch(err => {toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT
                  });
            });
            })
            .catch(error => {
                console.log(error)
            })
        }
        // var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if (!this.state.AdminEmail.match(mail)) {
        //     console.log("email id is incorrect");
        //     this.setError(true,'invalid pattern email');
        //     return;
        //   }
        //   if (!this.state.AdminEmail===" ") {
        //     console.log("email id is incorrect");
        //     this.setState({
        //         error1:"not empty email"
        //     })
        //   }
    }
    render() {
        const { AdminEmail, AdminPassword, authlogin } = this.state
        if (authlogin) {
            return <Redirect to="/login/dashboard"></Redirect>
        }
        console.log("amader")
        console.log(this.state.errors.AdminEmail)
        return (
            <Fragment>
                <Container className="topFixedLoginBanner" fluid={true} className="topFixedBanner p-0">
                <ToastContainer/>
                <div className="topLoginBannerOverlay">
                    <form onSubmit={this.loginHandler} className="loginForm">
                        <h1 className="loginForm-h1">LOGIN</h1><br></br><br></br><br></br>
                        <label className="loginForm-label">Admin Email</label><br></br>
                        <input type="text" onChange={this.onChangeHandler} className="loginForm-textBox" name="AdminEmail" value={AdminEmail} placeholder="email" ></input><br></br>
                        <div className="errMessage">{this.state.errors.AdminEmail}</div>
                        <label className="loginForm-label">Admin Password</label><br></br>
                        <input type="password" onChange={this.onChangeHandler} className="loginForm-textBox" name="AdminPassword" value={AdminPassword} placeholder="password" ></input><br></br>
                        <div className="errMessage">{this.state.errors.AdminPassword}</div>
                        <br></br><input type="submit" value="Sign In"  className="loginForm-submit"></input><br></br>
                        <div>
                            <br></br><br></br><br></br>
                        <Button variant="light" ><Link to="/register">Register</Link></Button> 
                        </div>
                        <div></div>
                    </form>
                    </div>
                </Container>
                {/* <span>{this.error1}</span>
                <p>{this.error1}</p> */}
            </Fragment>
        );
    }
}
export default Login;

