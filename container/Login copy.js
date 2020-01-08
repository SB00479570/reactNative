import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Toolbar from '../components/Toolbar';

export default class Login extends Component {
    render() {
        return [
            <View style={styles.mainContainer} key='body'>
                <View style={styles.container1}>
                    <View style={styles.loginText}>
                        <Text style={styles.text}>Welcome,</Text>
                        <Text style={styles.text}>Please sign in</Text>
                    </View>
                    <View style={styles.loginInput}>
                        <View style={styles.fieldContainer}>
                            <Text>Email</Text>
                            <TextInput style={styles.field} placeholder='name@email.com'></TextInput>
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text>Password</Text>
                            <TextInput style={styles.field}></TextInput>
                        </View>
                        <View style={styles.forgot}>
                            <Text>Forgot your password?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                        style={styles.primaryButton}
                    >
                        <Text style={styles.textStyle}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>,
            <Toolbar key='toolbar' />
        ]
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        //justifyContent: 'center',
        padding: 25
    },
    container1: {
        flex: 3,
        justifyContent: 'flex-end'
    },
    container2: {
        flex: 1,
        justifyContent: 'center'
    },
    loginText: {
        marginVertical: 40
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30
    },
    field: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        fontSize: 20
    },
    fieldContainer: {
        marginVertical: 10
    },
    forgot: {
        marginVertical: 20,
        alignItems: 'flex-end'
    },
    primaryButton: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 60,
        borderWidth: 1,
        //borderColor: '#fff',
        marginVertical: 10
    },
    textStyle: {
        //color: '#fff',
        textAlign: 'center',
    },
});