import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default class CreateFristnameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            phone: '',
            smscode: ''
        };
    }


    componentDidMount = async () => {
        const { navigation } = this.props.navigation;
        await this.setState({
            email: this.props.navigation.getParam("email"),
            password: this.props.navigation.getParam("password"),
            phone: this.props.navigation.getParam("phone"),
            smscode: this.props.navigation.getParam("smscode")
        })
        console.log(this.state.password)
    }

    handler = () => {
        const { name, password, phone, smscode, email } = this.state
        if (name == "") {
            alert("Please input your name")
        } else {
            this.props.navigation.navigate("CreatePreferenceScreen", { email: email, password: password, name: this.state.name, smscode: smscode, phone: phone })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>CREATE</Text>
                </View>
                <Text style={styles.TitleTxt}>CREATE.</Text>
                <Text style={styles.desTxt}>Tell us your name please</Text>
                <TextInput placeholder="Your name" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ name: e })} />
                <TouchableOpacity style={styles.emailBtn} onPress={() => { this.handler() }}>
                    <Text style={styles.EmailTxt}>Next</Text>
                </TouchableOpacity>
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
    }
})
