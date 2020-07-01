import React, { Component } from 'react';
import MainDepositForm from '../DepositOtherMain/depositForm'
import MainDepositFormB from '../DepositOtherMainB/depositFormB'
import MainDepositFormC from '../DepositOtherMainC/depositForm_C'
import MainDepositFormD from '../DepositOtherMainF/depositForm_D'

class AllDeposit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='allDEPOSIT'>
                <MainDepositForm/>
                <MainDepositFormB/>
                <MainDepositFormC/>
                <MainDepositFormD/>
            </div>
         );
    }
}
 
export default AllDeposit;