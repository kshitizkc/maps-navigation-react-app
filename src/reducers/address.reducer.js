import { NEW_ADDRESS } from './../actions/types';

const initialState = {
    address: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case NEW_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        default:
            return state;
    }
}
