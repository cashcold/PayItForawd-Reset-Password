import React, { Component } from 'react';
import './style.css'
import Footer from '../../footer/footer';
class Referral extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='referral'>
                <div className='referralMe'>
                    <div className='referralNow'>
                        <h1>AFFILIATE PROGRAM</h1> 
                        <br/>
                        <div className='affilate'>
                            <h4>Our affiliate program works by 1 Level and it's 14% . No need deposit to earn it. All you have to do is share our project idea with others, via sharing your affiliate link available in your personal account.</h4>
                        </div>
                        <div className='affilateWithImg'>
                            <h5>Our Affiliate Program is a great way for you to make money by referring clients. You can use your website, blog, email or even your forum signatures to spread your unique referral link or banners and promote us to your friends, family and co-workers and attract referrals.</h5>
                            <img style={{width: "200px"}} src={require('../../pic/dmitry-demidko-z4VuRg-ZOEg-unsplash.jpg')} alt='pic'/>
                        </div>
                        <div className='affilateMsg'> 
                            <div className='referralMsg'>
                                <h5>We pay commission from any investment made by your referred person.</h5>
                                <img style={{width: "200px"}} src={require('../../pic/iconfinder_267_Bank_deposit_cash_money_3990120.png')} alt='pic'/>
                            </div>
                            <div className='referralMsg'>
                                <h5>You will receive commission of all deposit volumes made by your sub-referrals.</h5>
                                <img style={{width: "200px"}} src={require('../../pic/Evdokimov-Maxim-Bitcoin-1000x600.jpg')} alt='pic'/>
                            </div>
                            <div className='referralMsg'>
                                <h5>Receive commission of all deposit volumes to your account from your referrals.</h5>
                                <img style={{width: "150px"}} src={require('../../pic/iconfinder_Money-Increase_379342.svg')} alt='pic'/>
                            </div>
                        </div>
                        <div className='affilate'>
                            <h1>OUR AFFILIATES</h1>
                            <br/>
                           <div className='ourProgram'>
                               <p>Regular members who have an active deposit can participate in our affiliate program. Commission is 14% . No minimum quantity of invited users required and the affiliate link you receive comes with no obligations and commission will be added to your account balance in the same currency your referral made a deposit. You can find your own affiliate link and banners in the PayItForward member area.</p>
                           </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Referral;