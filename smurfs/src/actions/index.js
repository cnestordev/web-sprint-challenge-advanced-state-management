import axios from 'axios'

export const GET_SMURFS = 'GET_SMURFS'

export const addSmurf = smurf => dispatch => {
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS, payload: res.data })
        })
}