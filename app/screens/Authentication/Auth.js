import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, ActivityIndicator, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Input from '../../UI/Input/Input';
import CustomButton from '../../UI/Button/Button';
import backgroundImage from '../../../assets/images/login_background.jpg';
import {tryAuth, authAutoSignIn} from "../../redux/actions/auth";

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

    componentDidMount() {
        this.props.onAutoSignIn();
    }

    loginHandler = () => {
        Keyboard.dismiss();
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        };
        this.props.onLogin(authData);
    };

    updateInputState = (key, value) => {
        this.setState(
            prevState => {
                return {
                    controls: {
                        ...prevState.controls,
                        [key]: {
                            ...prevState.controls[key],
                            value: value
                        }
                    }
                }
            }
        );
    };

    render() {
        let loginButton = (
            <CustomButton
                color="#967ADC"
                onLogin={this.loginHandler}>
                LOGIN
            </CustomButton>
        );
        if (this.props.isLoading) {
            loginButton = <ActivityIndicator />;
        }
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={styles.inputContainer}>
                            <Icon name="user" size={18} color="#ffffff" style={styles.inputIcon}/>
                            <Input
                                placeholder="Email Address"
                                value={this.state.controls.email.value}
                                onChangeText={val => this.updateInputState('email', val)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name="unlock-alt" size={18} color="#ffffff" style={styles.inputIcon}/>
                            <Input
                                placeholder="Password"
                                value={this.state.controls.password.value}
                                onChangeText={val => this.updateInputState('password', val)}
                                autoCapitalize="none"
                                secureTextEntry
                            />
                        </View>
                        {loginButton}
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
        top: 12,
        marginRight: 13
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    }
});

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: authData => dispatch(tryAuth(authData)),
        onAutoSignIn: () => dispatch(authAutoSignIn())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);