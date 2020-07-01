import React, { Component } from 'react';
import './style.css'
import HomeExtre from '../homeExistre';
import Footer from '../../footer/footer';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='home'>
                <div className='showMain'>
                    <div className='investChat'>
                        <h3>WELCOME TO PAYITFORWARD INVESTMENT</h3>
                    </div>
                    <div className='otherchat'>
                        <img src={require('../../pic/undraw_business_deal_cpi9.svg')} alt='pic'/>
                    </div>
                    
                </div>
                
              
               <HomeExtre/>
               <Footer/>
            </div>
         );
    }
}
 
export default Home;