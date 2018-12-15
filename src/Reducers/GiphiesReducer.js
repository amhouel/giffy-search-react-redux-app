import { TRENDING_SUCCESS, SEARCH_SUCCESS } from "../Actions/types";

const INITIAL_STATE = {
    giphies: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRENDING_SUCCESS:
            return { ...state, giphies: action.payload };
        case SEARCH_SUCCESS:
            return { ...state, giphies: action.payload };
        default:
            return state;
    }
};


