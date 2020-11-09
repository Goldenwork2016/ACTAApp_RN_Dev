import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, Keyboard, ImageBackground, TouchableOpacity } from 'react-native';
import config, { BASE_PATH } from "../Api/config"
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';

let regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class SigninEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      timeFlag: false,
      isloading: false,
      loggedIn: false,
      LoggedInStatus: "",
    };
  }

  NetworkSensor = async () => {
    await this.setState({
      timeFlag: true,
      isLoading: false
    })
    alert('network error')
  }

  async setLoggedInvalue(value) {
    await AsyncStorage.setItem('loggedIn', value);
  }

  loginHandle = async () => {
    const self = this;
    console.log('login');
    const { email, password, timeFlag } = this.state
    Keyboard.dismiss()
    if (email == "") {
      alert('Please enter email')
    } else if (password == "") {
      alert('Please enter password')
    } else if (reg.test(email) === false) {
      alert('Email type error')
    } else {
      let details = {
        'email': email,
        'password': password
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
      fetch(config.auth.login, {
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
            self.setState({ loggedIn: true })
            self.setState({ LoggedInStatus: "Success" })
            console.log(self.state.loggedIn);
            self.setLoggedInvalue(self.state.LoggedInStatus);
            this.props.navigation.navigate('App')
          } if (responseJson['status'] == 400) {
            alert("Phone number or password is incorrectly")
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
          textContent={'Loading...'}
          textStyle={{ color: 'white' }}
        />
        <View style={styles.header}>
          <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>LOGIN</Text>
        </View>
        <Text style={styles.TitleTxt}>LOG IN.</Text>
        <Text style={styles.desTxt}>Log in with your email and password</Text>
        <TextInput placeholder="Email" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ email: e })} />
        <TextInput secureTextEntry={true} placeholder="Password" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ password: e })} />
        <TouchableOpacity style={styles.emailBtn} onPress={() => { this.loginHandle() }}>
          <Text style={styles.EmailTxt}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPwdTxt}>Forgot Password?</Text>
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
  },
  forgotPwdTxt: {
    fontFamily: 'FuturaPT-Book',
    color: '#82828f',
    fontSize: 20,
    textAlign: "center",
    marginTop: 8
  }
})
