import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import {ThemeConstants} from '../theme/themeConstants';
import {ThemeContext} from '../App';

export default class CreateFristnameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            phone: '',
            smscode: '',
            isModalVisible1: false,
            isEmail: '',
        };
    }


    componentDidMount = async () => {
        const { navigation } = this.props.navigation;
        await this.setState({
            email: this.props.navigation.getParam("email"),
            password: this.props.navigation.getParam("password"),
            phone: this.props.navigation.getParam("phone"),
            smscode: this.props.navigation.getParam("smscode"),
            isEmail: this.props.navigation.getParam("isEmail"),
        })
        console.log(this.state.password)
    }

    handler = () => {
        const { name, password, phone, smscode, email, isEmail } = this.state
        if (name == "") {
            this.setState({ isModalVisible1: true })
        } else {
            this.props.navigation.navigate("EmailPhonescreen", { email: email, password: password, name: this.state.name, smscode: smscode, phone: phone, isEmail: isEmail })
        }
    }

    render() {
        return (
             <ThemeContext.Consumer>
          {({ theme }) => (
            <View style={{...styles.container,  backgroundColor: ThemeConstants[theme].backgroundColor}}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        {theme === 'light'
                    ? <Image source={require('../Assets/Images/BackBtnBlack.png')} resizeMode='stretch' />
                    : <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    }
                    </TouchableOpacity>
                    <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>CREATE</Text>
                </View>
                <Text style={{...styles.TitleTxt, color: ThemeConstants[theme].textColorTitle}}>CREATE.</Text>
                <Text style={styles.desTxt}>Tell us your name please</Text>
                <TextInput placeholder="Your name" placeholderTextColor="#53535f" style={{...styles.EmailInputTxt, color: ThemeConstants[theme].textColorTitle, backgroundColor: ThemeConstants[theme].inputColor}} onChangeText={(e) => this.setState({ name: e })} />
                <TouchableOpacity style={{...styles.emailBtn, backgroundColor: ThemeConstants[theme].textColorTitle}} onPress={() => { this.handler() }}>
                    <Text style={{...styles.EmailTxt, color: ThemeConstants[theme].backgroundColor}}>Next</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible1}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description}>Please input your name</Text>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ isModalVisible1: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>)}
 </ThemeContext.Consumer>);
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
})
