import {AsyncStorage} from 'react-native';
import {uiStartLoading, uiStopLoading} from "./ui";
import {AUTH_SET_TOKEN} from "./actionTypes";
import startTabsScreen from '../../screens/MainTabs/startMainTabs';

const API_KEY = 'AIzaSyDTQw-GfCEs1wnrDCnfp0UxOEoCzn1w_Zs';

export const tryAuth = authData => {
    return dispatch => {
        dispatch(uiStartLoading());
        fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + API_KEY,
            {
                method: "POST",
                body: JSON.stringify({
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .catch(
                () => {
                    alert("Authentication failed. Please try again!");
                    dispatch(uiStopLoading());
                }
            )
            .then(res => res.json())
            .then(parsedRes => {
                dispatch(uiStopLoading());
                if (!parsedRes.idToken) {
                    alert("Authentication failed, please try again!");
                } else {
                    dispatch(storeToken(parsedRes.idToken, parsedRes.expiresIn, parsedRes.refreshToken));
                    startTabsScreen();
                }
            })
    }
};

export const storeToken = (token, expiresIn, refreshToken) => {
    return dispatch => {
        dispatch(setToken(token));
        const now = new Date();
        const expiryDate = now.getTime() + expiresIn * 1000;
        AsyncStorage.setItem("authToken", token);
        AsyncStorage.setItem("expirationDate", expiryDate.toString());
        AsyncStorage.setItem("refreshToken", refreshToken);
    }
};

export const setToken = token => {
    return {
        type: AUTH_SET_TOKEN,
        token: token
    }
};

export const getToken = () => {
    return (dispatch, getState) => {
        const promise = new Promise(
            (resolve, reject) => {
                const token = getState().auth.token;
                if (!token) {
                    let fetchedToken;
                    AsyncStorage.getItem("authToken")
                        .catch(() => reject())
                        .then(tokenFromStorage => {
                            fetchedToken = tokenFromStorage;
                            if (!tokenFromStorage) {
                                reject();
                                return;
                            }
                            return AsyncStorage.getItem("expirationDate");
                        })
                        .then(expirationDate => {
                            const parsedExpirationDate = new Date(parseInt(expirationDate));
                            const now = new Date();
                            if (parsedExpirationDate > now) {
                                dispatch(setToken(fetchedToken));
                                resolve(fetchedToken);
                            } else {
                                reject();
                            }
                        })
                        .catch(() => reject());
                } else {
                    resolve(token);
                }
            }
        );
        return promise
            .catch(() => {
                return AsyncStorage.getItem("refreshToken")
                    .then(refreshToken => {
                        return fetch("https://securetoken.googleapis.com/v1/token?key=" + API_KEY,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: "grant_type=refresh_token&refresh_token=" + refreshToken
                            });
                    })
                    .then(res => res.json())
                    .then(parsedRes => {
                        if (parsedRes.id_token) {
                            dispatch(
                                storeToken(
                                    parsedRes.id_token,
                                    parsedRes.expires_in,
                                    parsedRes.refresh_token
                                )
                            );
                            return parsedRes.id_token;
                        } else {
                            dispatch(clearStorage());
                        }
                    });
            })
            .then(token => {
                if (!token) {
                    throw (new Error());
                } else {
                    return token;
                }
            });
    }
};

export const authAutoSignIn = () => {
    return dispatch => {
        dispatch(getToken())
            .then(() => startTabsScreen())
            .catch(() => console.log("Failed to fetch token."));
    }
};

export const clearStorage = () => {
    return dispatch => {
        AsyncStorage.removeItem("authToken");
        AsyncStorage.removeItem("expirationDate");
    }
};