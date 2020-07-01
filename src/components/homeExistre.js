import React, { Component } from 'react';
import './extre.css'
class HomeExtre extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainHome'>
                <div className='extre'>
                    <div className='chatTitle'>
                        <h1>WHAT IS PAYITFORWARD INVESTMENT</h1>
                    </div>
                    <div className='aboutPayitBoth'>
                    <div className='platfrom'>
                        <h4>PayItForward - is an profesional
                                platform, which is created within
                                Bitcoin mining.
                            </h4>
                            <img style={{width: "500px"}} src={require('../../src/pic/bitcoin-3024279_1920.jpg')} alt="pic"/>
                    </div>
                    <div className='platfrom'>
                            <h4>This is a niche platform, which
                                allows Bitcoin resource owners
                                to investing online.
                            </h4>
                            <img style={{width: "450px"}} src={require('../../src/pic/crypto-currency-3130382_1920.jpg')} alt="pic"/>
                    </div>
                </div>
                    <div className='features'>
                        <div className='main-features'>
                            <div className='headFeatures'>
                                <h1 >OUR FEATURES</h1>
                            </div>
                            <div className='headmsg'>
                                <h2><span style={{color: "red"}}>WE LISTEN, YOU PROSPER TODAY,</span><br/>
                                    TOMORROW, TOGETHER
                                </h2>
                                <p>Use modern progressive techhnology to earn money!</p>
                            </div>
                            <div className=''>
                                <div className='MsgOut'>
                                    <h4><span style={{ fontSize: "45px"}}>It's quite simple - we are the best in this field.
                                        Our team has years of experience in online investing
                                        </span></h4>
                                    
                                </div>
                            </div>
                        </div>
                            
                        </div>
               
                    </div>
                    <div className='howTostart'>
                        <div className='startNow'>
                            <div className='nowstart'>
                                <div className='startText'>
                                    
                                <div className='startImg'>
                                    <img style={{width: "200px"}} src={require('../../src/pic/graph-163509_1280.jpg')} alt='pic'/>
                                </div>
                                    <h1> The highest rates of
                                        conversion and quality in
                                      our segment!
                                    </h1>
                                </div>
                                <div className='nowstart'>
                                   <div className='startText'>
                                    <div className='startImg'>
                                        <img style={{width: "200px"}} src={require('../../src/pic/technology-3262130_1920.jpg')} alt='pic'/>
                                    </div>
                                        <h1>Easy in use and
                                            comprehensive user
                                            interface.
                                        </h1>
                                    </div>
                                </div>
                                <div className='nowstart'>
                                    <div className='startText'>
                                    <div className='startImg'>
                                        <img style={{width: "200px"}} src={require('../../src/pic/undraw_business_deal_cpi9 (1).svg')} alt='pic'/>
                                    </div>
                                        <h1>Fast, convenient and
                                            anonymous 
                                            Payments!
                                        </h1>
                                    </div>
                                </div>
                                <div className='nowstart'>
                                    <div className='startText'>
                                    <div className='startImg'>
                                        <img style={{width: "200px"}} src={require('../../src/pic/iconfinder_34_3319609.png')} alt='pic'/>
                                    </div>
                                        <h1>Our technologies sustain
                                            any load and handle any
                                            payment without a delay!
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='startMenu'>
                        <div className='menu'>
                            <h1>HOW TO START MAKING MONEY?</h1>
                            <hr/>
                            <div className='menuText'>
                                <div className='sign'>
                                    <h1>SIGN-UP</h1>
                                    <img style={{width: "100px"}} src={require('../pic/iconfinder_list-add-user_9381.png')} alt='pic'/>
                                </div>
                                <div className='sign'>
                                    <h1>MAKE DEPOSIT</h1>
                                    <img style={{width: "100px"}} src={require('../pic/iconfinder_267_Bank_deposit_cash_money_3990120.png')} alt='pic'/>
                                </div>
                                <div className='sign'>
                                    <h1>EARN</h1>
                                    <img style={{width: "100px"}} src={require('../pic/iconfinder_Money-Increase_379342.svg')} alt='pic'/>
                                </div>
                                <div className='sign'>
                                    <h1>REQUEST
                                        PAYMENT
                                    </h1>
                                    <img style={{width: "100px"}} src={require('../pic/iconfinder_money_bag_2639867.svg')} alt='pic'/>
                                </div>
                            </div>
                            <div className='chatProgram'>
                            <h4>Our program is intended for people willing to achieve their financial freedom but unable to do so because they're not financial experts.</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div className='investmentPlane'> 
                        <h1>OUR INVESTMENT PLAN</h1>
                        <div className='homeInvest'>
                            <div className='plan'>
                                <h1>PLAN 1</h1>
                                <br/>
                                <p>10%<br/>After 24 Hours</p>
                                <br/>
                                <p>MIN: USD 5</p>
                                <p>MAX: USD 100</p>
                                <a href=''><button className='btn btn-success'>Deposit</button></a>
                            </div>
                            <div className='plan'>
                                <h1>PLAN 2</h1>
                                <br/>
                                <p>10%<br/>After 24 Hours</p>
                                <br/>
                                <p>MIN: USD 5</p>
                                <p>MAX: USD 100</p>
                                <a href=''><button className='btn btn-success'>Deposit</button></a>
                            </div>
                            <div className='plan'>
                                <h1>PLAN 3</h1>
                                <br/>
                                <p>10%<br/>After 24 Hours</p>
                                <br/>
                                <p>MIN: USD 5</p>
                                <p>MAX: USD 100</p>
                                <a href=''><button className='btn btn-success'>Deposit</button></a>
                            </div>
                            <div className='plan'>
                                <h1>PLAN 4</h1>
                                <br/>
                                <p>10%<br/>After 24 Hours</p>
                                <br/>
                                <p>MIN: USD 5</p>
                                <p>MAX: USD 100</p>
                                <a href=''><button className='btn btn-success'>Deposit</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='paymentMethod'>
                        <div className='paymentGetWay'>
                            <div className='payment'>
                                <h1>WE SUPPORT</h1>
                                <div className='paymentList'>
                                    <div className='payList'>
                                        <img  style={{width: "200px"}}src={require('../pic/iconfinder__bitcoin_1156710.svg')} alt='pic'/>
                                       
                                    </div>
                                    <div className='payList'>
                                        <img style={{width: "250px"}} src={require('../pic/unnamed.png')} alt='pic'/>
                                    </div>
                                    <div className='payList'>
                                        <img style={{width: "200px"}} src={require('../pic/PayPalCard.png')} alt='pic'/>
                                    </div>
                                    <div className='payList'>
                                        <img style={{width: "200px"}} src={require('../pic/bitcoincash-bcash.jpg')} alt='pic'/>
                                    </div>
                                </div>
                            </div>
                            <div className='registerCompany'>
                                <div className='aboutCompany'>
                                    <div className='companyImg'>
                                        <img style={{width: "500px", borderRadius: "50px"}} src={require('../pic/payItForward.jpg')} alt='pic'/>
                                        <h1>REGISTERED COMPANY: 10125673</h1>
                                        <br/>
                                        <h2>EV SSL CERTIFICATE < img style={{width: "200px"}}  src={require('../pic/lock-img.png')} alt='pic'/></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            );
    }
}
 
export default HomeExtre;