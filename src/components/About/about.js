import React, { Component } from 'react';
import './style.css'
import Footer from '../../footer/footer';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='aboutMain'>
                <div className='about'>
                    <h1>ABOUT PAYITFORWARD<hr/></h1>
                    <div className='aboutMsg'>
                        <div className='firstMsg'>
                            <h4>Our goal is to build a sustainable, reliable and scalable investment model that’s independent of big banks. We have dedicated our energy and creativity to create a user-friendly platform that enables you to enter the world of investment and start earning passive income. Thousands of investors are already taking advantage of this opportunity and many more joining on daily. Whether you are an individual investor or a financial professional, or you represent a corporate or institutional investor, you can benefit from our expertise, stability, and reliable investment approach.</h4>
                        </div>
                    </div>
                    <div className='aboutMsg'>
                        <div className='firstMsg'>
                            <h4>We do not give impracticable promises, all our investment plans are precisely verified and calculated to minimize possible risks. So, becoming our client you will not only receive high daily returns, but also gain confidence and financial stability with a short period of time. We have bank-level security. We give you 100% guaranty of your investment. Your money is safe and secure in our bank . We have bank-level security. We give you 100% guaranty of your investment. In a time of financial uncertainty, there is no better asset to own than income-producing trading, forex trading, or oil and gas businesses. These investments provide tangible yields and have beaten the returns from other asset classes for years.</h4>
                        </div>
                    </div>
                    <div className='aboutMsg'>
                        <div className='firstMsg'>
                            <h4>our team has been developing its own strategies of trading and currency exchange applying all professional knowledge, techniques and skills that allow us to generate stable cash flows with minimal risk of financial loss. The company has the ability to hold elevated cash levels when market risks are considered to be excessive or value is not apparent. The Manager has the ability to look across listed asset classes to seek returns.</h4>
                        </div>
                    </div>
                    <div className='aboutMsg'>
                        <div className='firstMsg'>
                           <img src={require('../../pic/payItForward.jpg')} alt='pic'/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default About;