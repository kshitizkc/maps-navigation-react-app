import { NEW_TO_ADDRESS, NEW_FROM_ADDRESS } from './../actions/types';

const initialState = {
    to: {},
    from: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case NEW_TO_ADDRESS:
            return {
                ...state,
                to: action.payload
            }
        case NEW_FROM_ADDRESS:
            return {
                ...state,
                from: action.payload
            }
        default:
            return state;
    }
}
