import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Platform, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';


import config from "../Api/config"

let regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
let reg_strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class CreateEmailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            password: '',
            name: '',
            phone: '',
            smscode: '',
            timeFlag: false,
            isLoading: false,
            isModalVisible1: false,
            isModalVisible2: false,
            isModalVisible3: false,
            isModalVisible4: false,
            Timer: null,
            isflag: false,
            isEmail: ''
        };
    }

    componentDidMount = async () => {
        const { navigation } = this.props.navigation;
        await this.setState({
            email: this.props.navigation.getParam("email"),
            password: this.props.navigation.getParam("password"),
            phone: this.props.navigation.getParam("phone"),
            smscode: this.props.navigation.getParam("smscode"),
            name: this.props.navigation.getParam("name"),
            isEmail: this.props.navigation.getParam("isEmail"),
        })
        console.log(this.state.password)
    }

    handler = () => {
        const { email, phone, password, smscode, name, isEmail } = this.state
        if (isEmail) {
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
                fetch(config.auth.status, {
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
                            if (responseJson.body.phone == true) {
                                this.setState({ isModalVisible3: true })
                            } else {
                                this.props.navigation.navigate("CreatePreferenceScreen", { email: email, phone: phone, smscode: smscode, name: name, password: password, isEmail: isEmail })
                            }
                        }
                    })
                    .catch((err) => {
                        console.log('err =>', JSON.stringify(err));
                        clearTimeout(myTimer);
                        if (!timeFlag) {
                            this.setState({ isLoading: false })
                            alert("Network Error!!")
                        } else {
                            this.setState({ timeFlag: false })
                        }
                    })
            }
        }
        if (isEmail == false) {
            if (email == "") {
                this.setState({ isModalVisible1: true })
            } else if (reg.test(email) === false) {
                // alert('Email type error')
                this.setState({ isModalVisible2: true })
            }
            else {
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
                fetch(config.auth.status, {
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
                            if (responseJson.body.email == true) {
                                this.setState({ isModalVisible3: true })
                            } else {
                                this.props.navigation.navigate("CreatePreferenceScreen", { email: email, phone: phone, smscode: smscode, name: name, password: password, isEmail: isEmail })
                            }
                        }
                    })
                    .catch((err) => {
                        console.log('err =>', JSON.stringify(err));
                        clearTimeout(myTimer);
                        if (!timeFlag) {
                            this.setState({ isLoading: false })
                            alert("Network Error!!")
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
                    textContent={this.state.isEmail ? 'Checking phone number...' : 'Checking Email...'}
                    textStyle={{ color: 'white' }}
                />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={styles.createTxt}>CREATE</Text>
                </View>

                <Text style={styles.headerTxt}>CREATE.</Text>
                <Text style={styles.desTxt}>What is your phone number</Text>
                {/* <View style={{ flexDirection: 'row', width: 330 }}>
                    <Text style={styles.countryNumber}>+1</Text>
                    <TextInput keyboardType="numeric" placeholder="Phone Number" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ phone: e })} />
                </View> */}
                {!this.state.isEmail ?
                    <TextInput placeholder="Email" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ email: e })} /> :
                    <View style={{ flexDirection: 'row', width: 330 }}>
                        <Text style={styles.countryNumber}>+1</Text>
                        <TextInput keyboardType="numeric" placeholder="Phone Number" placeholderTextColor="#53535f" style={styles.EmailInputTxt1} onChangeText={(e) => this.setState({ phone: e })} />
                    </View>
                }
                {/* <TextInput placeholder="Password" placeholderTextColor="#53535f" style={styles.PasswordInputTxt} /> */}
                <View style={{ width: 330 }}>
                    <Text style={styles.standardTxt}>Standard rates apply</Text>
                </View>
                <TouchableOpacity style={styles.emailBtn} onPress={() => { this.handler() }}>
                    <Text style={styles.EmailTxt}>Next</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible1}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Please input your phone number</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ CreatePreferenceScreen: false })}>
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
                        <Text style={styles.Description1}>This phone number is existed already.{'\n'}Please try to login with this phone number.</Text>
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
        paddingBottom: 48,
        borderBottomWidth: 0.3,
        borderColor: 'white'
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
    PasswordInputTxt: {
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
    LoginwithphoneImage: {
        width: 250,
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
    StandardrateImage: {
        marginTop: 10,
        width: 155,
        height: 20,
        marginBottom: 15
    },
    EmailTxt: {
        fontSize: 20,
        fontFamily: 'FuturaPT-Demi',
    },
    standardTxt: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 18,
        marginBottom: 20,
        marginTop: 5
    },
    headerTxt: {
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
    createTxt: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'FuturaPT-Demi'
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
        fontFamily: 'FuturaPT-Book',
        marginHorizontal: 10
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
    TitleTxt1: {
        color: 'black',
        fontSize: 55,
        marginTop: 30,
        marginBottom: 10,
        fontFamily: 'TrumpSoftPro-BoldItalic',
        width: '100%',
        textAlign: "center"
    },
})
