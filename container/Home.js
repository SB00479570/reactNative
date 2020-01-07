import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import Toolbar from '../components/Toolbar';

export default class Home extends Component {
    render() {
        return [
            <View style={styles.mainContainer} key='body'>
                <View style={styles.container1}>
                    <Image source={require('../assets/ariya-sunset.jpg')} style={styles.backgroundImage} blurRadius={3} />
                </View>
                <View style={styles.container2}>

                </View>
                <View style={styles.container3}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Home Screen</Text>
                        <Text style={styles.heading}>message here</Text>
                        <View>
                            <Text style={styles.subHeading}>Lorem ipsum</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                                style={styles.primaryButton}
                            >
                                <Text style={styles.textStyle}>Create account</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                                style={styles.secondaryButton}
                            >
                                <Text style={styles.textStyleLogin}>Login with Email</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textStyleLink}>More ways to login</Text>
                        </View>
                    </View>
                </View>
            </View>,
            <Toolbar key='toolbar' />
        ]
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    container1: {
        position: 'relative'
    },
    container2: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.3,
    },
    container3: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    backgroundImage: {
        height: '100%',
        resizeMode: 'contain',
    },
    heading: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    headingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
        width: '85%'
    },
    primaryButton: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff',
        marginVertical: 10
    },
    textStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    secondaryButton: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        marginVertical: 10
    },
    textStyleLogin: {
        textAlign: 'center',
    },
    textStyleLink: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#fff',
    },
    subHeading: {
        textAlign: 'center',
        marginVertical: 20,
        color: '#fff',
    }
});