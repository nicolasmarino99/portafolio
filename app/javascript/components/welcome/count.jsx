import React, { useState } from 'react'

const Count = props => {
    const [count, setCount] =useState(props.count)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => {
                setCount(count+1)
            } }>
                count up
            </button>
        </div>
    )
}

export default Count