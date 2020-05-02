import { combineReducers } from 'redux';
import categories from './categories';

const appReducers = combineReducers({
    categories
});

export default appReducers;