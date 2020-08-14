import { GET_SMURFS, ADD_SMURF } from '../actions'

const initialState = {
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                smurfs: action.payload
            }
        case ADD_SMURF:
            return {
                smurfs: action.payload
            }
        default:
            return state
    }
}