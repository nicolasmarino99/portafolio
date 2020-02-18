import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Navbars from 'components/welcome/navbars'
//import Count from 'components/welcome/count'
//import AddLetters from 'components/welcome/addletters'

const Welcome = props => (
    <div>
        <Navbars />
        
    </div>
)

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(
        <Welcome />,
        document.getElementById('welcome')
    )
})