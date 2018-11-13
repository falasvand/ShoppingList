import React from 'react';
import {connect} from 'react-redux';
import Item from '../Item/Item';
import {getItems} from '../../redux/actions';
import {StyleSheet, FlatList} from 'react-native';

class itemList extends React.Component {

    componentDidMount() {
        this.props.onLoadItems();
    }

    render() {
        return (
            <FlatList
                style={styles.scrollContainer}
                data={this.props.items}
                renderItem={(info) => (
                    <Item
                        isChecked={info.item.isChecked}
                        itemName={info.item.name}
                        keyValue={info.item.key}
                        onItemPressed={() => this.props.onItemChecked(info.item)}
                        onItemLongPressed={() => this.props.onItemDeleted(info.item)}
                    />
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onLoadItems: () => dispatch(getItems())
    }
};

export default connect(null, mapDispatchToProps)(itemList);