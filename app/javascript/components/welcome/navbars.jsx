import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Spring } from 'react-spring'
import {useSpring, animated} from 'react-spring'

const Navbars = props => {
    return (
        
    <section className="et-hero-tabs">
      <h1>NICOLAS MARIÑO FULLSTACKDEV</h1>
      <h3>See my projects below</h3>
      <div className="et-hero-tabs-container">
        <a className="et-hero-tab" href="#tab-es6">Webdev</a>
        <a className="et-hero-tab" href="#tab-flexbox">Math/visualizations</a>
        <a className="et-hero-tab" href="#tab-react">Gamedev</a>
        <a className="et-hero-tab" href="#tab-angular">Books</a>
        <a className="et-hero-tab" href="#tab-other">Blog</a>
        <span className="et-hero-tab-slider"></span>
      </div>
    </section>
               
        

    )
}
const c1style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5em'
}


export default Navbars
