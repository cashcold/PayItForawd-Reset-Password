import React, { Component } from 'react';
import './style.css'
class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.LoginOutKey = this.LoginOutKey.bind(this)
    }
    LoginOutKey = ()=>{
        localStorage.removeItem('x-access-token',)
        window.localStorage = "/login"
    }
    render() { 
       
        return ( 
            <div className='accountDetails'>
                <a href=''><button className='btn btn-success'>< img src={require('../../../pic/icons8-account-50.png')} alt='pic'/><h4>ACCOUNT DASHBOARD</h4></button></a>
                <a href=''><button className='btn btn-danger'>< img src={require('../../../pic/icons8-deposit-64.png')} alt='pic'/><h4>MAKE NEW DEPOSIT</h4></button></a>
                <a href=''><button className='btn btn-warning'>< img src={require('../../../pic/icons8-list-50.png')} alt='pic'/><h4>YOUR DEPOSITS LIST</h4></button></a>
                <a href=''><button className='btn btn-primary'>< img src={require('../../../pic/icons8-activity-history-64.png')} alt='pic'/><h4>DEPOSITS HISTORY</h4></button></a>
                <a href=''><button className='btn btn-success'>< img src={require('../../../pic/icons8-transaction-60.png')} alt='pic'/><h4>WITHDRAW FUNDS</h4></button></a>
                <a href=''><button className='btn btn-danger'>< img src={require('../../../pic/iconfinder_267_Bank_deposit_cash_money_3990120.png')} alt='pic'/><h4>WITHDRAWALS HISTORY</h4></button></a>
                <a href=''><button className='btn btn-warning'>< img style={{width: "60px"}} src={require('../../../pic/iconfinder_34_3319609.png')} alt='pic'/><h4>EARNINGS HISTORY</h4></button></a>
                <a href=''><button className='btn btn-primary'>< img src={require('../../../pic/icons8-social-network-64.png')} alt='pic'/><h4>YOUR REFERRALS</h4></button></a>
                <a href=''><button className='btn btn-danger'>< img src={require('../../../pic/icons8-edit-64.png')} alt='pic'/><h4>EDIT ACCOUNT</h4></button></a>
                <a href=''><button className='btn btn-primary'>< img src={require('../../../pic/icons8-password-1-60.png')} alt='pic'/><h4>SECURITY SETTINGS</h4></button></a>
            </div>
         );
    }
}
 
export default AccountDetails;