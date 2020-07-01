import React, { Component } from 'react';
import './style.css'
import AccountDetails from '../AccountDetails/accountDetails';
import AccountProfile from '../AccountProfile/accountProfile';
class MainAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainAccount'>
                <div className='mainMsg'>
                     <h1>ACCOUNT DASHBOARD</h1>
                </div>
                <div className='displayAccountDashBoard'>
                    <AccountDetails/>
                    <AccountProfile/>
                </div>
            </div>
         );
    }
}
 
export default MainAccount;