import React from 'react'

function Smurf(props) {
    const { name, age, height } = props.data

    return (
        <div>
            <h3>{name}</h3>
            <h4>{age}</h4>
            <h5>{height}</h5>
        </div>
    )
}

export default Smurf