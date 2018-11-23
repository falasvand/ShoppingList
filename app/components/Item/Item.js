import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class item extends React.Component {

    render() {
        let showCheckmark = (
            this.props.isChecked ?
                <Icon name="check-circle" size={22} color="#baf461" style={styles.checkmarkIcon} />
                :
                <Icon name="circle" size={22} color="#eeeeee" style={styles.checkmarkIcon} />
        );
        if ((this.props.itemBeingChecked === this.props.keyValue) && this.props.isLoadingCheckmark) {
            showCheckmark = <ActivityIndicator style={styles.checkmarkIcon} />;
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
                    <Icon name="caret-right" size={22} color="#eeeeee" style={styles.starIcon} />
                    <View>
                        <Text style={styles.itemNameStyle}>{this.props.itemName}</Text>
                        <Text style={styles.itemDateStyle}>Added on {this.props.dateAdded}</Text>
                    </View>
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
        fontFamily: 'Open Sans',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 2,
        borderRadius: 5
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
        marginRight: 6
    },
    itemNameStyle: {
        color: '#eeeeee',
        fontSize: 16
    },
    itemDateStyle: {
        color: '#d7d7d7',
        fontSize: 12
    }
});

const mapStateToProps = state => {
    return {
        isLoadingCheckmark: state.ui.isLoadingCheckmark,
        itemBeingChecked: state.ui.itemBeingChecked
    }
};

export default connect(mapStateToProps)(item);