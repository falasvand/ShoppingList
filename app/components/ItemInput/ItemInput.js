import React from 'react';
import {KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

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
        return (
            <KeyboardAvoidingView style={styles.header} behavior="padding" enabled>
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Name"
                    value={this.state.itemName}
                    underlineColorAndroid="transparent"
                    onChangeText={this.itemNameChangedHandler}>
                </TextInput>
                <TouchableOpacity onPress={this.addItemHandler} style={styles.buttonInput}>
                    <Image source={require('../../../../ShoppingList/assets/images/basket_add.png')} />
                </TouchableOpacity>
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
        marginTop: 20,
        marginBottom: 15
    },
    textInput: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        backgroundColor: '#eae7e7',
        zIndex: 10,
        borderRadius: 10,
        color: '#989696',
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

export default ItemInput;