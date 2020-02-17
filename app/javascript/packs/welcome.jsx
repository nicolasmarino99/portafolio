import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Count from 'components/welcome/count'
import AddLetters from 'components/welcome/addletters'





const Welcome = props => (
    <div>
        <h1>Welcome my friend {props.name}</h1>
        <Count count={5}/>
        <AddLetters add={props.name} />
    </div>
)

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(
        <Welcome name="Uliana" />,
        document.getElementById('welcome')
    )
})