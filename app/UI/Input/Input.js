import React from 'react';
import {TextInput, StyleSheet} from "react-native";

const Input = props => (
    <TextInput
        style={[styles.input, props.style]}
        placeholderTextColor="#ffffff"
        underlineColorAndroid="transparent"
        {...props}
    />
);

const styles = StyleSheet.create({
    input: {
        flex: 1,
        color: '#ffffff',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 45,
        paddingRight: 20,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }
});

export default Input;