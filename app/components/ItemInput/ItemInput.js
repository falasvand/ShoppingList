import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator} from 'react-native';

class ItemInput extends React.Component {

    state = {
        itemName: ''
    };

    itemNameChangedHandler = value => {
        this.setState({
            itemName: value
        });
    };

    addItemHandler = () => {
        if (this.state.itemName.trim() === '') {
            return;
        }
        this.setState({itemName: ''});
        this.props.onItemAdded(this.state.itemName);
    };

    render() {
        let submitButton = (
            <TouchableOpacity onPress={this.addItemHandler} style={styles.buttonInput}>
                <Image source={require('../../../../ShoppingList/assets/images/basket_add.png')} />
            </TouchableOpacity>
        );
        if (this.props.isLoading) {
            submitButton =  <ActivityIndicator />;
        }
        return (
            <KeyboardAvoidingView style={styles.header} behavior="padding" enabled>
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Name"
                    value={this.state.itemName}
                    placeholderTextColor="#ffffff"
                    underlineColorAndroid="transparent"
                    onChangeText={this.itemNameChangedHandler}>
                </TextInput>
                {submitButton}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: 'relative',
        marginTop: 15,
        marginBottom: 15
    },
    textInput: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        zIndex: 10,
        borderRadius: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    buttonInput: {
        width: '20%',
        padding: 8,
        alignItems: 'center',
        borderRadius: 30,
        zIndex: 11,
        right: 80
    }
});

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading
    }
};

export default connect(mapStateToProps)(ItemInput);