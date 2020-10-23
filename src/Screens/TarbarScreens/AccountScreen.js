import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../../styles'

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [
        {
          ImageUrl: require("../../Assets/Images/workout.png")
        },
        {
          ImageUrl: require("../../Assets/Images/workout.png")
        }
      ],
      contentList1: [
        {
          Title: 'SUMMER READY',
          ImageUrl: require("../../Assets/Images/program1.png")
        },
        {
          Title: 'KELLY WINTERS',
          ImageUrl: require("../../Assets/Images/program2.png")
        },
        {
          Title: 'COUPLE WORKOUT',
          ImageUrl: require("../../Assets/Images/program3.png")
        }
      ],

    };
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
                <TouchableOpacity style={styles.AlarmkBtn}>
                  <Image source={require('../../Assets/Images/settingImage.png')} resizeMode='stretch' style={styles.notiImage} />
                </TouchableOpacity>
              </View>
              <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.PersonProfileImage} />
              <Text style={styles.nameTxt}>Tom Arends</Text>
              <View style={styles.headerContent}>
                <View style={styles.ContentList2}>
                  <Text style={styles.numTxt}>22</Text>
                  <Text style={styles.itemTxt}>Following</Text>
                </View>
                <View style={styles.ContentList2}>
                  <Text style={styles.numTxt}>326</Text>
                  <Text style={styles.itemTxt}>Followers</Text>
                </View>
                <View style={{...styles.ContentList2, borderRightWidth:0}}>
                  <Text style={styles.numTxt}>48</Text>
                  <Text style={styles.itemTxt}>Workouts</Text>
                </View>
              </View>
              <View style={styles.ListBnt}>
                <View style={{ width: '100%' }}>
                  <TouchableOpacity style={styles.createBtn}>
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
                  <Text style={styles.ConHeaderTxt1}><Text style={{fontSize:25, marginTop:5}}>+</Text>  WEIGTH IN</Text>
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