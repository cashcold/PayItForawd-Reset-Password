import React, { Component } from 'react';
import './calcu.css'
class CalCulateProfit extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            depositAmount: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
    render() { 
       const CalculatorEngine = ()=>{
           const depsoitAmountcheck = document.querySelector('.depositAmount').value
          if( depsoitAmountcheck <= 100){
             const Percentage = depsoitAmountcheck * 20/100
              const checkPercent = Percentage
              const OverAllProfit = Number(depsoitAmountcheck) + Number(checkPercent)
              document.querySelector('.toatlProfit').innerHTML = "$"+Percentage + " Profit After    24HRS "
              document.querySelector('.toatlProfit').style.cssText = "font-size: 20px"
              document.querySelector('.toatalAllMoney').innerHTML =OverAllProfit + " TOATAL PROFIT RECEIVED   "
              document.querySelector('.toatalAllMoney').style.cssText = "display: block"

            }else if(depsoitAmountcheck <=200){
                const Percentage = depsoitAmountcheck * 30/100
                const checkPercent = Percentage
                const OverAllProfit = Number(depsoitAmountcheck) + Number(checkPercent)
                document.querySelector('.toatlProfit').innerHTML = "$"+Percentage +" Profit After 48HRS  "
                document.querySelector('.toatlProfit').style.cssText = "font-size: 50px"
               document.querySelector('.toatalAllMoney').innerHTML =OverAllProfit + " TOATAL PROFIT RECEIVED   "
              document.querySelector('.toatalAllMoney').style.cssText = "display: block"

            }
            else if(depsoitAmountcheck <=300){
                const Percentage = depsoitAmountcheck * 40/100
                const checkPercent = Percentage
               const OverAllProfit = Number(depsoitAmountcheck) + Number(checkPercent)
                document.querySelector('.toatlProfit').innerHTML = "$"+Percentage +" Profit After 3 DAYS"
                document.querySelector('.toatlProfit').style.cssText = "font-size: 50px"
                document.querySelector('.toatalAllMoney').innerHTML =OverAllProfit + " TOATAL PROFIT RECEIVED   "
              document.querySelector('.toatalAllMoney').style.cssText = "display: block"

            }
            
            else if(depsoitAmountcheck <=400){
                const Percentage = depsoitAmountcheck * 30/100
                const checkPercent = Percentage
                const OverAllProfit = Number(depsoitAmountcheck) + Number(checkPercent)
                document.querySelector('.toatlProfit').innerHTML = "$"+Percentage +" After Profit 5 DAYS"
                document.querySelector('.toatlProfit').style.cssText = "font-size: 50px"
               document.querySelector('.toatalAllMoney').innerHTML =OverAllProfit + " TOATAL PROFIT RECEIVED   "
              document.querySelector('.toatalAllMoney').style.cssText = "display: block"

            }
            else if(depsoitAmountcheck <=500){
                const Percentage = depsoitAmountcheck * 30/100
                const checkPercent = Percentage
                const OverAllProfit = Number(depsoitAmountcheck) + Number(checkPercent)
                document.querySelector('.toatlProfit').innerHTML = "$"+Percentage +" After Profit  1 WEEK"
                document.querySelector('.toatlProfit').style.cssText = "font-size: 50px"
               document.querySelector('.toatalAllMoney').innerHTML = OverAllProfit + " TOATAL PROFIT RECEIVED   "
            }else{
                document.querySelector('.toatlProfit').innerHTML = "Please Max Investment is 500$ "
                document.querySelector('.toatlProfit').style.cssText = "font-size: 50px"
            }
            
       }
        return ( 
            <div className='calculateProfit'>
                <h1>Calculate Profit</h1>
                <div className='calInterest'>
                    <span>Amount $</span>
                    <input name="depositAmount" className='depositAmount' onChange={this.handleChange('depositAmount')} />
                    <button onClick={CalculatorEngine}>Check</button>
                   <div className='profit'><div className=' toatlProfit'>
                    </div><br/>
                    <div className='btn btn-success toatalAllMoney'></div>
                    <div className=''></div>
                   </div>
                </div>
            </div>
         );
    }
}
 
export default CalCulateProfit;