import {
    GET_WAREHOUSES,
    WAREHOUSES_ERROR
} from '../actions/types';

const initialState = {
    warehouses : [],
    loading : true,
    error : {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_WAREHOUSES: 
            return {
                ...state,
                warehouses: payload,
                loading: false
            }
        case WAREHOUSES_ERROR:
            return {
                ...state,
                warehouses: [],
                loading: false,
                error: payload
            }
        default:
            return state
    }
}