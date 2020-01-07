import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function Toolbar() {
    return (
        <View style={styles.container4}>
            <View style={styles.toolBar}>
                <Image source={require('../assets/Garage.png')} />
                <Text style={styles.toolBarText}>Garage</Text>
            </View>
            <View style={styles.toolBar}>
                <Image source={require('../assets/Store.png')} />
                <Text style={styles.toolBarText}>Store</Text>
            </View>
            <View style={styles.toolBar}>
                <Image source={require('../assets/Support.png')} />
                <Text style={styles.toolBarText}>Support</Text>
            </View>
            <View style={styles.toolBar}>
                <Image source={require('../assets/Account.png')} />
                <Text style={styles.toolBarText}>Account</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container4: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(14, 14, 14, 0.94)',
        flexDirection: "row"
    },
    toolBar: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolBarText: {
        color: '#757575',
        marginTop: 4
    },
});