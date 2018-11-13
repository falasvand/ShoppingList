import * as actionTypes from './actionTypes';

export const uiStartLoading = () => {
    return {
        type: actionTypes.UI_START_LOADING
    }
};

export const uiStopLoading = () => {
    return {
        type: actionTypes.UI_STOP_LOADING
    }
};

export const checkmarkStartLoading = itemKey => {
    return {
        type: actionTypes.START_LOADING_CHECKMARK,
        key: itemKey
    }
};

export const checkmarkStopLoading = itemKey => {
    return {
        type: actionTypes.STOP_LOADING_CHECKMARK,
        key: itemKey
    }
};