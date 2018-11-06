import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const item = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onItemPressed}
            key={props.keyValue}
            style={styles.listItem}
        >
            <View style={styles.itemName}>
                <Icon name="star" size={20} color="#900" style={styles.shoppingCartIcon} />
                <Text>{props.itemName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#f5f5f5',
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