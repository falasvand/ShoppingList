import React from 'react';
import {connect} from 'react-redux';
import Item from '../Item/Item';
import {getItems} from '../../redux/actions';
import {StyleSheet, FlatList} from 'react-native';

class itemList extends React.Component {

    state = {
        refreshing: false
    };

    componentDidMount() {
        this.props.onLoadItems();
    }

    handleRefresh = () => {
        this.setState({refreshing: true},
            () => {
                this.props.onLoadItems();
                this.setState({refreshing: false});
            }
        );
    };

    render() {
        return (
            <FlatList
                style={styles.scrollContainer}
                data={this.props.items}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                renderItem={(info) => (
                    <Item
                        isChecked={info.item.isChecked}
                        itemName={info.item.name}
                        dateAdded={info.item.dateAdded.substring(0,10)}
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