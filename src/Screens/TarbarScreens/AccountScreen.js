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
  changeMode = ()=>{
    this.setState({isOn: !this.state.isOn})
  }

  _rendermakelist({ item, index }) {
    return (
      <View style={{ marginTop: 5 }}>
        <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage} />
      </View>
    )
  }

  _rendermakelist1({ item, index }) {
    return (
      <View style={styles.ListContent1}>
        <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
        <Text style={styles.ListTitle}>{item.Title}</Text>
      </View>
    )
  }

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
                  <Text style={styles.headerTxt}>ACCOUNT</Text>
                </View>
                <TouchableOpacity style={styles.AlarmkBtn} onPress={() => { this.props.navigation.navigate("AccountSettingScreen") }}>
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
                <TouchableOpacity style={styles.ContentList6} onPress={() => this.props.navigation.navigate("AccountFollowingScreen", { ddd: true })}>
                  <Text style={{...styles.numTxt,color: ThemeConstants[theme].textColorDescription}}>{window.core.each(window.us.data.follow).length}</Text>
                  <Text style={styles.itemTxt}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ContentList6} onPress={() => this.props.navigation.navigate("AccountFollowingScreen", { ddd: false })}>
                  <Text style={{...styles.numTxt, color: ThemeConstants[theme].textColorDescription}}>{window.core.each(window.us.followers).length}</Text>
                  <Text style={styles.itemTxt}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.ContentList2,  borderRightWidth: 0 }} onPress={() => this.props.navigation.navigate("AccountTraingenScreen")}>
                  <Text style={{...styles.numTxt, color: ThemeConstants[theme].textColorDescription}}>48</Text>
                  <Text style={styles.itemTxt}>Workouts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ListBnt}>
                <View style={{ width: '100%'}}>
                  <TouchableOpacity style={{...styles.createBtn, backgroundColor: ThemeConstants[theme].textColorTitle}} onPress={() => this.props.navigation.navigate("FindFriendScreen")}>
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
              <View style={styles.headerContent1}>
                <View style={styles.ContentList3}>
                  <View style={styles.ImageArea}>
                    <Image source={require('../../Assets/Images/MuscleGainImage.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                  </View>
                  <Text style={styles.itemTxt1}>Muscle Gain</Text>
                </View>
                <View style={styles.ContentList3}>
                  <View style={styles.ImageArea}>
                    <Image source={require('../../Assets/Images/workoutImage.png')} resizeMode='stretch' style={styles.ArchieveImage} />
                  </View>
                  <Text style={styles.itemTxt1}>1 Workout</Text>
                </View>
                <View style={styles.ContentList3}>
                  <View style={styles.ImageArea}>
                    <Image source={require('../../Assets/Images/greatStartImage.png')} resizeMode='stretch' style={styles.ArchieveImage} />
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
             {/*<View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Weight</Text>
                <View style={styles.AllArea}>
                  <Text style={styles.ConHeaderTxt1}><Text style={{ fontSize: 25, marginTop: 5 }}>+</Text>  WEIGTH IN</Text>
                </View>*/}
                  <View style={styles.mainContent}>
                    <TouchableOpacity style={styles.allProgramsButton} onPress={() => this.props.navigation.navigate("CompareAndShare")}>
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
                            offColor="#18171a"
                           // labelStyle={{ color: "black", fontWeight: "700" }}
                             icon={<Icon 
                              name = "check"
                              size={14}
                              color="black"/>}
                            size="large"
                            onToggle={toggleTheme}
                          />
                          )}
                      </ThemeContext.Consumer>
                </View>  
              </View>   
              
             {/*} <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
              <View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Average Heart Rage</Text>
              </View>
              <Image source={require('../../Assets/Images/chartImage2.png')} resizeMode='stretch' style={styles.chartImage1} />
            </View>*/}
          </View>
        </ScrollView>
      </View>
   )}
 </ThemeContext.Consumer>);
  }
}

export default withNavigation(AccountScreen);
