import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate('LoginScreen')
    }, 3000)
}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Assets/Images/CircleImage.png')} resizeMode='stretch' style={{width:88, height:88, justifyContent:"center", alignItems:'center'}} >
          <Image source={require('../Assets/Images/logo.png')} resizeMode='stretch' style={{width:30, height:27}} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  }
})
