import React, { Component } from 'react';
import './style.css'
class DepositNow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {ValuesInfo} = this.props;
        return ( 
            <div className='depositNow'>
               <h1>DEPOSIT CONFIRMATION:</h1> 
               <div className='depositContainer'>
                   <div className='depositA'>
                       <span>Plan 2</span>
                       <span>Profit:</span>
                       <span>Principal Return:</span>
                       <span>Principal Withdraw:</span>
                        <span>Amount:   </span>
                       <span>BTC Amount:</span>
                   </div>
                   <div className='depositB'>
                       <span>40% Percent </span>
                       <span>40% After 48 Hours</span>
                       <span>No (included in profit)</span>
                       <span>Not available:</span>
                        <span>${ValuesInfo.depositAmount} </span>
                       <span>BTC Amount:</span>
                       
                   <button className='btn btn-success'>CONFIRM DEPOSIT</button>
                   </div>
                   <div className='depositC'>
                       <img src={require('../../../pic/lock-img.png')} alt='pic'/>
                   </div>
               </div>
            </div>
         );
    }
}
 
export default DepositNow;