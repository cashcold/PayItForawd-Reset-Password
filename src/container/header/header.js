import React, { Component } from 'react';
import './style.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Login: false
         }
         this.LogoutNow = this.LogoutNow.bind(this)
    }
    componentDidMount(){
        if(localStorage.getItem('x-access-token') != null)  {
            this.setState({Login: true})
        }
    }

    LogoutNow = ()=>{
        localStorage.removeItem('x-access-token')
    }
    render() { 
        if(this.state.Login){
            document.querySelector(".login-in").style.display = "none"
            document.querySelector(".login-in-out").style.display = "block"
        }
        return ( 
            <div className='header-main'>
                <div className='head'>
                    <div className='logoImg'>
                        <img src={require('../../pic/payItForward.jpg')} alt='pic's/>
                    </div>
                    
                    <div className='navbar'>
                        <ul>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/referral'>REFERRAL </a></li>
                            <li><a href='/about'>ABOUT</a></li>
                            <li><a href='/plan'>PLANS</a></li>
                            <li><a href='/FQA'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className='login-in'>
                        <a href='/register'><button className='btn btn-success'>SIGN-UP</button></a>
                        <a href='/login'><button className='btn btn-primary'>LOGIN</button></a>
                    </div>
                    <div className='login-in-out'>
                        <a href='/dashboard'><button className='btn btn-success'>ACCOUNT</button></a>
                        <a href='/'><button className='btn btn-danger' onClick={this.LogoutNow}>LOGOUT</button></a>
                    </div>
                    <div className='login-'>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Header;