import { NEW_TO_ADDRESS, NEW_FROM_ADDRESS } from './../actions/types';

const validateAddress = (addressData) => {
    const URL = 'https://dev-api.shipwell.com/v2/locations/addresses/validate/';
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    return fetch(URL, {
                method: 'POST',
                headers,
                body:  JSON.stringify(addressData)
            }).then(res => res.json());
}


export const addToAddress = (addressData) => dispatch => {
    validateAddress(addressData)
        .then(toAddress => dispatch({
            type: NEW_TO_ADDRESS,
            payload: toAddress
        }));
}

export const addFromAddress = (addressData) => dispatch =>{
    validateAddress(addressData)
        .then(fromAddress => dispatch({
            type: NEW_FROM_ADDRESS,
            payload: fromAddress
        }));
}
