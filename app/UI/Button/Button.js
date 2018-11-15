import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const CustomButton = props => (
    <TouchableOpacity onPress={props.onLogin}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff'
    }
});

export default CustomButton;