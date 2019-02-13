import React, { Component } from 'react';
import { Header, NavMenuMobile } from './Header.js'
import { Body } from './Body.js'
import { Footer } from './Footer.js'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showMenu:false,
    }
  }
  toggle(){
    this.setState({showMenu: !this.state.showMenu})
}
  render() {
    let navMenuMobile = (this.state.showMenu) ? <NavMenuMobile toggle={this.toggle}/> : null 
    return (
      <div className="App">
        <Header showMenu={this.state.showMenu} toggle={this.toggle}/>
        {navMenuMobile}
        <Body/> 
        <Footer/>
      </div>
    );
  }
}

export default App;
