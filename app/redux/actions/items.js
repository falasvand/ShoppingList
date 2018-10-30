import * as actionTypes from './actionTypes';

export const addItem = itemName => {
    return {
        type: actionTypes.ADD_ITEM,
        itemName: itemName
    }
};

export const deleteItem = itemKey => {
    return {
        type: actionTypes.DELETE_ITEM,
        key: itemKey
    }
};