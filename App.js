import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import AuthScreen from './app/screens/Authentication/Auth';
import ShoppingCartScreen from './app/screens/ShoppingCart/ShoppingCart';
import configureRedux from './app/redux/configureRedux';

const store = configureRedux();

Navigation.registerComponentWithRedux('shopping-list.AuthScreen', () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux('shopping-list.ShoppingCartScreen', () => ShoppingCartScreen, Provider, store);


Navigation.setRoot({
    root: {
        stack: {
            children: [{
                component: {
                    name: 'shopping-list.AuthScreen'
                }
            }],
            options: {
                topBar: {
                    title: {
                        text: 'Login'
                    }
                }
            }
        }
    }
});