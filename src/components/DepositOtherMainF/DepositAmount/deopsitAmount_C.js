import React, { Component } from 'react';
import './style.css'
class DepositAmount extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

    }
    next = (event)=>{
        event.preventDefault()
        this.props.next()
    }
    render() { 
        const Values = this.props
        return ( 
            <div className='deposit'>
                <span>Deposit </span>
                <div className='form-control-1'>
                    <form>
                        <table>
                            <tr>
                                <div className='infoPlain'>
                                    <div className='infodepo'>
                                    <span className='percentHours'>90% After 48 Hours</span>
                                    </div>
                                    <div className='planSet'>
                                        <div className='plainDetails'>
                                                <div className='detailsPlain'>
                                                    <div><span>Plan</span></div>
                                                    <div className='both-Plan'>
                                                        <div><span>Spent Amount ($)</span></div>
                                                        <div><span>Hourly Profit (%)</span></div>
                                                    </div>
                                                    
                                            </div>
                                            <div className='detailsPlain'>
                                                    <div><span>Plan 2</span></div>
                                                    <div className='both-Plan'>
                                                        <div><span>$1000.00 - $500.00	</span></div>
                                                        <div><span>10.21%</span></div>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='calcProfit'>
                                        <a href='/'><button className='btn btn-success' onClick={this.next}>DEPOSITE </button></a>
                                        <input placeholder="Amount " onChange={this.props.handleChange('depositAmount')} defaultValue={Values.depositAmount}/>
                                       <button className='btn '> <a href='/calculateProfit' target='_blank'>Calculate Profit</a></button>
                                       
                                    </div>
                                </div>
                            </tr>
                            
                            <tr>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default DepositAmount ;