import * as actionTypes from './actionTypes';

export const addItem = itemName => {
    return {
        type: actionTypes.ADD_ITEM,
        itemName: itemName
    }
};

export const checkItem = (itemKey, itemChecked) => {
    return {
        type: actionTypes.CHECK_ITEM,
        key: itemKey,
        checked: itemChecked
    }
};

export const deleteItem = itemKey => {
    return {
        type: actionTypes.DELETE_ITEM,
        key: itemKey
    }
};