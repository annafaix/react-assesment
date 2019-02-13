import React, { Component } from 'react'
import imageLagom from './homepage-extra-large.png';
import imageMountain from './image.png'

export class Body extends Component{
    render(){
        return(
        <main className="App-main">
          <div className="lagom">
            <div className="wrapp-div-img">
              <img src={imageLagom} className="img-lagom" alt="Lagom" />
            </div>
            <p>APPS unvelis new studio</p>
            <h1>Lagom</h1>
          </div>
          <div className="products-banner">
            <h1>Innovation and experiency design agancy</h1>
            <p>Apps is an innovation and experience design agency.<br/> We exist to create a better future with you.</p>
            <button>Products</button>
          </div>
          <div className="read-more-banner"> 
            <img src={imageMountain} alt="mountain" />
            <div className="read-more">
              <h1>The imaginative application of art and science.</h1>
              <p>We architect, design and deliver iconic experiences, services and products that improve people’s lives.</p>
              <button>Read latests</button>
            </div>
          </div>
        </main>
        )
    }
}