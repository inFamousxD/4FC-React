import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    WISHLIST_UPDATED,
    WISHLIST_FAILED
} from './types';

export const getCurrentProfile = () => async dispatch => {
    try {
        // const res = await axios.get(`http://localhost:9000/auth`);
        const res = await axios.get(`https://d2ptygpwftf1gm.cloudfront.net/auth`);
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

export const addToWishlist = ({ identity, warehouseId }) => async dispatch => {
    try {
        console.log('in dispatch')
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ identity, warehouseId });
        // const res = await axios.post(`http://localhost:9000/users/wishlist/add`, body, config);
        const res = await axios.post(`https://d2ptygpwftf1gm.cloudfront.net/users/wishlist/add`, body, config);
        dispatch({
            type: WISHLIST_UPDATED,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: WISHLIST_FAILED,
            payload: errors
        });
    }
}

export const removeFromWishlist = ({ identity, warehouseId }) => async dispatch => {
    try {
        console.log('in dispatch')
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ identity, warehouseId });
        // const res = await axios.post(`http://localhost:9000/users/wishlist/add`, body, config);
        const res = await axios.post(`https://d2ptygpwftf1gm.cloudfront.net/users/wishlist/add`, body, config);
        dispatch({
            type: WISHLIST_UPDATED,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: WISHLIST_FAILED,
            payload: errors
        });
    }
}