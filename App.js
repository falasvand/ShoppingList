import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import AuthScreen from './app/screens/Authentication/Auth';
import ShoppingCartScreen from './app/screens/ShoppingCart/ShoppingCart';
import ProfileScreen from './app/screens/Profile/Profile';
import configureRedux from './app/redux/configureRedux';

const store = configureRedux();

Navigation.registerComponentWithRedux('shopping-list.AuthScreen', () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux('shopping-list.ShoppingCartScreen', () => ShoppingCartScreen, Provider, store);
Navigation.registerComponentWithRedux('shopping-list.ProfileScreen', () => ProfileScreen, Provider, store);


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
                    visible: false,
                    drawBehind: true,
                    animate: false
                }
            }
        }
    }
});