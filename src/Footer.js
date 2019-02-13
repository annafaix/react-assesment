import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export class Footer extends Component {
    render(){
        return (
            <footer className="footer">
            <div className="footer-left">
              <h1>Apps</h1>
              <ul>
                <li>Products</li>
                <li>News</li>
                <li>Contact</li>
                <li>Your cart</li>
              </ul>
            </div>
            <div className="footer-right">
              <ul>
                <li><Icon name="google plus g" size="big"/></li>
                <li><Icon name="facebook f" size="big"/></li>
                <li><Icon name="instagram" size="big"/></li>
                <li><Icon name="twitter" size="big"/></li>
              </ul>
              <p>Privacy Policy <br/>© 2017 Google. All Rights Reserved</p>
            </div>
            </footer>
        )
    }
}
