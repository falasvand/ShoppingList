import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, ImageBackground} from "react-native";
import * as actions from "../../redux/actions/items";
import ItemInput from "../../components/ItemInput/ItemInput";
import ItemList from "../../components/ItemList/ItemList";
import backgroundImage from "../../../assets/images/purple_bg.jpg";

class ShoppingCartScreen extends Component {

    itemAddedHandler = itemName => {
        this.props.onAddItem(itemName);
    };

    itemDeletedHandler = item => {
        this.props.onDeleteItem(item);
    };

    itemCheckedHandler = item => {
        this.props.onCheckItem(item);
    };

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <ItemInput onItemAdded={this.itemAddedHandler}/>
                    <ItemList
                        items={this.props.items}
                        onItemChecked={this.itemCheckedHandler}
                        onItemDeleted={this.itemDeletedHandler}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    }
});

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: name => dispatch(actions.addItem(name)),
        onDeleteItem: item => dispatch(actions.deleteItem(item)),
        onCheckItem: item => dispatch(actions.checkItem(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen);