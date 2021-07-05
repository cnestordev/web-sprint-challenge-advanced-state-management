import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addSmurf } from '../actions'

function Form(props) {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = e => {
        const { name, value } = e.target

        setSmurf({
            ...smurf,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(smurf)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="name" placeholder="name" type="text" required />
            <input onChange={handleChange} name="age" placeholder="age" type="number" required />
            <input onChange={handleChange} name="height" placeholder="height in cm" type="number" required />
            <button>Submit</button>
        </form>
    )
}

export default connect(null, { addSmurf })(Form)