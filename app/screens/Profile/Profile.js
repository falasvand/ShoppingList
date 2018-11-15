import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet, View} from "react-native";
import CustomButton from "../../UI/Button/Button";
import {authLogout} from '../../redux/actions/index';
import backgroundImage from "../../../assets/images/purple_bg.jpg";

class ProfileScreen extends Component {

    logoutHandler = () => {
        this.props.onLogout();
    };

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <CustomButton
                            color="#967ADC"
                            onLogin={this.logoutHandler}>
                            LOGOUT
                        </CustomButton>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        flex: 1
    },
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        width: '80%'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authLogout())
    }
};

export default connect(null, mapDispatchToProps)(ProfileScreen);