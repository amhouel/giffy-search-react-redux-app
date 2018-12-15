// import config from '../config';
import { TRENDING_SUCCESS, SEARCH_SUCCESS } from './types.js';
import config from '../config.js';

export const giphiesFetch = search => {
    const myapikey = config.API_KEY;

    return async (dispatch) => {
        try{
            const response = await (await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${myapikey}&limit=20`)).json();
            dispatch({ type: SEARCH_SUCCESS, payload: response.data });
        } catch(e){
            console.log(e);
        }
    };
};

export const getTrendingGiphies = () => {
    const myapikey = config.API_KEY;

    return async (dispatch) => {
        try{
            const response = await (await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${myapikey}&limit=10`)).json();
            dispatch({ type: TRENDING_SUCCESS, payload: response.data });
        } catch(e){
            console.log(e);
        }
    };
}