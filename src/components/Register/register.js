import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import Footer from '../../footer/footer';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullName: '',
            userName: '',
            password: '',
            email: '',
            bitcoin: '',
            bitcoinCash: '',
            PerfectMoney: '',
            payPal: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }
   
    handleChange = input => (event)=>{
        this.setState({[input]: event.target.value})
    }
  
    render() { 
        const {fullName,userName,password,email,bitcoin,bitcoinCash,PerfectMoney,payPal} = this.state;
        const values = {fullName,userName,password,email,bitcoin,bitcoinCash,PerfectMoney,payPal}
        return ( 
            <div className='register'>
                <div className='main-form'>
                    <div className='accountInfo'>
                        <h1><img style={{width: "200px"}} src={require('../../pic/iconfinder_list-add-user_9381.png')} alt='pic'/>ACCOUNT INFORMATION</h1>
                       <div className='info'>
                       <form>
                            <table>
                                <tr>
                                    <td><label>Full Name:</label></td>
                                    <td><input onChange={this.handleChange('fullName')}
                                    defaultValue={fullName} /></td>
                                </tr>
                                <tr>
                                    <td><label>Username:</label></td>
                                    <td><input  onChange={this.handleChange('userName')}
                                    defaultValue={userName} /></td>
                                </tr>
                                <tr>
                                    <td><label>Define Password:</label></td>
                                    <td><input   onChange={this.handleChange('password')}
                                    defaultValue={password}/></td>
                                </tr>
                                <tr>
                                    <td><label>Email Address:</label></td>
                                    <td><input  onChange={this.handleChange('email')}
                                    defaultValue={email} /></td>
                                </tr>
                            </table>
                        </form>
                       </div>
                    </div>
                    <div className='paymentAddress'>
                        <div className='addressPayOut'>
                            <div className='payOutImg'>
                                <h1><img style={{width: "200px"}}  src={require('../../pic/viacheslav-bublyk-6WXbPWhT8c8-unsplash.jpg')} alt='pic'/>PAYMENT ADDRESS</h1>
                                <div className='payForm'>
                                    <div className='form'>
                                <form>
                                    <table>
                                        <tr>
                                            <td><label><img style={{width: "80px"}} src={require('../../pic/iconfinder_Coin_Bitcoin-01_1222711.png')} alt='pic'/>Bitcoin Account:</label></td>
                                            <td><input  onChange={this.handleChange('bitcoin')} />
                                            </td>
                                        </tr>
                                        <tr>
                                        <td><label><img style={{width: "90px"}} src={require('../../pic/unnamed.png')} alt='pic'/>PerfectMoney Account:</label></td>
                                            <td><input   onChange={this.handleChange('perfectMoney')}/></td>
                                        </tr>
                                        <tr>
                                        <td><label><img style={{width: "80px"}} src={require('../../pic/PayPalCard.png')} alt='pic'/>PayPal:</label></td>
                                            <td><input   onChange={this.handleChange('payPal')}/></td>
                                        </tr>
                                        <tr>
                                        <td><label><img style={{width: "80px"}} src={require('../../pic/bitcoincash-bcash.jpg')} alt='pic'/>Bitcoin Cash:</label></td>
                                            <td><input  onChange={this.handleChange('bitcoinCash')} /></td>
                                        </tr>
                                </table>
                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='comfirmMation'>
                            <h1>CONFIRMATION</h1>
                        <div className='confirm'>
                            <div className='finalConfirm'>
                                <div className='shortnote'>
                                  <h3>Your Upline:</h3>
                                </div>
                                <p><input type="checkbox" />I accept <span style={{color: "red"}}>Terms of Services</span></p>
                            </div>
                            <div className='registerFinished'>
                                <a href=''><button className='btn btn-danger' >REGISTER</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Register;