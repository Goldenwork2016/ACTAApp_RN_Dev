import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import User from '../components/User';
import AsyncStorage from '@react-native-community/async-storage';
import {ThemeConstants} from '../theme/themeConstants'
import {ThemeContext} from '../App'

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationAngle: 0
    };
    this._bootstrapAsync();
  }

  componentDidMount = async () => {

  }

  _bootstrapAsync = async () => {
    console.log(User.Loggined)
    setInterval(() => {
      this.setState({ rotationAngle: this.state.rotationAngle + 10 })
    }, 50)
    User.Loggined = await AsyncStorage.getItem('loggedIn');
    setTimeout(() => {
      this.props.navigation.navigate(User.Loggined == "Success" ? 'App' : 'Auth')
    }, 3000)
  };

  render() {
    return (<ThemeContext.Consumer>
          {({ theme }) => (
      <View style={{...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
      { theme === 'light'
      ?<Image source={require('../Assets/Images/iconBlack.png')} resizeMode='stretch' style={{ width: 30, height: 27 }} />
       : <Image source={require('../Assets/Images/logo.png')} resizeMode='stretch' style={{ width: 30, height: 27 }} />
       }
        <Image source={require('../Assets/Images/CircleImage.png')} resizeMode='stretch' style={{ position: 'absolute', width: 88, height: 88, justifyContent: "center", alignItems: 'center', transform: [{ rotate: `${this.state.rotationAngle}deg` }] }} >
        </Image>
      </View>)}
 </ThemeContext.Consumer>);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})
