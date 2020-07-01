import React, { Component } from 'react';
import './style.css'
import Footer from '../../footer/footer';
class FQA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='FQA'>
                <div className='termsAndCondtion'>
                    <div className='terms'>
                        <h3>How do I register and start?</h3>
                        <p>The entire registration process is very easy: Just press the "sign up" button on the home page of the website. Once registered, you can log in to your dashboard.</p>
                    </div>
                    <div className='terms'>
                        <h3>Do you have any limits for an investment amount?</h3>
                        <p>The minimum investment amount is only 1 USD and the maximum amount per transaction is $25,000 .</p>
                    </div>
                    <div className='terms'>
                        <h3>How soon will my deposit be added to my account?</h3>
                        <p>Your account will be updated instantly as you deposit. For Bitcoin deposits you should send actual amount to shown Bitcoin wallet, and your deposit will be added after 3 confirmations ,it can take from 10 minutes up to 1 hour.</p>
                    </div>
                    <div className='terms'>
                        <h3>Can I invest several deposits at once?</h3>
                        <p>Yes, you can make a deposit from your account balance. Simply log into your member account, click "Make Deposit", select Payment System and enter amount. Then click on "Make Deposit" button.</p>
                    </div>
                    <div className='terms'>
                        <h3>How to withdraw money?</h3>
                        <p>You need to go to "member Area" then click "Request payment or withdraw". Then select balance, and select your processor and then click "REQUEST". Our system will send money instantly as you request.</p>
                    </div>
                    <div className='terms'>
                        <h3>What is the minimum withdrawal amount?</h3>
                        <p>The minimum withdrawal amount is 0.5 USD.</p>
                    </div>
                    <div className='terms'>
                        <h3>What payment processors can be used to fund a wallet?</h3>
                        <p>You can fund a wallet with Bitcoin, PayPal, Bitcoin Cash and Perfect Money</p>
                    </div>
                    <div className='terms'>
                        <h3>How long the withdrawal is sent?</h3>
                        <p>Your withdraw request sent to your payment processor account within 24 hours.</p>
                    </div>
                    <div className='terms'>
                        <h3>How much do I earn?</h3>
                        <p>Our referral commission is based on percentage.

                            We have Referral Plan of 14% .
                        </p>
                    </div> 
                    <div className='terms'>
                        <h3>Do I need to make a deposit to participate in affiliate program?</h3>
                        <p>Deposit is not required to participate in affiliate program, you can earn referral commission as an ordinary member.
                        </p>
                    </div> 
                    <div className='terms'>
                        <h3>Can I change the person who invited me in my Personal Account?</h3>
                        <p>No, you can't
                        </p>
                    </div> 
                    <div className='terms'>
                        <h3>Can I withdraw My Principle Amount?</h3>
                        <p>No investment included in profit.
                        </p>
                    </div> 
                    <div className='terms'>
                        <h3>Can I withdraw My Principle Amount?</h3>
                        <p>No investment included in profit.
                        </p>
                    </div> 
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default FQA;