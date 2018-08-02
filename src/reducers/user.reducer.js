import { FETCH_USER } from './../actions/types';

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER:
            console.log('reducer...', action.payload )
            return {
                ...state,
                user: action.payload 
            }
        default:
            return state;
    }
}