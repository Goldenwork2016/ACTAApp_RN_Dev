import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

import {ThemeConstants} from '../../theme/themeConstants'
//import {ThemeContext} from '../../App'

export default class CompareAndShare extends Component {
  render() { 
    let theme = this.props.navigation.getParam('theme')
    return ( 
      <View style={{...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
            <ScrollView style={{ flex: 1, width: '100%' }}>
              <View style={{ width: '100%', height: 220 }}>
                  <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn}  onPress={() => this.props.navigation.goBack()}>
                    {theme === 'light' ? <Image source={require('../../Assets/Images/BackBtnBlack.png')} resizeMode='stretch' style={styles.HeaderImage} />
                    :  <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' style={styles.HeaderImage} />
                    }
                    </TouchableOpacity>
                    <View style={styles.dropDown}>
                        <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>COMPARE & SHARE</Text>
                    </View>
                  </View>
                  <View style={styles.LineStyle}/>
                  <View style={styles.mainContainer}>
                   <Text style={{...styles.TileTxt, color: ThemeConstants[theme].textColorTitle}}>COMPARE</Text>
                    <Text style={{...styles.TileTxt, color: ThemeConstants[theme].textColorTitle}}>AND SHARE</Text>
                  </View>
              </View>
              <View style={styles.headerContent1}>
                <View style={styles.ContentList3}>
                  <View style={styles.ImageArea1}>
                    <Image source={require('../../Assets/Images/ProPersonImage.png')} resizeMode='stretch' style={styles.ArchieveImage1} />
                  </View>
                </View>
                <View style={styles.ContentList3}>
                  <View style={styles.ImageArea1}>
                    <Image source={require('../../Assets/Images/plusImage.png')} resizeMode='stretch' style={styles.ArchieveImage1} />
                  </View>
                </View>
              </View>
               <View style={{alignSelf: 'center', marginBottom: 60}}>
                  <Text style={{...styles.ConHeaderTxt5,  color: ThemeConstants[theme].textColorTitle}}>Share your progress</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{...styles.ShareIconBtn, backgroundColor: ThemeConstants[theme].textColorTitle}}>
                    {theme === 'light' ?
                      <Image source={require('../../Assets/Images/facebookWhite.png')} resizeMode='stretch' style={styles.ShareImage} />
                    : <Image source={require('../../Assets/Images/facebook.png')} resizeMode='stretch' style={styles.ShareImage} />
                    }
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.ShareIconBtn,backgroundColor: ThemeConstants[theme].textColorTitle}}>
                     {theme === 'light' ?
                      <Image source={require('../../Assets/Images/twitterWhite.png')} resizeMode='stretch' style={styles.ShareImage} />
                      :<Image source={require('../../Assets/Images/twitter.png')} resizeMode='stretch' style={styles.ShareImage} />
                    }
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.ShareIconBtn,backgroundColor: ThemeConstants[theme].textColorTitle}}>
                     {theme === 'light' ?
                      <Image source={require('../../Assets/Images/instagramWhite.png')} resizeMode='stretch' style={styles.ShareImage} />
                     : <Image source={require('../../Assets/Images/instagram.png')} resizeMode='stretch' style={styles.ShareImage} />
                    }
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.ShareIconBtn,backgroundColor: ThemeConstants[theme].textColorTitle}}>
                     {theme === 'light' ?
                      <Image source={require('../../Assets/Images/whatsappWhile.png')} resizeMode='stretch' style={styles.ShareImage} />
                     : <Image source={require('../../Assets/Images/whatsapp.png')} resizeMode='stretch' style={styles.ShareImage} />
                    }
                    </TouchableOpacity>
                  </View>
                </View>
            </ScrollView> 
      </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: '100%'
  },
  ImageBackground: {
    width: '100%',
    height: '100%'
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    width: "90%",
    alignItems: "center",
    paddingBottom: 41,
  },
  headerTxt: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'FuturaPT-Demi',
    letterSpacing: 1.5
  },
  HeaderImage: {
    marginLeft: 15,
    width: 25,
    height: 21
  },
  ShareImage:{
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
    width: 19,
    height: 19
  },
  BackBtn: {
    width: 26,
    height: 20,
    position: 'absolute',
    left: 10
  },
  AlarmkBtn: {
    width: 26,
    height: 20,
    position: 'absolute',
    right: "-8%"
  },

  mainContainer: {
    position: 'absolute',
    width: "60%",
    bottom: -50,
    alignSelf: 'center'
  },

  TileTxt: {
    fontFamily: 'TrumpSoftPro-BoldItalic',
    color: 'white',
     fontSize: 62,
    textAlign: "center",
    marginBottom: 5,
    lineHeight: 70
  },
  dropDown: {
    marginLeft: '10%'
  },

  mainContent: {
    marginTop: 15,
    marginBottom: 30,
    marginLeft: '3%'
  },
  LineStyle:{
    borderBottomColor: '#18171a',
    borderBottomWidth: 1,
    marginLeft: '5%',
    marginRight: '5%'
   },
  headerContent1: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    paddingBottom: 30,
    marginTop: 65,
    borderColor: '#82828f'
  },
  ContentList3: {
    width: '50%',
    alignItems: "center",
  },
  ConHeaderTxt5: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 23,
    marginBottom: 15,
    marginLeft: 30
  },
  ImageArea1: {
    width: "90%",
    height: 220,
    backgroundColor: '#111012',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 15
  },
  ArchieveImage1: {
    width: '100%',
    height: '100%'
  },
  ShareIconBtn:{
    marginLeft: 10,
    width: 50,
    height: 50, 
    backgroundColor: 'white',
    borderRadius: 50
  }
})

