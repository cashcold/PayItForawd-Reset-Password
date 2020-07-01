import React, { Component } from 'react';
import './style.css'
class DepositNow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='depositNowSlip'>
                <div className='depostSlip'>
                    <h1>DEPSOIT CONFIRMATION:</h1>
                    <input/>
                </div>
            </div>
         );
    }
}
 
export default DepositNow;