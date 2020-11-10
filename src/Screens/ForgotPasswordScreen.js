import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay';

import config from "../Api/config"

export default class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            phone: '',
            smscode: '',
            isModalVisible1: false,
            isModalVisible2: false,
            isModalVisible3: false,
            isEmail: true,
            timeFlag: false,
            isLoading: false,
            Timer: null,
            isflag: false
        };
    }


    componentDidMount = async () => {
        const { navigation } = this.props.navigation;
        await this.setState({
            // email: this.props.navigation.getParam("email"),
            // password: this.props.navigation.getParam("password"),
            // phone: this.props.navigation.getParam("phone"),
            // smscode: this.props.navigation.getParam("smscode"),
            isEmail: this.props.navigation.getParam("isEmail")
        })
        console.log(this.state.isEmail)
    }

    handler = () => {
        const { name, password, phone, smscode, email, isEmail } = this.state
        if (isEmail) {
            if (email == "") {
                this.setState({ isModalVisible1: true })
            } else {
                let details = {
                    'email': email,
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
                fetch(config.auth.resetPassword, {
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
                            this.props.navigation.navigate("ConfirmSMSScreen", { isEmail: isEmail, email: email, phone: phone })
                        } else if (responseJson['status'] == 400) {
                            this.setState({ isModalVisible3: true })
                        }
                    })
                    .catch((err) => {
                        console.log('err =>', JSON.stringify(err));
                        clearTimeout(myTimer);
                        if (!timeFlag) {
                            this.setState({ isLoading: false })
                            this.setState({ isModalVisible2: true })
                        } else {
                            this.setState({ timeFlag: false })
                        }
                    })
            }
        } else {
            if (phone == "") {
                this.setState({ isModalVisible1: true })
            } else {
                let details = {
                    'phone': phone,
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
                fetch(config.auth.resetPassword, {
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
                            this.props.navigation.navigate("ConfirmSMSScreen", { isEmail: isEmail, email: email, phone: phone })
                        } else if (responseJson['status'] == 400) {
                            this.setState({ isModalVisible3: true })
                        }
                    })
                    .catch((err) => {
                        console.log('err =>', JSON.stringify(err));
                        clearTimeout(myTimer);
                        if (!timeFlag) {
                            this.setState({ isLoading: false })
                            this.setState({ isModalVisible2: true })
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
                    textContent={'Sending pin code...'}
                    textStyle={{ color: 'white' }}
                />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    {/* <Text style={styles.headerTxt}>CREATE</Text> */}
                </View>
                <Text style={styles.TitleTxt}>Forgot password</Text>
                {
                    this.state.isEmail ?
                        <Text style={styles.desTxt}>
                            Please enter your email address. You will receive PIN code to create a new password via email
                        </Text> :
                        <Text style={styles.desTxt}>
                            Please enter your phone number. You will receive PIN code to create a new password via phone
                        </Text>
                }
                {this.state.isEmail ?
                    <TextInput placeholder="Email" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ email: e })} /> :
                    <View style={{ flexDirection: 'row', width: 330 }}>
                        <Text style={styles.countryNumber}>+1</Text>
                        <TextInput keyboardType="numeric" placeholder="Phone Number" placeholderTextColor="#53535f" style={styles.EmailInputTxt1} onChangeText={(e) => this.setState({ phone: e })} />
                    </View>
                }
                <TouchableOpacity style={styles.emailBtn} onPress={() => { this.handler() }}>
                    <Text style={styles.EmailTxt}>SEND</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible1}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        {this.state.isEmail ?
                            <Text style={styles.Description}>Please input your email address</Text> :
                            <Text style={styles.Description}>Please input your phone number</Text>
                        }
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible1: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible2}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Reset Password Faild</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible2: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible3}>
                    <View style={styles.modalView1}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        {this.state.isEmail ?
                            <Text style={{ ...styles.Description, color: 'black' }}>Email dose not exist{'\n'}Please check again</Text> :
                            <Text style={{ ...styles.Description, color: 'black' }}>Phone number dose not exist{'\n'}Please check again</Text>
                        }
                        <TouchableOpacity style={{ ...styles.QuitWorkout, backgroundColor: 'black' }} onPress={() => this.setState({ isModalVisible3: false })}>
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
    EmailInputTxt1: {
        width: 285,
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
    countryNumber: {
        color: '#53535f',
        fontSize: 20,
        backgroundColor: '#18171a',
        height: 50,
        marginRight: 5,
        alignContent: 'center',
        textAlign: "center",
        paddingVertical: 12,
        paddingHorizontal: 8,
        fontFamily: 'FuturaPT-Book'
    },
})
