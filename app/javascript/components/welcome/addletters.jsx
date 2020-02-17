import React, { useState } from 'react'

const AddLetters = props => {
    const [add,setAdd] = useState(props.add)
    return (
        <div>
            <p>Word: { add }</p>
            <button onClick={ () => {
                setAdd(add+"a")
            }}>
                add letter a
            </button>
        </div>
    )
}

export default AddLetters