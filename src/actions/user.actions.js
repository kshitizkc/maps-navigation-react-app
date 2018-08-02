import { FETCH_USER } from './../actions/types';


export const fetchUser = () => dispatch => {
    const URL = 'https://dev-api.shipwell.com/v2/auth/me';
        const token = 'Token 4c4547fe6ad68c57cbac0a8cfbfec35b';
        const headers = {
            Authorization: token 
        }
        fetch(URL, { headers })
            .then(res => res.json())
            .then(user => dispatch({
                type: FETCH_USER,
                payload: user
            })
        );
}
