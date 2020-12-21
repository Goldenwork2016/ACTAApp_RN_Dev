import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay';

import config, { BASE_PATH } from "../../Api/config"

export default class AccountEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measurement: window.user.data.measurement || '',
      timeFlag: false,
      isloading: false,
      isflag: '',
      Timer: null,
      isModalVisible1: false,
      isModalVisible2: false,
      isModalVisible3: false,
    };
  }

  NetworkSensor = async () => {
    await this.setState({
      timeFlag: true,
      isLoading: false
    })
    alert('network error')
  }

  saveName = () => {
    if (this.state.measurement == '') {
      this.setState({ isModalVisible2: true })
    } else {
      let details = {
        'measurement': this.state.measurement,
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
      fetch(config.auth.updateField, {
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
            this.setState({ isModalVisible1: true })
            setTimeout(() => {
				this.setState({ isModalVisible1: false })
				this.props.navigation.goBack()
            }, 2000)
          }
        })
        .catch((err) => {
          console.log('JSON.stringify(err)=>', err);
          if (!timeFlag) {
            this.setState({ isLoading: false })
            this.setState({ isModalVisible4: true })
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
          textContent={'Changing measurement units...'}
          textStyle={{ color: 'white' }}
        />
        <View style={styles.header}>
          <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>MEASUREMENT UNITS</Text>
        </View>
        <Text style={styles.TitleTxt}>Measurement Units</Text>
        <TextInput placeholder="Measurement" placeholderTextColor="#53535f" defaultValue={this.state.measurement} style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ measurement: e })} />
        <TouchableOpacity style={styles.emailBtn} onPress={() => this.saveName()}>
          <Text style={styles.EmailTxt}>Save</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible1}>
          <View style={{ ...styles.modalView, backgroundColor: '#111012' }}>
            <Image source={require('../../Assets/Images/logo.png')} resizeMode='stretch' style={{ width: 40, height: 38, marginBottom: 20 }} />
            <Text style={styles.Description1}>Your measurement changed successfully!</Text>
          </View>
        </Modal>
        <Modal isVisible={this.state.isModalVisible2}>
          <View style={styles.modalView}>
            <Text style={styles.TitleTxt1}>OOPS!</Text>
            <Text style={styles.Description2}>Please input measurement.</Text>
            <TouchableOpacity style={styles.QuitWorkout2} onPress={() => this.setState({ isModalVisible2: false })}>
              <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={this.state.isModalVisible3}>
          <View style={styles.modalView}>
            <Text style={styles.TitleTxt1}>OOPS!</Text>
            <Text style={styles.Description2}>Please input second name.</Text>
            <TouchableOpacity style={styles.QuitWorkout2} onPress={() => this.setState({ isModalVisible3: false })}>
              <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={this.state.isModalVisible4}>
          <View style={styles.modalView}>
            <Text style={styles.TitleTxt1}>OOPS!</Text>
            <Text style={styles.Description2}>The operation faild. Please try again.</Text>
            <TouchableOpacity style={styles.QuitWorkout2} onPress={() => this.setState({ isModalVisible3: false })}>
              <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
            </TouchableOpacity>
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
    paddingBottom: 37,
    borderBottomWidth: 0.25,
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
    fontFamily: 'FuturaPT-Book',
    color: 'white',
    fontSize: 27,
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 50,
    marginTop: 25
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
    marginBottom: 25,
    fontFamily: 'TrumpSoftPro-BoldItalic',
    width: '100%',
    textAlign: "center"
  },
  Description2: {
    color: "black",
    fontSize: 23,
    marginBottom: 20,
    fontFamily: 'FuturaPT-Book'
  },
  QuitWorkout2: {
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
  Description1: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
    fontFamily: 'FuturaPT-Book'
  },
})
