import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Switch } from 'react-native-switch';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';

import {ThemeConstants} from '../theme/themeConstants';
import {ThemeContext} from '../App';

import config from "../Api/config"

export default class CreateFristnameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Checked: true,
            radioStatus1: 3,
            radioStatus2: 1,
            radioUncheckImage: require('../Assets/Images/radioUncheckImage.png'),
            radioCheckImage: require('../Assets/Images/radioCheckImage.png'),
            radioUncheckImageBlack: require('../Assets/Images/radioUncheckImageBlack.png'),
            radioCheckImageBlack: require('../Assets/Images/radioCheckImageBlack.png'),
            email: '',
            password: '',
            name: '',
            phone: '',
            smscode: '',
            timeFlag: false,
            isLoading: false,
            isModalVisible1: false,
            isModalVisible2: false,
            isflag: '',
            Timer: null,
            loggedIn: false,
            LoggedInStatus: "",
            isEmail:'',
        };
    }

    componentDidMount = async () => {
        const { navigation } = this.props.navigation
        await this.setState({
            email: this.props.navigation.getParam("email"),
            password: this.props.navigation.getParam("password"),
            name: this.props.navigation.getParam("name"),
            phone: this.props.navigation.getParam("phone"),
            smscode: this.props.navigation.getParam("smscode"),
            isEmail: this.props.navigation.getParam("isEmail"),
        })
        console.log("=============================")
        console.log(this.state.name)
        console.log(this.state.phone)
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(this.state.smscode)
    }

    _onChangeSwitch() {
        this.setState({ Checked: !this.state.Checked })
    }

    async setLoggedInvalue(value) {
        await AsyncStorage.setItem('loggedIn', value);
    }

    NetworkSensor = async () => {
        await this.setState({
            timeFlag: true,
            isLoading: false
        })
        alert('network error')
    }

    registerHandle = async () => {
        const self = this;
        const { email, password, name, phone, smscode, Checked, radioStatus1, radioStatus2, timeFlag, isEmail } = this.state;
        let details;
        if (isEmail == true) {
            console.log(email)
            details = {
                'email': email,
                'password': password,
                'name': name,
                'data[place]': radioStatus1,
                'data[goal]': radioStatus2,
                'data[notify]': Checked,
                'add_phone':phone
            };
        } else if (isEmail == false) {
            console.log(phone)
            details = {
                'sms': smscode,
                'phone': phone,
                'password': password,
                'name': name,
                'data[place]': radioStatus1,
                'data[goal]': radioStatus2,
                'data[notify]': Checked,
                'add_email':email
            };
        }


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
        fetch(config.auth.register, {
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
                console.log(responseJson)
                if (responseJson['status'] == 200) {
                    self.setState({ loggedIn: true })
                    self.setState({ LoggedInStatus: "Success" })
                    console.log(self.state.loggedIn);
                    self.setLoggedInvalue(self.state.LoggedInStatus);
                    this.setState({ isModalVisible1: true })
                    setTimeout(() => {
                        this.props.navigation.navigate('App');
                        this.setState({ isModalVisible1: false })
                    }, 2000)
                } else {
                    this.setState({ isModalVisible2: true })
                    console.log("+++++++++++++++++++++")
                }
            })
            .catch((err) => {
                console.log('err =>', JSON.stringify(err));
                clearTimeout(myTimer);
                if (!timeFlag) {
                    this.setState({ isLoading: false })
                    this.setState({ isModalVisible2: true })
                    console.log("================================")
                } else {
                    this.setState({ timeFlag: false })
                }
            })
    }

    render() {
        return (<ThemeContext.Consumer>
          {({ theme }) => (
            <View style={{...styles.container,  backgroundColor: ThemeConstants[theme].backgroundColor}}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Creating your account...'}
                    textStyle={{ color: 'white' }}
                />
                <ScrollView>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                {theme === 'light'
                    ? <Image source={require('../Assets/Images/BackBtnBlack.png')} resizeMode='stretch' />
                    : <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    }
                            </TouchableOpacity>
                            <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>CREATE</Text>
                        </View>
                        <View style={styles.headerArea}>
                            <Text style={{...styles.TitleTxt, color: ThemeConstants[theme].textColorTitle}}>CREATE.</Text>
                            <Text style={styles.desTxt}>Tell us your preferences</Text>
                        </View>
                        <View style={styles.radioArea}>
                            <Text style={{...styles.desTxt1, color: ThemeConstants[theme].textColorTitle}}>What's your fitness goal?</Text>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus1: 1 }) }}>
                                {theme === 'light'
                                ? <Image source={this.state.radioStatus1 == 1 ? this.state.radioCheckImageBlack : this.state.radioUncheckImageBlack} resizeMode='stretch' style={styles.radioImage} />
                                : <Image source={this.state.radioStatus1 == 1 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                }
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Loose Weight</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus1: 2 }) }}>
                                    {theme === 'light'
                                ? <Image source={this.state.radioStatus1 == 2 ? this.state.radioCheckImageBlack : this.state.radioUncheckImageBlack} resizeMode='stretch' style={styles.radioImage} />
                                : <Image source={this.state.radioStatus1 == 2 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                }
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Gain Muscle</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus1: 3 }) }}>
                                    {theme === 'light'
                                ? <Image source={this.state.radioStatus1 == 3 ? this.state.radioCheckImageBlack : this.state.radioUncheckImageBlack} resizeMode='stretch' style={styles.radioImage} />
                                : <Image source={this.state.radioStatus1 == 3 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                }
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Both</Text>
                            </View>
                        </View>
                        <View style={styles.radioArea}>
                            <Text style={{...styles.desTxt1, color: ThemeConstants[theme].textColorTitle}}>Where do you prefer to workout?</Text>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus2: 1 }) }}>
                                 {theme === 'light'
                                ? <Image source={this.state.radioStatus2 == 1 ? this.state.radioCheckImageBlack : this.state.radioUncheckImageBlack} resizeMode='stretch' style={styles.radioImage} />
                                : <Image source={this.state.radioStatus2 == 1 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                }
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Home</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus2: 2 }) }}>
                                     {theme === 'light'
                                ? <Image source={this.state.radioStatus2 == 2 ? this.state.radioCheckImageBlack : this.state.radioUncheckImageBlack} resizeMode='stretch' style={styles.radioImage} />
                                : <Image source={this.state.radioStatus2 == 2 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                }
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Gym</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus2: 3 }) }}>
                                {theme === 'light'
                                ? <Image source={this.state.radioStatus2 == 3 ? this.state.radioCheckImageBlack : this.state.radioUncheckImageBlack} resizeMode='stretch' style={styles.radioImage} />
                                : <Image source={this.state.radioStatus2 == 3 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                }
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Outside</Text>
                            </View>
                        </View>
                        <View style={styles.switchArea}>
                            <Text style={{...styles.desTxt1, color: ThemeConstants[theme].textColorTitle}}>Enable notifications?</Text>
                            <Switch
                                value={this.state.Checked}
                                onValueChange={() => this._onChangeSwitch()}
                                disabled={false}
                                circleSize={25}
                                barHeight={30}
                                switchWidthMultiplier={2.5}
                                // outerCircleStyle={{ width: 30 }}
                                circleBorderWidth={0}
                                activeTextStyle={{ alignSelf: "center" }}
                                inactiveTextStyle={{ alignItems: "center" }}
                                activeText={''}
                                inActiveText={''}
                                backgroundActive={'#575763'}
                                backgroundInactive={'#575763'}
                                changeValueImmediately={false}
                                renderInsideCircle={() => theme === 'light'
                                ?<Image source={require('../Assets/Images/checkImageBlack.png')} resizeMode='stretch' style={styles.checkImage} />
                                :<Image source={require('../Assets/Images/checkImage.png')} resizeMode='stretch' style={styles.checkImage} />}
                                circleActiveColor={'#000'}
                                circleInActiveColor={'#FFF'} />
                        </View>
                        {/* <TouchableOpacity style={styles.emailBtn} onPress={() => this.props.navigation.navigate("App")}> */}
                        <TouchableOpacity style={{...styles.emailBtn,  backgroundColor: ThemeConstants[theme].textColorTitle}} onPress={() => { this.registerHandle() }}>
                            <Text style={{...styles.EmailTxt, color: ThemeConstants[theme].backgroundColor}}>Create my account</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal isVisible={this.state.isModalVisible1}>
                        <View style={{ ...styles.modalView, backgroundColor: '#111012' }}>
                            <Image source={require('../Assets/Images/logo.png')} resizeMode='stretch' style={{ width: 40, height: 38, marginBottom: 20 }} />
                            <Text style={styles.Description1}>Welcome to ACTA!</Text>
                        </View>
                    </Modal>
                    <Modal isVisible={this.state.isModalVisible2}>
                        <View style={styles.modalView1}>
                            <Text style={styles.TitleTxt1}>OOPS!</Text>
                            <Text style={{ ...styles.Description, color: 'black' }}>Your registration is failed..{'\n'}Please try again</Text>
                            <TouchableOpacity style={{ ...styles.QuitWorkout, backgroundColor: 'black' }} onPress={() => this.setState({ isModalVisible2: false })}>
                                <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </ScrollView>
            </View>)}
 </ThemeContext.Consumer>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
        marginBottom: 50
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
    TitleTxt1: {
        color: 'black',
        fontSize: 55,
        marginBottom: 25,
        fontFamily: 'TrumpSoftPro-BoldItalic',
        width: '100%',
        textAlign: "center"
    },
    desTxt: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 35
    },
    desTxt1: {
        fontFamily: 'FuturaPT-Book',
        color: 'white',
        fontSize: 20,
        marginBottom: 35,
        marginTop: 30
    },
    headerArea: {
        borderBottomWidth: 0.5,
        borderColor: '#53535f',
        width: '80%'
    },
    radioArea: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#53535f',
    },
    checkImage: {
        width: 38,
        height: 38
    },
    switchArea: {
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    radioItem: {
        flexDirection: 'row',
        marginTop: -10,
        marginBottom: -5
    },
    radioImage: {
        width: 23,
        height: 23,
        marginRight: 15
    },
    Description: {
        color: 'white',
        fontSize: 25,
        marginBottom: 60,
        fontFamily: 'FuturaPT-Book'
    },
    Description1: {
        color: 'white',
        fontSize: 25,
        marginBottom: 20,
        fontFamily: 'FuturaPT-Book'
    },
    modalView: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    QuitWorkout: {
        width: '30%',
        height: 45,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        position: 'absolute',
        bottom: 25
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
