import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import axios  from 'axios'
import './style.css'
class AccountProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            full_Name: '',
            user_Name: '',
            email: '',
            password: '',
            bitcoin: '',
            bitcoinCash: '',
            perfectMoney: '',
            payPal: ''
 
        }
        
    }
    componentDidMount(){
        const token = localStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
        this.setState({
            full_Name: decoded.full_Name,
            user_Name: decoded.user_Name,
            email: decoded.email,
            bitcoin: decoded.bitcoin,
            date: decoded.date


        })
    }
  
    render() { 
        return ( 
            <div className='accountProfile'>
                <div className='profileButton'>
                   <div className='accountFrist'>
                       <img  src={require('../../../pic/490-4904536_user-3d-icon-png-transparent-png.png')} alt='pic'/>
                    <div className='accountFirstMsg'>
                            <h1><span className='dashWelcomeText1' style={{color: "red", fontFamily: "sans-sayif"}}>Welcome</span>   <span className='dashWelcomeText'  style={{color: "black"}}>{this.state.user_Name}</span></h1>
                           <hr/>
                           <br/>
                           <span>Registration Date: {this.state.date}</span>
                           <hr/>
                            <span>Email: {this.state.email}</span>
                           <hr/>
                    </div>
                    <div className='accountInfoMoney'>
                        <button className='btn btn-success' >Account Balance:</button>
                        <button className='btn btn-warning'>Earned Total:</button>
                    </div> 
                   </div>
                   <div className='widthMsg'>
                       <div className='btnMsg'>
                           <a href='/deposit'><button className='btn btn-primary'>MAKE A DEPOSIT</button></a>
                           <a href=''><button  className='btn btn-danger'>WITHDRAW FUNDS</button></a>
                       </div>
                       <span>Your referral link: https://payItForward//?ref=cashcold99</span>
                   </div>
                   <div className='accountLastMsg'>
                       <div className='activeWithdraw'>
                           <ul>
                               <li>Active Deposit:</li>
                               <li>Last Deposit:</li>
                               <li>Total Deposit:</li>
                           </ul>
                       </div>
                       <div className='activeWithdraw'>
                           <ul>
                               <li>Last Withdrawal:</li>
                               <li>Pending Withdrawal:</li>
                               <li>Total Withrawal:</li>
                           </ul>
                       </div>
                   </div>
                </div>
            </div>
         );
    }
}
 
export default AccountProfile;