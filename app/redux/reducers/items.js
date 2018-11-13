import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ITEMS:
            return {
                ...state,
                items: action.items
            };
        case actionTypes.ITEM_CHECKED:
            return {
                ...state,
                items: state.items.map(
                    item => item.key === action.key ? {...item, isChecked: !action.isChecked} : item
                )
            };
        case actionTypes.ITEM_DELETED:
            return {
                ...state,
                items: state.items.filter(
                    item => {
                        return item.key !== action.key;
                    }
                )
            };
        default:
            return state;
    }
};

export default reducer;