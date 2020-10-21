import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Platform, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

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
          <Text style={styles.createTxt}>LOGIN</Text>
        </View>

        <Text style={styles.headerTxt}>LOG IN.</Text>
        <Text style={styles.desTxt}>Log in with your phone number</Text>
        <View style={{ flexDirection: 'row', width: 330 }}>
          <Text style={styles.countryNumber}>+31</Text>
          <TextInput keyboardType="numeric" placeholder="Phone Number" placeholderTextColor="#53535f" style={styles.EmailInputTxt} />
        </View>
        <TextInput secureTextEntry={true} placeholder="Password" placeholderTextColor="#53535f" style={styles.PasswordInputTxt} />
        <View style={{ width: 330 }}>
          <Text style={styles.standardTxt}>Standard rates apply</Text>
        </View>
        <TouchableOpacity style={styles.emailBtn} onPress={() => this.props.navigation.navigate("SigninEmailScreen")}>
          <Text style={styles.EmailTxt}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontFamily: 'FuturaPT-Book', color: '#82828f', fontSize: 20, textAlign: "center", marginTop: 8 }}>Forgot Password?</Text>
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
      width: 275,
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
  }
})
