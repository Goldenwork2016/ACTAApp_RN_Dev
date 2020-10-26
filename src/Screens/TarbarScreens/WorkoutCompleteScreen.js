import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class WorkoutCompleteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TitleTxt}> OFF TO A </Text>
        <Text style={styles.TitleTxt}> GREAT START </Text>
        <Image source={require('../../Assets/Images/medalImage.png')} resizeMode='stretch' style={styles.medalImage} />
        <Text style={styles.TitleTxt1}> Achievement </Text>
        <Text style={styles.TitleTxt2}> Off to a good start </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    TitleTxt:{
        color:'white',
        fontFamily:'TrumpSoftPro-BoldItalic',
        fontSize:55,
        marginBottom:-5
    },
    TitleTxt1:{
        color:'#82828f',
        fontFamily:'FuturaPT-Book',
        fontSize:20,
        marginBottom:20
    },
    TitleTxt2:{
        color:'white',
        fontFamily:'FuturaPT-Book',
        fontSize:25
    },
    medalImage:{
        width:90,
        height:140,
        marginTop:50,
        marginBottom:50
    }
})
