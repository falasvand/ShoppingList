import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from "react-native";
import * as actions from "../../redux/actions/items";
import ItemInput from "../../components/ItemInput/ItemInput";
import ItemList from "../../components/ItemList/ItemList";

class ShoppingCartScreen extends Component {

    itemAddedHandler = itemName => {
        this.props.onAddItem(itemName);
    };

    itemDeletedHandler = key => {
        this.props.onDeleteItem(key);
    };

    itemCheckedHandler = (key, checked) => {
        this.props.onCheckItem(key, checked);
    };

    render() {
        return (
            <View style={styles.container}>
                <ItemInput onItemAdded={this.itemAddedHandler}/>
                <ItemList
                    items={this.props.items}
                    onItemChecked={this.itemCheckedHandler}
                    onItemDeleted={this.itemDeletedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (name) => dispatch(actions.addItem(name)),
        onDeleteItem: (key) => dispatch(actions.deleteItem(key)),
        onCheckItem: (key, isChecked) => dispatch(actions.checkItem(key, isChecked))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen);