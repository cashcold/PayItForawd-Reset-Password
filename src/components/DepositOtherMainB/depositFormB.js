import React, { Component } from 'react';
import DepositAmount from './DepositAmount/deopsitAmount_B';
import DepositNow from './DepositNow/depositNowB';
class DepositMainForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step: 1,
            depositAmount: ''
        }
        this.next = this.next.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    next =()=>{
        const{step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
        
    }
    render() { 
        const{step} = this.state;
        const {depositAmount} = this.state;
       const  ValuesInfo = {depositAmount}
       switch(step){
           case 1:
               return < DepositAmount next={this.next} ValuesInfo={ValuesInfo} handleChange={this.handleChange}/>
            case 2:
                return <DepositNow next={this.next} ValuesInfo={ValuesInfo} handleChange={this.handleChange}/>
       }
    }
}
 
export default DepositMainForm;