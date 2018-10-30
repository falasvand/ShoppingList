import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import configureRedux from './app/redux/configureRedux';
import {name as appName} from './app.json';

const store = configureRedux();

const ReactNativeRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReactNativeRedux);
