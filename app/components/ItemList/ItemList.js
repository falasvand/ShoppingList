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
                    isChecked={info.item.checked}
                    itemName={info.item.name}
                    onItemPressed={() => props.onItemChecked(info.item.key, info.item.checked)}
                    onItemLongPressed={() => props.onItemDeleted(info.item.key)}
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