import * as actionTypes from './actionTypes';
import {uiStartLoading, uiStopLoading, checkmarkStartLoading, checkmarkStopLoading} from './ui';

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
                dispatch(getItems());
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
                    if (parsedResponse[key].isDeleted !== true) {
                        items.push({
                            ...parsedResponse[key],
                            key: key
                        });
                    }
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

export const checkItem = item => {
    return dispatch => {
        const listData = {
            name: item.name,
            isChecked: !item.isChecked,
            isDeleted: item.isDeleted,
            dateAdded: item.dateAdded
        };
        dispatch(itemChecked(item.key, item.isChecked));
        dispatch(checkmarkStartLoading(item.key));
        fetch('https://shopping-list-9524e.firebaseio.com/currentShoppingList/' + item.key + '.json', {
                method: 'PUT',
                body: JSON.stringify(listData)
            }
        )
            .then(response => response.json())
            .then(parsedResponse => {
                console.log(parsedResponse);
                dispatch(checkmarkStopLoading(item.key));
            })
            .catch(() => {
                alert('Something went wrong! Please try again.');
                dispatch(checkmarkStopLoading(item.key));
            });
    };
};

export const itemChecked = (itemKey, isChecked) => {
    return {
        type: actionTypes.ITEM_CHECKED,
        key: itemKey,
        isChecked: isChecked
    }
};

export const deleteItem = item => {
    return dispatch => {
        const listData = {
            name: item.name,
            isChecked: item.isChecked,
            isDeleted: true,
            dateAdded: item.dateAdded
        };
        fetch('https://shopping-list-9524e.firebaseio.com/currentShoppingList/' + item.key + '.json', {
                method: 'PUT',
                body: JSON.stringify(listData)
            }
        )
            .then(response => response.json())
            .then(parsedResponse => {
                dispatch(itemDeleted(item.key));
            })
            .catch(() => {
                alert('Something went wrong! Please try again.');
            });
    };
};

export const itemDeleted = itemKey => {
    return {
        type: actionTypes.ITEM_DELETED,
        key: itemKey
    }
};