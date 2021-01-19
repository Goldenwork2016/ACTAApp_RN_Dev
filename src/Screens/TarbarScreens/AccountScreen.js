import React, { Component } from 'react';
import { View, Text, Image, AppState, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity, Switch} from 'react-native';
import { styles } from '../../styles'
import config, { BASE_PATH } from "../../Api/config"
import NonImage from '../../Assets/Images/nopicture.png';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/Entypo'; 
import {ThemeConstants} from '../../theme/themeConstants';
import {ThemeContext} from '../../App';

import { withNavigation } from "react-navigation"

class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      avatarSource: NonImage,
      appState: AppState.currentState,
       contentList1: [
        {
          imageUrlWhite: require('../../Assets/Images/MuscleGainImage.png'),
          imageUrlBlack: require('../../Assets/Images/MuscleGainImage.png'),
          description: 'Muscle Gain'
        },
        {
          imageUrlWhite: require('../../Assets/Images/workoutImage.png'),
          imageUrlBlack: require('../../Assets/Images/workoutImage.png'),
          description: '1 Workout'
        },
        {
          imageUrlWhite: require('../../Assets/Images/greatStartImage.png'),
          imageUrlBlack: require('../../Assets/Images/greatStartImage.png'),
          description: 'Great start'
        }
        ],
         contentList: [
        {
          imageUrl: require('../../Assets/Images/ProPersonImage.png'),
        },
        {
          imageUrl: require('../../Assets/Images/plusImage.png'),
        },
        {
          imageUrl: require('../../Assets/Images/plusImage.png'),
        }
        ]
    };

    this.getName()
  }

  componentWillUnmount() {
    // AppState.removeEventListener('change', this._handleAppStateChange);
    this.focusListener.remove();
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused      
      // Call any action      
      console.log('sdfsfsdfddddddddddd++++++++++++++++++=sdfsdfsd')
      this.getName()
    });
    // AppState.addEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (!this.state.appState.match(/inactive|background/) && nextAppState !== 'active') {
      this.getName()
      console.log("________________________________________________________")
      console.log("background")
    }
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      this.getName()
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      console.log("foreground")
    }
    this.setState({ appState: nextAppState });
  }


  getName() {
    fetch(config.auth.userInfo, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(async (responseJson) => {
        if (responseJson['status'] == 200) {
          await this.setState({ UserName: responseJson.body.name })
          await this.setState({ avatarSource: BASE_PATH + responseJson.body.avatarUrl })
          console.log(responseJson.body.name)
        }
      })
      .catch((err) => {
        console.log('JSON.stringify(err)=>', err);
      })
  }
  // _rendermakelist({ item, index }) {
  //   return (
  //     <View style={styles.ContentList3}>
  //        <View style={styles.ImageArea}>
  //         <Image source={item.imageUrlWhite} resizeMode='stretch' style={styles.ArchieveImage} />
  //       </View>
  //          <Text style={styles.itemTxt1}>{item.description}</Text>
  //     </View>  
  //   )
  // }

  // _rendermakelist1({ item, index }) {
  //   return (
  //    <View style={styles.ContentList3}>
  //       <View style={styles.ImageArea1}>
  //         <Image source={require('../../Assets/Images/plusImage.png')} resizeMode='stretch' style={styles.ArchieveImage1} />
  //       </View>
  //    </View>
  //   )
  // }

  render() {
    let imageSwitch = <Image source={require('../../Assets/Images/checkImage.png')} resizeMode='stretch' style={styles.RightIcon} />
    return ( <ThemeContext.Consumer>
          {({ theme }) => (
      <View style={{...styles.container1, backgroundColor: ThemeConstants[theme].backgroundColorActivity}}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={{ width: '100%' }}>
            <View style={styles.ImageBackground}>
              <View style={styles.header}>
                <View style={styles.BackBtn}>
                {theme === 'light' ?  
                <Image source={require('../../Assets/Images/iconBlack.png')} resizeMode='stretch' style={styles.HeaderImage} />
                :  <Image source={require('../../Assets/Images/iconWhite.png')} resizeMode='stretch' style={styles.HeaderImage} />
                }
                </View>
                <View style={styles.dropDown}>
                  <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>ACCOUNT</Text>
                </View>
                <TouchableOpacity style={styles.AlarmkBtn} onPress={() => { this.props.navigation.navigate("AccountSettingScreen")}}>
                {theme === "light" ? 
                  <Image source={require('../../Assets/Images/settingBlack.png')} resizeMode='stretch' style={styles.notiImage} />
                  : <Image source={require('../../Assets/Images/settingImage.png')} resizeMode='stretch' style={styles.notiImage} />
                }
                </TouchableOpacity>
              </View>
              {/* <Image source={require('../../Assets/Images/nopicture.png')} resizeMode='stretch' style={styles.PersonProfileImage} /> */}
              <View style={styles.profileArea}>
                <Image source={{ uri: this.state.avatarSource.toString() }} resizeMode='cover' style={styles.PersonProfileImage} />
              </View>
              <Text style={styles.nameTxt}>{this.state.UserName}</Text>
              <View style={styles.headerContent}>
                <TouchableOpacity style={styles.ContentList6} onPress={() => this.props.navigation.navigate("AccountFollowingScreen", { ddd: true, theme: theme})}>
                  <Text style={{...styles.numTxt,color: ThemeConstants[theme].textColorDescription}}>{window.core.each(window.us.data.follow).length}</Text>
                  <Text style={styles.itemTxt}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ContentList6} onPress={() => this.props.navigation.navigate("AccountFollowingScreen", { ddd: false, theme: theme })}>
                  <Text style={{...styles.numTxt, color: ThemeConstants[theme].textColorDescription}}>{window.core.each(window.us.followers).length}</Text>
                  <Text style={styles.itemTxt}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.ContentList2,  borderRightWidth: 0 }} onPress={() => this.props.navigation.navigate("AccountTraingenScreen", {theme: theme})}>
                  <Text style={{...styles.numTxt, color: ThemeConstants[theme].textColorDescription}}>48</Text>
                  <Text style={styles.itemTxt}>Workouts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ListBnt}>
                <View style={{ width: '100%'}}>
                  <TouchableOpacity style={{...styles.createBtn, backgroundColor: ThemeConstants[theme].textColorTitle}} onPress={() => this.props.navigation.navigate("FindFriendScreen", {theme: theme})}>
                    <Text style={{...styles.CreateTxt, color: ThemeConstants[theme].backgroundColor}}>Find Friends</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{...styles.Content, backgroundColor: ThemeConstants[theme].backgroundColor}}>
              <View style={styles.AllArea1}>
                <Text style={{...styles.ConHeaderTxt, color: ThemeConstants[theme].textColorTitle}}>Achievements</Text>
                <View style={styles.AllArea}>
                  <Image source={require('../../Assets/Images/arrow_right.png')} resizeMode='stretch' style={styles.RightIcon} />
                  <Text style={{...styles.ConHeaderTxt1,  color: ThemeConstants[theme].textColorTitle}}>VIEW ALL</Text>
                </View>
              </View>
              <View style = {styles.headerContent1}>
               <View style={styles.ContentList3}>
                  <View style={{...styles.ImageArea, backgroundColor: ThemeConstants[theme].backgroundColorBottom}}>
                    {theme === 'light'
                   ? <Image source={require('../../Assets/Images/MuscleGainImageBlack.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                   : <Image source={require('../../Assets/Images/MuscleGainImage.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                  }
                  </View>
                  <Text style={styles.itemTxt1}>Muscle Gain</Text>
                </View>
                <View style={styles.ContentList3}>
                  <View style={{...styles.ImageArea, backgroundColor: ThemeConstants[theme].backgroundColorBottom}}>
                  {theme === 'light'
                   ? <Image source={require('../../Assets/Images/workoutMedalImage.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                   : <Image source={require('../../Assets/Images/workoutImage.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                  }
                  </View>
                  <Text style={styles.itemTxt1}>1 Workout</Text>
                </View>
                <View style={styles.ContentList3}>
                  <View style={{...styles.ImageArea, backgroundColor: ThemeConstants[theme].backgroundColorBottom}}>
                    {theme === 'light'
                   ? <Image source={require('../../Assets/Images/medalImageBlack.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                   :
                    <Image source={require('../../Assets/Images/greatStartImage.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                  }
                  </View>
                  <Text style={styles.itemTxt1}>Great start</Text>
                </View>  
                </View>
                  <View style={{...styles.LineStyle, borderBottomColor: ThemeConstants[theme].bottomBorderColor}}/>
              <View style={styles.AllArea1}>
                <Text style={{...styles.ConHeaderTxt, color: ThemeConstants[theme].textColorTitle}}>Progress Pics</Text>
                <View style={styles.AllArea}>
                  <Image source={require('../../Assets/Images/arrow_right.png')} resizeMode='stretch' style={styles.RightIcon} />
                  <Text style={{...styles.ConHeaderTxt1, color: ThemeConstants[theme].textColorTitle}}>VIEW ALL</Text>
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
                <View style={styles.ContentList3}>
                  <View style={styles.ImageArea1}>
                    <Image source={require('../../Assets/Images/plusImage.png')} resizeMode='stretch' style={styles.ArchieveImage1} />
                  </View>
                </View>
              </View>
                  <View style={styles.mainContent}>
                    <TouchableOpacity style={styles.allProgramsButton} onPress={() => this.props.navigation.navigate("CompareAndShare", {theme: theme})}>
                      <Text style={{...styles.ConHeaderTxt, color: ThemeConstants[theme].textColorTitle}}>Compare and Share</Text>
                    </TouchableOpacity>
                  </View>
                  <View style ={styles.modeBlock}>
                    <Text  style={{...styles.modeText, color: ThemeConstants[theme].textColorTitle}}>Dark Mode</Text>
                      <ThemeContext.Consumer>
                       {({toggleTheme, isOn}) => (
                         <ToggleSwitch
                            isOn = {isOn}
                            onColor="#18171a"
                            offColor="#e0e0e0"
                           // labelStyle={{ color: "black", fontWeight: "700" }}
                             icon={
                              isOn === true ? <Icon 
                              name = "check"
                              size={14}
                              color="black"/>: null}
                            size="large"
                            onToggle={toggleTheme}
                          />
                          )}
                      </ThemeContext.Consumer>
                </View>  
              </View>   
          </View>
        </ScrollView>
      </View>
   )}
 </ThemeContext.Consumer>);
  }
}

export default withNavigation(AccountScreen);
