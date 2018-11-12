import * as actionTypes from './actionTypes';
import {uiStartLoading, uiStopLoading} from './ui';

export const addItem = itemName => {
    return dispatch => {
        const listData = {
            name: itemName,
            isChecked: false,
            isDeleted: false,
            dateAdded: new Date()
        };
        dispatch(uiStartLoading());
        fetch('https://shopping-list-9524e.firebaseio.com/currentShoppingList.json', {
                method: 'POST',
                body: JSON.stringify(listData)
            }
        )
            .then(response => response.json())
            .then(parsedResponse => {
                console.log(parsedResponse);
                dispatch(uiStopLoading());
            })
            .catch(() => {
                alert('Something went wrong! Please try again.');
                dispatch(uiStopLoading());
            });
    };
};

export const getItems = () => {
    return dispatch => {
        fetch('https://shopping-list-9524e.firebaseio.com/currentShoppingList.json')
            .then(res => res.json())
            .then(parsedResponse => {
                const items = [];
                for (const key in parsedResponse) {
                    items.push({
                        ...parsedResponse[key],
                        key: key
                    });
                }
                dispatch(setItems(items));
            })
            .catch(() => alert('Something went wrong! Please try again.'));
    }
};

export const setItems = items => {
    return {
        type: actionTypes.SET_ITEMS,
        items: items
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