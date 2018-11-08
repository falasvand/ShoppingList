import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const startTabsScreen = () => {
    Promise.all([
        Icon.getImageSource('shopping-cart', 15),
        Icon.getImageSource('trash', 15)
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
                                            icon: imageSources[0]
                                        }
                                    }
                                },
                            },
                            {
                                component: {
                                    name: 'shopping-list.ShoppingCartScreen',
                                    options: {
                                        bottomTab: {
                                            text: 'Empty',
                                            icon: imageSources[1]
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