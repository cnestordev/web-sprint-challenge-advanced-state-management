import axios from 'axios'
import { v4 as uuid } from 'uuid';

export const GET_SMURFS = 'GET_SMURFS'
export const ADD_SMURF = 'ADD_SMURF'

export const getSmurfs = smurf => dispatch => {
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS, payload: res.data })
        })
}

export const addSmurf = smurf => dispatch => {
    const newSmurf = {
        name: smurf.name,
        age: Number(smurf.age),
        height: `${smurf.height}cm`,
        id: uuid()
    }

    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res.data)
            dispatch({ type: ADD_SMURF, payload: res.data })
        })
        .catch(err => console.log(err))
}