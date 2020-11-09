import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Switch } from 'react-native-switch';

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
            email: '',
            password: '',
            name: '',
            phone: '',
            smscode: '',
            timeFlag: false,
            isLoading: false
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

    NetworkSensor = async () => {
        await this.setState({
            timeFlag: true,
            isLoading: false
        })
        alert('network error')
    }

    registerHandle = async () => {
        const { email, password, name, phone, smscode, Checked, radioStatus1, radioStatus2, timeFlag } = this.state;
        let details;
        if (phone == '') {
            console.log(email)
            details = {
                'email': email,
                'password': password,
                'name': name,
                'data[place]': radioStatus1,
                'data[goal]': radioStatus2,
                'data[notify]': Checked,
            };
        } else if (email == '') {
            console.log(phone)
            details = {
                'sms': smscode,
                'phone': phone,
                'password': password,
                'name': name,
                'data[place]': radioStatus1,
                'data[goal]': radioStatus2,
                'data[notify]': Checked,
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
            .then(async (responseJson) => {
                this.setState({ isLoading: false })
                clearTimeout(myTimer)
                if (responseJson['status'] == 200) {
                    // console.log('responseJson===>', responseJson);
                    // await AsyncStorage.setItem('userID', JSON.stringify(responseJson['id']))
                    // await AsyncStorage.setItem('verifyCode', JSON.stringify(responseJson['verifyCode']))
                    // await AsyncStorage.setItem('isFace', JSON.stringify(responseJson['isFace']))
                    this.props.navigation.navigate('App');
                } else if (responseJson['status'] == 400) {
                    console.log('responseJson===>', responseJson);
                    alert('User exists already')
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

    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Loading...'}
                    textStyle={{ color: 'white' }}
                />
                <ScrollView>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                            </TouchableOpacity>
                            <Text style={styles.headerTxt}>CREATE</Text>
                        </View>
                        <View style={styles.headerArea}>
                            <Text style={styles.TitleTxt}>CREATE.</Text>
                            <Text style={styles.desTxt}>Tell us your preferences</Text>
                        </View>
                        <View style={styles.radioArea}>
                            <Text style={styles.desTxt1}>What's your fitness goal?</Text>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus1: 1 }) }}>
                                    <Image source={this.state.radioStatus1 == 1 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Loose Weight</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus1: 2 }) }}>
                                    <Image source={this.state.radioStatus1 == 2 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Gain Muscle</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus1: 3 }) }}>
                                    <Image source={this.state.radioStatus1 == 3 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Both</Text>
                            </View>
                        </View>
                        <View style={styles.radioArea}>
                            <Text style={styles.desTxt1}>Where do you prefer to workout?</Text>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus2: 1 }) }}>
                                    <Image source={this.state.radioStatus2 == 1 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Home</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus2: 2 }) }}>
                                    <Image source={this.state.radioStatus2 == 2 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Gym</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <TouchableOpacity onPress={() => { this.setState({ radioStatus2: 3 }) }}>
                                    <Image source={this.state.radioStatus2 == 3 ? this.state.radioCheckImage : this.state.radioUncheckImage} resizeMode='stretch' style={styles.radioImage} />
                                </TouchableOpacity>
                                <Text style={styles.desTxt}>Outside</Text>
                            </View>
                        </View>
                        <View style={styles.switchArea}>
                            <Text style={styles.desTxt1}>Enable notifications?</Text>
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
                                renderInsideCircle={() => <Image source={require('../Assets/Images/checkImage.png')} resizeMode='stretch' style={styles.checkImage} />}
                                circleActiveColor={'#FFF'}
                                circleInActiveColor={'#FFF'} />
                        </View>
                        {/* <TouchableOpacity style={styles.emailBtn} onPress={() => this.props.navigation.navigate("App")}> */}
                        <TouchableOpacity style={styles.emailBtn} onPress={() => { this.registerHandle() }}>
                            <Text style={styles.EmailTxt}>Create my account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
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
    }
})
