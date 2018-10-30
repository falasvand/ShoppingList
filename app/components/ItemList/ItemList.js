import React from 'react';
import Item from '../Item/Item';
import {StyleSheet, FlatList} from 'react-native';

const itemList = props => {
    return (
        <FlatList
            style={styles.scrollContainer}
            data={props.items}
            renderItem={(info) => (
                <Item
                    itemName={info.item.name}
                    onItemPressed={() => props.onItemDeleted(info.item.key)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    }
});

export default itemList;