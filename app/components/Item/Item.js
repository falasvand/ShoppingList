import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const item = (props) => {

    const showCheckmark = props.isChecked ? <Icon name="check" size={20} color="#10a836" style={styles.shoppingCartIcon} /> : null;

    return (
        <TouchableOpacity
            onPress={props.onItemPressed}
            onLongPress={props.onItemLongPressed}
            key={props.keyValue}
            style={styles.item}
        >
            <View style={styles.itemName}>
                <Icon name="star" size={20} color="#900" style={styles.shoppingCartIcon} />
                <Text>{props.itemName}</Text>
            </View>
            <View>{showCheckmark}</View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
        borderRadius: 10
    },
    itemName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    shoppingCartIcon: {
        marginRight: 12
    }
});

export default item;