import axios from 'axios';

import {
    GET_WAREHOUSES,
    WAREHOUSES_ERROR
} from './types';

export const getWarehouseList = () => async dispatch => {
    try {
        // const res = await axios.get(`http://localhost:9000/properties/warehouses/read/all`);
        const res = await axios.get(`https://d2ptygpwftf1gm.cloudfront.net/properties/warehouses/read/all`);
        dispatch({
            type: GET_WAREHOUSES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: WAREHOUSES_ERROR,
        }); 
    }
}