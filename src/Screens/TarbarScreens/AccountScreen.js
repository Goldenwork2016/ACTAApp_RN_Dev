import React, { Component } from 'react';
import { View, Text, Image, AppState, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

import config, { BASE_PATH } from "../../Api/config"

import NonImage from '../../Assets/Images/nopicture.png'

import { withNavigation } from "react-navigation";

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
    return (
      <View style={styles.container1}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={{ width: '100%' }}>
            <View style={styles.ImageBackground}>
              <View style={styles.header}>
                <View style={styles.BackBtn}>
                  <Image source={require('../../Assets/Images/HeaderImage.png')} resizeMode='stretch' style={styles.HeaderImage} />
                </View>
                <View style={styles.dropDown}>
                  <Text style={styles.headerTxt}>ACCOUNT</Text>
                </View>
                <TouchableOpacity style={styles.AlarmkBtn} onPress={() => { this.props.navigation.navigate("AccountSettingScreen") }}>
                  <Image source={require('../../Assets/Images/settingImage.png')} resizeMode='stretch' style={styles.notiImage} />
                </TouchableOpacity>
              </View>
              {/* <Image source={require('../../Assets/Images/nopicture.png')} resizeMode='stretch' style={styles.PersonProfileImage} /> */}
              <View style={styles.profileArea}>
                <Image source={{ uri: this.state.avatarSource.toString() }} resizeMode='cover' style={styles.PersonProfileImage} />
              </View>
              <Text style={styles.nameTxt}>{this.state.UserName}</Text>
              <View style={styles.headerContent}>
                <TouchableOpacity style={styles.ContentList2} onPress={() => this.props.navigation.navigate("AccountFollowingScreen", { ddd: true })}>
                  <Text style={styles.numTxt}>22</Text>
                  <Text style={styles.itemTxt}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ContentList2} onPress={() => this.props.navigation.navigate("AccountFollowingScreen", { ddd: false })}>
                  <Text style={styles.numTxt}>326</Text>
                  <Text style={styles.itemTxt}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.ContentList2, borderRightWidth: 0 }} onPress={() => this.props.navigation.navigate("AccountTraingenScreen")}>
                  <Text style={styles.numTxt}>48</Text>
                  <Text style={styles.itemTxt}>Workouts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ListBnt}>
                <View style={{ width: '100%' }}>
                  <TouchableOpacity style={styles.createBtn} onPress={() => this.props.navigation.navigate("FindFriendScreen")}>
                    <Text style={styles.CreateTxt}>Find Friends</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.Content}>
              <View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Achievements</Text>
                <View style={styles.AllArea}>
                  <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon} />
                  <Text style={styles.ConHeaderTxt1}>VIEW ALL</Text>
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
              <View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Progress Pics</Text>
                <View style={styles.AllArea}>
                  <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon} />
                  <Text style={styles.ConHeaderTxt1}>VIEW ALL</Text>
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
              <View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Weight</Text>
                <View style={styles.AllArea}>
                  <Text style={styles.ConHeaderTxt1}><Text style={{ fontSize: 25, marginTop: 5 }}>+</Text>  WEIGTH IN</Text>
                </View>
              </View>
              <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
              <View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Average Heart Rage</Text>
              </View>
              <Image source={require('../../Assets/Images/chartImage2.png')} resizeMode='stretch' style={styles.chartImage1} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(AccountScreen);