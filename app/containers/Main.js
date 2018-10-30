import React from 'react';
import ItemInput from '../components/ItemInput/ItemInput';
import ItemList from '../components/ItemList/ItemList';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/items';

class Main extends React.Component {

    itemAddedHandler = itemName => {
        this.props.onAddItem(itemName);
    };

    itemDeletedHandler = key => {
        this.props.onDeleteItem(key);
    };

    render() {
        return (
            <View style={styles.container}>
                <ItemInput onItemAdded={this.itemAddedHandler} />
                <ItemList items={this.props.items} onItemDeleted={this.itemDeletedHandler} />
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
        onDeleteItem: (key) => dispatch(actions.deleteItem(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);