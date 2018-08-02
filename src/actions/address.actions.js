import { NEW_ADDRESS } from './../actions/types';

export const addAddress = (addressData) => dispatch => {

    const URL = 'https://dev-api.shipwell.com/v2/locations/addresses/validate';

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressData)
        })
        .then(res => res.json())
        .then(address => dispatch({
            type: NEW_ADDRESS,
            payload: address
        }));
}
