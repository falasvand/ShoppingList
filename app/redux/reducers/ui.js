import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    isLoadingCheckmark: false,
    itemBeingChecked: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UI_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.UI_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case actionTypes.START_LOADING_CHECKMARK:
            return {
                ...state,
                isLoadingCheckmark: true,
                itemBeingChecked: action.key
            };
        case actionTypes.STOP_LOADING_CHECKMARK:
            return {
                ...state,
                isLoadingCheckmark: false,
                itemBeingChecked: null
            };
        default:
            return state;
    }
};

export default reducer;