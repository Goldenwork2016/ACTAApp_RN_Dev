import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay';

import config from "../Api/config"

export default class ConfirmSMSScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            phone: '',
            pincode: '',
            isModalVisible1: false,
            isModalVisible2: false,
            isEmail: false,
            timeFlag: false,
            isLoading: false,
        };
    }


    componentDidMount = async () => {
        const { navigation } = this.props.navigation;
        await this.setState({
            email: this.props.navigation.getParam("email"),
            phone: this.props.navigation.getParam("phone"),
            isEmail: this.props.navigation.getParam("isEmail")
        })
        console.log(this.state.isEmail)
    }

    handler = () => {
        const { phone, pincode, email, isEmail } = this.state
        if (isEmail) {
            if (pincode == "") {
                this.setState({ isModalVisible1: true })
            } else {
                let details = {
                    'email': email,
                    'pin': pincode,
                };

                var myTimer = setTimeout(function () { this.NetworkSensor() }.bind(this), 30000)
                this.setState({ isLoading: true })

                let formBody = [];
                for (let property in details) {
                    let encodedKey = encodeURIComponent(property);
                    let encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                console.log(formBody);
                fetch(config.auth.confirmPinCode, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formBody
                })
                    .then((response) => response.json())
                    .then(async (responseJson) => {
                        this.setState({ isLoading: false })
                        clearTimeout(myTimer)
                        if (responseJson['status'] == 200) {
                            console.log('responseJson===>', responseJson);
                            setTimeout(() => {
                                this.props.navigation.navigate("ChangePasswordScreen", { pincode: pincode, email: email, phone: phone, isEmail: isEmail })
                            }, 2000)
                        } else {
                            this.setState({ isModalVisible2: true })
                        }
                    })
                    .catch((err) => {
                        console.log('err =>', JSON.stringify(err));
                        clearTimeout(myTimer);
                        if (!timeFlag) {
                            this.setState({ isLoading: false })
                            this.setState({ isModalVisible4: true })
                        } else {
                            this.setState({ timeFlag: false })
                        }
                    })
            }
        } else {
            if (pincode == "") {
                this.setState({ isModalVisible1: true })
            } else {
                let details = {
                    'phone': phone,
                    'pin': pincode,
                };

                var myTimer = setTimeout(function () { this.NetworkSensor() }.bind(this), 30000)
                this.setState({ isLoading: true })

                let formBody = [];
                for (let property in details) {
                    let encodedKey = encodeURIComponent(property);
                    let encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                console.log(formBody);
                fetch(config.auth.confirmPinCode, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formBody
                })
                    .then((response) => response.json())
                    .then(async (responseJson) => {
                        this.setState({ isLoading: false })
                        clearTimeout(myTimer)
                        if (responseJson['status'] == 200) {
                            console.log('responseJson===>', responseJson);
                            setTimeout(() => {
                                this.props.navigation.navigate("ChangePasswordScreen", { pincode: pincode, email: email, phone: phone, isEmail: isEmail })
                            }, 2000)
                        } else {
                            this.setState({ isModalVisible2: true })
                        }
                    })
                    .catch((err) => {
                        console.log('err =>', JSON.stringify(err));
                        clearTimeout(myTimer);
                        if (!timeFlag) {
                            this.setState({ isLoading: false })
                            this.setState({ isModalVisible4: true })
                        } else {
                            this.setState({ timeFlag: false })
                        }
                    })
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Checking pin code...'}
                    textStyle={{ color: 'white' }}
                />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    {/* <Text style={styles.headerTxt}>CREATE</Text> */}
                </View>
                <Text style={styles.TitleTxt}>Forgot password</Text>
                {this.state.isEmail ? <Text style={styles.desTxt}>Enter the verification code sent to your email address to reset password</Text> :
                    <Text style={styles.desTxt}>Enter the verification code sent to your phone to reset password</Text>
                }
                <TextInput keyboardType="number-pad" placeholder="6 digital Code" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ pincode: e })} />
                <TouchableOpacity style={styles.emailBtn} onPress={() => { this.handler() }}>
                    <Text style={styles.EmailTxt}>Confirm</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible1}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Please input SMS code</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible1: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible2}>
                    <View style={styles.modalView1}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={{ ...styles.Description, color: 'black' }}>Pin code is wrong{'\n'}Please try again</Text>
                        <TouchableOpacity style={{ ...styles.QuitWorkout, backgroundColor: 'black' }} onPress={() => this.setState({ isModalVisible2: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    header: {
        marginTop: Platform.OS === 'ios' ? 60 : 20,
        width: "90%",
        alignItems: "center",
        paddingBottom: 41,
        borderBottomWidth: 1,
        borderColor: '#53535f'
    },
    LoginTxtImage: {
        marginTop: 45,
        width: 140,
        height: 52,
        alignSelf: "center",
        marginBottom: 30
    },
    EmailInputTxt: {
        width: 330,
        height: 50,
        backgroundColor: '#18171a',
        marginBottom: 8,
        borderRadius: 3,
        paddingLeft: 20,
        color: "white",
        fontSize: 20,
        fontFamily: 'FuturaPT-Book'
    },
    LoginwithTxtImage: {
        width: 300,
        marginTop: 5,
        marginBottom: 40
    },
    emailBtn: {
        width: 330,
        height: 55,
        marginTop: 15,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        borderRadius: 3,
        marginBottom: 10
    },
    BackBtn: {
        width: 26,
        height: 20,
        position: 'absolute',
        left: 10
    },
    ForgotPasswordImage: {
        marginTop: 15,
        width: 150,
        height: 20
    },
    EmailTxt: {
        fontSize: 20,
        fontFamily: 'FuturaPT-Demi',
    },
    headerTxt: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'FuturaPT-Demi'
    },
    TitleTxt: {
        fontFamily: 'TrumpSoftPro-BoldItalic',
        color: 'white',
        fontSize: 55,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 70,
        marginTop: 35,
        width: '100%'
    },
    desTxt: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 35
    },
    modalView: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleTxt1: {
        color: 'black',
        fontSize: 55,
        marginTop: 30,
        marginBottom: 10,
        fontFamily: 'TrumpSoftPro-BoldItalic',
        width: '100%',
        textAlign: "center"
    },
    Description: {
        color: "black",
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'FuturaPT-Book',
        fontWeight: 'bold'
    },
    QuitWorkout: {
        width: 100,
        height: 45,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#18171A',
        borderColor: '#18171A'
    },
    Dismiss: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'FuturaPT-Medium'
    },
    modalView1: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
