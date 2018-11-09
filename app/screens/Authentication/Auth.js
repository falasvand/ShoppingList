import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import startTabsScreen from '../MainTabs/startMainTabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../UI/Input/Input';
import CustomButton from '../../UI/Button/Button';
import backgroundImage from '../../../assets/images/login_background.jpg';

class AuthScreen extends Component {

    state = {
        controls: {
            email: {
                value: '',
                valid: false,
                validationRules: {
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: false,
                validationRules: {
                    minLength: 6
                }
            }
        }
    };

    loginHandler = () => {
        startTabsScreen();
    };

    updateInputState = (key, value) => {
        this.setState(
            prevState => {
                return {
                    controls: {
                        ...prevState.controls,
                        [key]: {
                            ...prevState.control[key],
                            value: value
                        }
                    }
                }
            }
        );
    };

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={styles.inputContainer}>
                            <Icon name="user" size={18} color="#ffffff" style={styles.inputIcon}/>
                            <Input
                                placeholder="Email Address"
                                value={this.state.controls.email.value}
                                onChangeText={(val) => this.updateInputState('email', val)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name="unlock-alt" size={18} color="#ffffff" style={styles.inputIcon}/>
                            <Input
                                placeholder="Password"
                                value={this.state.controls.password.value}
                                onChangeText={(val) => this.updateInputState('password', val)}
                            />
                        </View>
                        <CustomButton
                            color="#ccbce0"
                            onLogin={this.loginHandler}
                            style={styles.loginButton}>
                            LOGIN
                        </CustomButton>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        width: '80%'
    },
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputIcon: {
        position: 'absolute',
        left: 18,
        top: 10,
        marginRight: 12
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    }
});

export default AuthScreen;