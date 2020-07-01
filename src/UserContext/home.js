import React, { Component } from 'react';
import UserContext from '../UserContext/UserContext'

class HomePage extends Component {
   static contextType = UserContext

   ComponentDidMount(){
       const user = this.context
   }
    render() { 
        return ( 
                <div>{user.name}</div>
         );
    }
}
 
export default HomePage;