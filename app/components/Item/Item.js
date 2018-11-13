import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class item extends React.Component {

    render() {
        let showCheckmark = this.props.isChecked ? <Icon name="check" size={20} color="#10a836" style={styles.checkmarkIcon} /> : null;
        if ((this.props.itemBeingChecked === this.props.keyValue) && this.props.isLoadingCheckmark) {
            showCheckmark = <ActivityIndicator/>;
        }
        return (
            <TouchableOpacity
                disabled={this.props.isLoadingCheckmark}
                onPress={this.props.onItemPressed}
                onLongPress={this.props.onItemLongPressed}
                key={this.props.keyValue}
                style={styles.item}
            >
                <View style={styles.itemName}>
                    <Icon name="star" size={20} color="#edc92d" style={styles.starIcon} />
                    <Text>{this.props.itemName}</Text>
                </View>
                <View>{showCheckmark}</View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
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
    starIcon: {
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5

    },
    checkmarkIcon: {
        marginRight: 5
    }
});

const mapStateToProps = state => {
    return {
        isLoadingCheckmark: state.ui.isLoadingCheckmark,
        itemBeingChecked: state.ui.itemBeingChecked
    }
};

export default connect(mapStateToProps)(item);