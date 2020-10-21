import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default class SigninEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>LOGIN</Text>
        </View>
        <Text style={styles.TitleTxt}>LOG IN.</Text>
        <Text style={styles.desTxt}>Log in with your email and password</Text>
        <TextInput placeholder="Email" placeholderTextColor="#53535f" style={styles.EmailInputTxt} />
        <TextInput secureTextEntry={true} placeholder="Password" placeholderTextColor="#53535f" style={styles.EmailInputTxt} />
        <TouchableOpacity style={styles.emailBtn} onPress={() => this.props.navigation.navigate("SigninEmailScreen")}>
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
  }
})
