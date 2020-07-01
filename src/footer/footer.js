import React, { Component } from 'react';
import './style.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='footer'>
                <div className='footerList'>
                    <div className='footerMsg'>
                        <p>&copy; COPYRIGHT PAYITFORWARD || PRIVACY POLICY || TERMS OF USE || AD CHOICES || COOKIE POLICY || COOKIE SETTINGS</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;