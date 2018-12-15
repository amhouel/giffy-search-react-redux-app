import { combineReducers } from 'redux';
import GiphiesReducer from './GiphiesReducer';

export default combineReducers({
    giphies: GiphiesReducer
});