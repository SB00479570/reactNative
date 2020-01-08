/*
 * Copyright (c) 2019, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, { Fragment } from 'react';
import {
    SafeAreaView,
    Button,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Toolbar from '../components/Toolbar';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            progress: false,
        };
        var OktaAuth = require('@okta/okta-auth-js');
        var config = {
            url: 'https://dev-188333.okta.com',
        };

        this.authClient = new OktaAuth(config);
    }

    async login() {
        let self = this;
        this.setState({ progress: true });
        this.authClient
            .signIn({
                username: this.state.userName,
                password: this.state.password,
            })
            .then(function (transaction) {
                self.setState({ progress: false });
                if (transaction.status === 'SUCCESS') {
                    const { navigate } = self.props.navigation;
                    navigate('Dashboard', { transaction: transaction });
                } else {
                    throw 'We cannot handle the ' + transaction.status + ' status';
                }
            })
            .fail(function (err) {
                console.error(err);
                self.setState({ progress: false });
            });
    }

    render() {
        return [
            <View style={styles.mainContainer} key='body'>
                <View style={styles.spinnerStyle}>
                <Spinner
                    visible={this.state.progress}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                </View>
                <View style={styles.container1}>
                    <View style={styles.loginText}>
                        <Text style={styles.text}>Welcome,</Text>
                        <Text style={styles.text}>Please sign in</Text>
                    </View>
                    <View style={styles.loginInput}>
                        <View style={styles.fieldContainer}>
                            <Text>Email</Text>
                            <TextInput
                                style={styles.field}
                                placeholder='name@email.com'
                                onChangeText={text => (this.state.userName = text)}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text>Password</Text>
                            <TextInput
                                style={styles.field}
                                onChangeText={text => (this.state.password = text)}
                            />
                        </View>
                        <View style={styles.forgot}>
                            <Text>Forgot your password?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate('Dashboard')}
                        style={styles.primaryButton}
                        onPress={async () => {
                            this.state.progress = true;
                            this.login();
                        }}
                        testID="loginButton"
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
    spinnerTextStyle: {
        color: '#FFF'
    },
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
