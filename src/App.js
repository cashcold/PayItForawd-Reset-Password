import React, { Component } from 'react';
import './App.css'
import Header from './container/header/header';
import Home from './components/Home/home';
import{BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Register from './components/OtthersRegister/otherRegister';
import Login from './components/Login/login';
import About from './components/About/about';
import FQA from './components/FQA/FQA';
import PlanSet from './components/Plan/plan';
import Referral from './components/Referral/referral';
import MainAccount from './components/AccountInfo/MainAccount/mainAccount';
import Deposit from './components/deposit/deposit';
import CalCulateProfit from './components/deposit/calculateProFit';
import DepositNow from './components/depositNow/depositNow';
import MainDepositForm from './components/DepositOtherMain/depositForm'
import AllDeposit from './components/AllDeposit/AllDeposit';
import ForgotPassword from './components/ForgotPassword/forgotPassword';
import ActivitPassword from './components/ForgotPassword/ActivitPassword';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div className='wrapper'>
                        <Header/>
                            <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/plan' component={PlanSet}/>
                                <Route path='/about' component={About}/>
                                <Route path='/FQA' component={FQA}/>
                                <Route path='/referral' component={Referral}/>
                                <Route path='/dashboard' component={MainAccount}/>
                                <Route path='/calculateProfit' component={CalCulateProfit}/>
                                <Route path='/depositNow' component={DepositNow}/>
                                <Route path='/deposit' component={AllDeposit}/>
                                <Route path='/forgotpassword' component={ForgotPassword}/>
                                <Route path='/activitPassword/:token' component={ActivitPassword}/>
                            </Switch> 
                </div>
            </Router>
         );
    }
}
 
export default MainApp;