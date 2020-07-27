import axios from 'axios';

import {
    GET_WAREHOUSES,
    WAREHOUSES_ERROR,
    GET_WAREHOUSE,
    WAREHOUSE_ERROR
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

export const getWarehouse = identifier => async dispatch => {
    try {
        // const res = await axios.get(`http://localhost:9000/properties/warehouses/read/all`);
        const res = await axios.get(`https://d2ptygpwftf1gm.cloudfront.net/properties/warehouses/read/one/${identifier}`);
        dispatch({
            type: GET_WAREHOUSE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: WAREHOUSE_ERROR,
        }); 
    }
}