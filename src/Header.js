import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export class NavMenuDesktop extends Component {
    render(){
        return(
            <ul>
                <li>Products</li>
                <li>News</li>
                <li>Contact</li>
                <li><Icon name="shopping basket" size="large"/></li>
            </ul>
        )
    }
}

export class NavMenuMobile extends Component {
    render() {
        return( 
            <div className="menuMobile" onClick={()=> {this.props.toggle()}}>
                <ul>
                    <li>Products</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li><Icon name="shopping basket" size="large"/></li>
                </ul>
          
            </div>
        )
    }
}

export class HamburMenu extends Component {
    render(){
       
        return(
            <React.Fragment>
                <h2 className="menu-title">Menu</h2> 
                <div className="hamburger-menu" onClick={()=> {this.props.toggle()}}>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                </div>
            </React.Fragment>   
        )
    }
}

export class Header extends Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            windowWidth : 0,
        }
    }   
 
    handleResize = () => {
        this.setState({windowWidth: window.innerWidth})
    }
    componentWillMount() {
        this.handleResize()
    }
    componentDidMount() {
        window.addEventListener('resize', ()=> {
            this.handleResize()
        })
    }
    render(){
        let windowWidth = this.state.windowWidth
        let menu
        
        (windowWidth > 0 && windowWidth < 620  ) ? (menu  = <HamburMenu toggle={this.props.toggle} showMenu={this.props.showMenu}/>) : ( menu  = <NavMenuDesktop />) 
      
        return(
            <header className="header">
            <h1>Apps</h1> 
                {menu}
            </header>
        )
    }

}