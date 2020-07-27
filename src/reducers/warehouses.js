import {
    GET_WAREHOUSES,
    WAREHOUSES_ERROR,
    GET_WAREHOUSE,
    WAREHOUSE_ERROR
} from '../actions/types';

const initialState = {
    warehouses : [],
    warehouse: [],
    loading : true,
    error : {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_WAREHOUSE:
            return {
                ...state,
                warehouse: payload,
                loading: false
            }
        case GET_WAREHOUSES: 
            return {
                ...state,
                warehouses: payload,
                loading: false
            }
        case WAREHOUSES_ERROR:
        case WAREHOUSE_ERROR:
            return {
                ...state,
                warehouses: [],
                warehouse: [],
                loading: false,
                error: payload
            }
        default:
            return state
    }
}