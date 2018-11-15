import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const startTabsScreen = () => {
    Promise.all([
        Icon.getImageSource('shopping-cart', 15),
        Icon.getImageSource('user-circle', 15)
    ]).then(
        imageSources => {
            Navigation.setRoot({
                root: {
                    bottomTabs: {
                        children: [
                            {
                                component: {
                                    name: 'shopping-list.ShoppingCartScreen',
                                    options: {
                                        bottomTab: {
                                            text: 'Cart',
                                            icon: imageSources[0],
                                            selectedIconColor: '#56398c'
                                        }
                                    }
                                },
                            },
                            {
                                component: {
                                    name: 'shopping-list.ProfileScreen',
                                    options: {
                                        bottomTab: {
                                            text: 'Profile',
                                            icon: imageSources[1],
                                            selectedIconColor: '#56398c'
                                        }
                                    }
                                },
                            }
                        ]
                    }
                }
            });
        }
    );
};

export default startTabsScreen;