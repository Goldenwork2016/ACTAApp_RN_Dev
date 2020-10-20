import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default class SigninEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop:60, width:"90%", alignItems:"center", paddingBottom:48, borderBottomWidth:0.3, borderColor:'white'}}>
          <TouchableOpacity style={styles.BackBtn} onPress={()=>this.props.navigation.goBack()}>
            <Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
          </TouchableOpacity>
          <Text style={{color:'white', fontSize:16}}>LOGIN</Text>
        </View>
        
        <Image source={require('../Assets/Images/LoginTxtImage.png')} resizeMode='stretch' style={styles.LoginTxtImage}/>
        <Image source={require('../Assets/Images/LoginwithTxtImage.png')} resizeMode='stretch' style={styles.LoginwithTxtImage}/>
        <TextInput placeholder="Email" placeholderTextColor="#53535f" style={styles.EmailInputTxt}/>
        <TextInput placeholder="Password" placeholderTextColor="#53535f" style={styles.EmailInputTxt}/>
        <TouchableOpacity style={styles.emailBtn} onPress={()=>this.props.navigation.navigate("SigninEmailScreen")}>
          <Text style={styles.EmailTxt}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../Assets/Images/ForgotPasswordImage.png')} resizeMode='stretch' style={styles.ForgotPasswordImage}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:'black',
      alignItems:'center'
  },
  LoginTxtImage:{
    marginTop:45,
    width:140,
    height:52,
    alignSelf:"center",
    marginBottom:30
  },
  EmailInputTxt:{
    width:330,
    height:50,
    backgroundColor:'#18171a',
    marginBottom:8,
    borderRadius:3,
    paddingLeft:20,
    color:"white",
    fontSize:20,
  },
  LoginwithTxtImage:{
    width:300,
    marginTop:5,
    marginBottom:40
  },
  emailBtn:{
    width:330, 
    height:55, 
    marginTop:15,
    backgroundColor:'white', 
    justifyContent:"center", 
    alignItems:"center", 
    alignSelf:'center',
    borderRadius:3,
    marginBottom:10
  },
  BackBtn:{
    width:26,
    height:20,
    position:'absolute',
    left:10
  },
  ForgotPasswordImage:{
    marginTop:15,
    width:150,
    height:20
  },
  EmailTxt:{
    fontSize:20
},
})
