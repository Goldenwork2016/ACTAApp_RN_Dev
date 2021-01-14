import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {ThemeConstants} from '../../theme/themeConstants';
import {ThemeContext} from '../../App'

export default class WorkoutCompleteScreen extends Component {
  render() {
    return (
    <ThemeContext.Consumer>
     {({ theme }) => (
      <View style={{...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
        <Text style={{...styles.TitleTxt, color: ThemeConstants[theme].textColorTitle}}> OFF TO A </Text>
        <Text style={{...styles.TitleTxt,color: ThemeConstants[theme].textColorTitle}}> GREAT START </Text>{theme === 'light' ? 
         <Image source={require('../../Assets/Images/medalImageBlack.png')} resizeMode='stretch' style={styles.medalImage} />
      :  <Image source={require('../../Assets/Images/medalImage.png')} resizeMode='stretch' style={styles.medalImage} />
    }
        <Text style={{...styles.TitleTxt1, color: ThemeConstants[theme].textColorTitle}}> Achievement </Text>
        <Text style={{...styles.TitleTxt2, color: ThemeConstants[theme].textColorTitle}}> Off to a good start </Text>
      </View>)}
 </ThemeContext.Consumer>);
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
