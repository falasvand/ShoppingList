import React from 'react';
import {createStore, combineReducers} from 'redux';
import itemsReducer from './reducers/items';

const rootReducer = combineReducers({
    items: itemsReducer
});

const configureRedux = () => {
    return createStore(rootReducer);
};

export default configureRedux;