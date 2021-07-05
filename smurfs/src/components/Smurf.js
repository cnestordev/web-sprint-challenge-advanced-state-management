import React from 'react'

function Smurf(props) {
    const { name, age, height } = props.data

    const style = {
        border: '1px solid black',
        width: '30%',
        margin: '2% auto',
        textAlign: 'center'
    }

    return (
        <div style={style}>
            <h3>{name}</h3>
            <h4>{age}</h4>
            <h5>{height}</h5>
        </div>
    )
}

export default Smurf