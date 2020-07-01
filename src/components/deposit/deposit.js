import React, { Component } from 'react';
import CheckProfile from './CalcuEngine' 
import './style.css'
class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = { profit: '', totalProfilt: '' }

        this.handleChangle = this.handleChangle.bind(this)
    }
    handleChangle = input =>(event)=>{
        this.setState({[input]: event.target.value})
    }
    render() { 
       
       
        return ( 
            <div className='deposit'>
                <span>Deposit </span>
                <div className='form-control-1'>
                    <form>
                        <table>
                            <tr>
                                <div className='infoPlain'>
                                    <div className='infodepo'>
                                    <span className='percentHours'>3.21% hourly for 50 hours </span>
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
                                                    <div><span>Plan 1</span></div>
                                                    <div className='both-Plan'>
                                                        <div><span>$1.00 - $499.00	</span></div>
                                                        <div><span>3.21</span></div>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='calcProfit'>
                                        <a href='/depositNow'><button className='btn btn-success'>DEPOSITE </button></a>
                                       <a href='/calculateProfit' className='btn forgetPassword btn-danger' target='_blank' >Calculate Profit</a>
                                       
                                    </div>
                                </div>
                            </tr>
                            <tr>
                            <div className='infoPlain'>
                                    <div className='infodepo'>
                                    <span className='percentHours'>3.21% hourly for 50 hours </span>
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
                                                    <div><span>Plan 1</span></div>
                                                    <div className='both-Plan'>
                                                        <div><span>$1.00 - $499.00	</span></div>
                                                        <div><span>3.21</span></div>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='calcProfit'>
                                        <a href=''><button className='btn btn-success'>DEPOSITE</button></a>
                                        <button className='btn btn-primary'>Calculate</button>
                                    </div>
                                </div>
                            </tr>
                            <tr>
                            <div className='infoPlain'>
                                    <div className='infodepo'>
                                    <span className='percentHours'>3.21% hourly for 50 hours </span>
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
                                                    <div><span>Plan 1</span></div>
                                                    <div className='both-Plan'>
                                                        <div><span>$1.00 - $499.00	</span></div>
                                                        <div><span>3.21</span></div>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='calcProfit'>
                                        <a href=''><button className='btn btn-success'>DEPOSITE</button></a>
                                        <button className='btn btn-primary'>Calculate</button>
                                    </div>
                                </div>
                            </tr>
                            <tr>
                            <div className='infoPlain'>
                                    <div className='infodepo'>
                                    <span className='percentHours'>3.21% hourly for 50 hours </span>
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
                                                    <div><span>Plan 1</span></div>
                                                    <div className='both-Plan'>
                                                        <div><span>$1.00 - $499.00	</span></div>
                                                        <div><span>3.21</span></div>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='calcProfit'>
                                        <a href=''><button className='btn btn-success'>DEPOSITE</button></a>
                                        <button className='btn btn-primary'>Calculate</button>
                                    </div>
                                </div>
                            </tr>
                            <tr>
                            <div className='infoPlain'>
                                    <div className='infodepo'>
                                    <span className='percentHours'>3.21% hourly for 50 hours </span>
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
                                                    <div><span>Plan 1</span></div>
                                                    <div className='both-Plan'>
                                                        <div><span>$1.00 - $499.00	</span></div>
                                                        <div><span>3.21</span></div>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='calcProfit'>
                                        <a href=''><button className='btn btn-success'>DEPOSITE</button></a>
                                        <button className='btn btn-primary'>Calculate</button>
                                    </div>
                                </div>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Deposit;