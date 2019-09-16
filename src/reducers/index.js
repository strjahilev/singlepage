import { combineReducers } from 'redux';

import getbook from './get';
import add from './add'


export default combineReducers({

    getbook,
    add
})