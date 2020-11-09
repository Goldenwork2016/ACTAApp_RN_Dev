import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';

import config from "../Api/config"

const { height, width } = Dimensions.get('window')
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// lowercase, uppercase, one numeric digit, one special character
let reg_strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
// numeric digit, uppercase, lowercase
let reg_average = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;

export default class CreateEmailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            smscode: '',
            isModalVisible1: false,
            isModalVisible2: false,
            isModalVisible3: false,
            isModalVisible4: false,
            timeFlag: false,
            isloading: false,
            Timer: null,
            isflag: false
        };
    }

    checkingEmail = async () => {
        fetch(config.auth.logout, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((responseJson) => {
                if (responseJson['status'] == 200) {
                    AsyncStorage.setItem('loggedIn', "");
                    this.props.navigation.navigate("Auth")
                }
            })
            .catch((err) => {
                console.log('JSON.stringify(err)=>', err);
            })
    }

    NetworkSensor = async () => {
        await this.setState({
            timeFlag: true,
            isLoading: false
        })
        alert('network error')
    }

    handler = () => {
        const { email, phone, smscode, timeFlag } = this.state
        if (email == "") {
            // alert("Please input your email")
            this.setState({ isModalVisible1: true })
        } else if (reg.test(email) === false) {
            // alert('Email type error')
            this.setState({ isModalVisible2: true })
        } else {
            let details = {
                'email': email,
            };
            var myTimer = setTimeout(function () { this.NetworkSensor() }.bind(this), 25000)
            this.setState({ isLoading: true })

            let formBody = [];
            for (let property in details) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch(config.auth.status, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ isLoading: false })
                    clearTimeout(myTimer)
                    console.log('status =>', responseJson);
                    if (responseJson['status'] == 200) {
                        // alert("++++++++++++++++++++++")
                        // console.log(responseJson.body.email)
                        // this.props.navigation.navigate("CreatePasswordScreen", { email: email, phone: phone, smscode: smscode })
                        if (responseJson.body.email == true) {
                            this.setState({ isModalVisible3: true })
                        } else {
                            this.props.navigation.navigate("CreatePasswordScreen", { email: email, phone: phone, smscode: smscode })
                        }
                    }
                })
                .catch((err) => {
                    console.log('JSON.stringify(err)=>', err);
                    if (!timeFlag) {
                        this.setState({ isLoading: false })
                        alert("Network Error!")
                        clearTimeout(myTimer);
                    } else {
                        this.setState({ timeFlag: false })
                    }
                })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Checking email...'}
                    textStyle={{ color: 'white' }}
                />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>CREATE</Text>
                </View>
                <Text style={styles.TitleTxt}>CREATE.</Text>
                <Text style={styles.desTxt}>What is your email address?</Text>
                <TextInput placeholder="Email" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ email: e })} />
                <TouchableOpacity style={styles.emailBtn} onPress={() => { this.handler() }}>
                    <Text style={styles.EmailTxt}>Next</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible1}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Please input your email</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible1: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible2}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Email type error</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible2: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible3}>
                    <View style={styles.modalView1}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>This email is existed already.{'\n'}Please try to login with this email.</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible3: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible4}>
                    <View style={{ ...styles.modalView1, backgroundColor: '#111012' }}>
                        <Image source={require('../Assets/Images/logo.png')} resizeMode='stretch' style={{ width: 40, height: 38, marginBottom: 20 }} />
                        <Text style={styles.Description2}>Your email is registered.</Text>
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
    TitleTxt1: {
        color: 'black',
        fontSize: 55,
        marginTop: 30,
        marginBottom: 10,
        fontFamily: 'TrumpSoftPro-BoldItalic',
        width: '100%',
        textAlign: "center"
    },
    TitleTxt: {
        fontFamily: 'TrumpSoftPro-BoldItalic',
        color: 'white',
        fontSize: 62,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 70,
        marginTop: 35
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
    modalView1: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Description: {
        color: "black",
        fontSize: 23,
        marginBottom: 20,
        fontFamily: 'FuturaPT-Book'
    },
    Description1: {
        color: "black",
        fontSize: 23,
        marginBottom: 20,
        fontFamily: 'FuturaPT-Book'
    },
    Description2: {
        color: 'white',
        fontSize: 25,
        marginBottom: 20,
        fontFamily: 'FuturaPT-Book'
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
})
