import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: state.items.concat({key: Math.random().toString(), name: action.itemName})
            };
        case actionTypes.DELETE_ITEM:
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