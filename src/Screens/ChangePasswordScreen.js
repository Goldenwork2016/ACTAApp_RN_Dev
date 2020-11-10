import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay';

import config from "../Api/config"

const { height, width } = Dimensions.get('window')
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// lowercase, uppercase, one numeric digit, one special character
let reg_strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
// numeric digit, uppercase, lowercase
let reg_average = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;

export default class CreatePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            password: '',
            re_password: '',
            pincode: '',
            isModalVisible1: false,
            isModalVisible2: false,
            isModalVisible3: false,
            isModalVisible4: false,
            isModalVisible5: false,
            Timer: null,
            isflag: false,
            isEmail: true,
            timeFlag: false,
            isLoading: false,
        };
    }

    componentDidMount = async () => {
        const { navigation } = this.props.navigation;
        await this.setState({
            email: this.props.navigation.getParam("email"),
            phone: this.props.navigation.getParam("phone"),
            pincode: this.props.navigation.getParam("pincode"),
            isEmail: this.props.navigation.getParam("isEmail")
        })
        console.log(this.state.email)
    }

    handler = () => {
        const { password, email, phone, pincode, re_password, isEmail } = this.state
        if (isEmail) {
            if (password == "") {
                this.setState({ isModalVisible1: true })
            } else if (reg_strong.test(password) === false) {
                this.setState({ isModalVisible2: true })
            } else if (password != re_password) {
                this.setState({ isModalVisible3: true })
            } else {
                let details = {
                    // 'email': email,
                    // 'pin': pincode,
                    'password': password
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
                fetch(config.auth.saveNewPassword, {
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
                            this.setState({ isModalVisible5: true })
                            setTimeout(() => {
                                this.props.navigation.navigate("SigninEmailScreen")
                                this.setState({ isModalVisible5: false })
                            }, 2000)
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
            if (password == "") {
                this.setState({ isModalVisible1: true })
            } else if (reg_strong.test(password) === false) {
                this.setState({ isModalVisible2: true })
            } else if (password != re_password) {
                this.setState({ isModalVisible3: true })
            } else {
                let details = {
                    // 'phone': phone,
                    // 'pin': pincode,
                    'password': password
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
                fetch(config.auth.saveNewPassword, {
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
                            this.setState({ isModalVisible5: true })
                            setTimeout(() => {
                                this.props.navigation.navigate("SigninPhoneScreen")
                                this.setState({ isModalVisible5: false })
                            }, 2000)
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
                    textContent={'Changing password...'}
                    textStyle={{ color: 'white' }}
                />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>CREATE</Text>
                </View>
                <Text style={styles.TitleTxt}>CREATE.</Text>
                <Text style={styles.desTxt}>What is your password?</Text>
                <TextInput secureTextEntry={true} placeholder="New Password" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ password: e })} />
                <TextInput secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ re_password: e })} />
                <TouchableOpacity style={styles.emailBtn} onPress={() => { this.handler() }}>
                    <Text style={styles.EmailTxt}>Next</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible1}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Please input new password</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible1: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible2}>
                    <View style={styles.modalView1}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <View style={{ width: "95%", alignSelf: 'center' }}>
                            <Text style={styles.Description}>
                                Password must contain following:
                            </Text>
                            <Text style={styles.Description1}>
                                A lowercase letter{'\n'}
                                A capital letter{'\n'}
                                A number{'\n'}
                                A special character{'\n'}
                                Minimum 8 characters
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible2: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible3}>
                    <View style={styles.modalView2}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Cormfirm password does not match with password</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible3: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible4}>
                    <View style={styles.modalView2}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>New password did not save.</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible4: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible5}>
                    <View style={{ ...styles.modalView, backgroundColor: '#111012' }}>
                        <Image source={require('../Assets/Images/logo.png')} resizeMode='stretch' style={{ width: 40, height: 38, marginBottom: 20 }} />
                        <Text style={{ ...styles.Description1, color: 'white' }}>Password successfully changed</Text>
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
        height: 350,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }, modalView2: {
        width: '100%',
        height: 250,
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
        fontWeight: 'bold',
        textAlign: 'center'
    },
    Description1: {
        color: "black",
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'FuturaPT-Book',
        width: '80%',
        alignItems: 'center',
        marginLeft: 20
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
