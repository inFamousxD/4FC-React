import axios from 'axios';
// import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:9000/auth`);
        // const res = await axios.get(`https://d2ptygpwftf1gm.cloudfront.net/auth`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
        }); 
    }
}
