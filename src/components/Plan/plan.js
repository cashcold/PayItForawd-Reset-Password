import React, { Component } from 'react';
import DepositPlan  from '../deposit/deposit'
import './style.css'
import Footer from '../../footer/footer';
class PlanSet extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='PlanSets'>
                    <DepositPlan/>
                    <Footer/>
            </div>
         );
    }
}
 
export default PlanSet;