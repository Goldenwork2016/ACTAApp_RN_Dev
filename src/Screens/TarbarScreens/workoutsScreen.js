import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import ExercicesSrcreen from './ExecicesScreen'
export default class ExercicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList1: [
        {
          Title: 'Fast & Furious',
          Description:'10 Exercices. 30 min',
          ImageUrl: require("../../Assets/Images/FastFuriousImage.png")
        },
        {
          Title: 'Buddy Workout',
          Description:'10 Exercices. 30 min',
          ImageUrl: require("../../Assets/Images/BuddyWorkoutImage.png")
        },
        {
          Title: 'Leg Workout',
          Description:'10 Exercices. 30 min',
          ImageUrl: require("../../Assets/Images/LegWorkoutImage.png")
        },
        {
          Title: 'Stretch a Leg',
          Description:'10 Exercices. 30 min',
          ImageUrl: require("../../Assets/Images/StretchLegImage.png")
        },
        {
          Title: 'Work it',
          Description:'10 Exercices. 30 min',
          ImageUrl: require("../../Assets/Images/WorkitImage.png")
        },
        {
          Title: 'Jumping Ropes',
          Description:'10 Exercices. 30 min',
          ImageUrl: require("../../Assets/Images/JumpingImage.png")
        },
      ],

    };
  }


  _rendermakelist1({ item }) {
    return (
      <TouchableOpacity style={styles.ListContent1} onPress={()=>this.props.toggle()}>
        <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
        <Text style={styles.ListTitle}>{item.Title}</Text>
        <Text style={styles.Description}>{item.Description}</Text>
      </TouchableOpacity>
    )
  }
  // gotoDetailScreen = () => {
  //   this.props.navigation.navigate("ProgramWorkoutDetailScreen")
  // }
  
  render() {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={{ width: '100%', height: 600 }}>
            <ImageBackground source={require('../../Assets/Images/HomeBackImage1.png')} resizeMode='cover' style={styles.ImageBackground}>
              <Image source={require('../../Assets/Images/AlphaImage.png')} resizeMode='stretch' style={styles.AlphaImage} />
              <View style={styles.header}>
                <View style={styles.BackBtn}>
                  <Image source={require('../../Assets/Images/HeaderImage.png')} resizeMode='stretch' style={styles.HeaderImage} />
                </View>
                <View style={styles.dropDown}>
                  <Text style={styles.headerTxt}>EXERCISES</Text>
                </View>
                <TouchableOpacity style={styles.AlarmkBtn}>
                  <Image source={require('../../Assets/Images/noti.png')} resizeMode='stretch' style={styles.notiImage} />
                  <View style={styles.notiNumArea}>
                    <Text style={styles.notiNum}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center' }}>
                <View style={{ width: '50%' }}>
                  <TouchableOpacity style={styles.createBtn1} onPress={()=>{this.props.toggle()}}>
                    <Text style={styles.CreateTxt1}>Programs</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '50%' }}>
                  <TouchableOpacity style={styles.createBtn} >
                    <Text style={styles.CreateTxt}>Workouts</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.mainContainer}>
                <Text style={styles.nextTxt}>Continue Workout</Text>
                <Text style={styles.TileTxt}>FAST & FURIOUS.</Text>
                <Text style={styles.minText}>Loose Fat fast and furious</Text>
                <TouchableOpacity style={styles.createBtn2}  onPress={()=>this.props.gotoDetailScreen()}>
                  <Text style={styles.CreateTxt}>Continus  Workout</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.AllArea}>
              <Text style={styles.ConHeaderTxt}>Workouts</Text>
              <View style={styles.AllArea}>
                <Text style={styles.ConHeaderTxt1}>LOOSE FAT</Text>
                <Image source={require('../../Assets/Images/UnderIcon.png')} resizeMode='stretch' style={styles.UnderIcon} />
              </View>
            </View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              numColumns={1}
              data={this.state.contentList1}
              renderItem={({item}) => (
                
                  <TouchableOpacity style={styles.ListContent1} onPress={()=>this.props.gotoDetailScreen()}>
                    <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
                    <Text style={styles.ListTitle}>{item.Title}</Text>
                    <Text style={styles.Description}>{item.Description}</Text>
                  </TouchableOpacity>
                
              )}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'black'
  },
  ImageBackground: {
    width: '100%',
    height: '100%'
  },
  UnderIcon: {
    width: 10,
    height: 7,
    alignSelf: "center",
    marginRight: 20
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
    marginLeft: 10,
    width: 25,
    height: 21
  },
  notiImage: {
    width: 22,
    height: 23
  },
  RightIcon: {
    width: 6,
    height: 10,
    marginRight: 10
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
  AlphaImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  PursueImage: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginBottom: 35
  },
  UnderIcon: {
    width: 10,
    height: 7,
    alignSelf: "center",
    marginLeft: 15
  },
  LoginImage: {
    width: 46,
    height: 19,
    alignSelf: "center"
  },
  createBtn: {
    width: "100%",
    height: 46,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  createBtn1: {
    width: "100%",
    height: 46,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  createBtn2: {
    width: 200,
    height: 46,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  CreateTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'black',
    fontSize: 18,
    textAlign: "center",
  },
  CreateTxt1: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 18,
    textAlign: "center",
  },
  LoginTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 22,
    textAlign: "center"
  },
  TileTxt: {
    fontFamily: 'TrumpSoftPro-BoldItalic',
    color: 'white', fontSize: 62,
    textAlign: "center",
    marginBottom: 5,
    lineHeight: 70
  },
  dropDown: {
    marginLeft: '10%'
  },
  notiNum: {
    textAlign: "center",
    fontSize: 12,
    color:'black'
  },
  notiNumArea: {
    backgroundColor: 'white',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    position: "absolute",
    top: -3,
    right: -3,
  },
  minText: {
    fontFamily: 'FuturaPT-Book',
    color: '#82828f',
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20
  },
  nextTxt: {
    fontFamily: 'FuturaPT-Book',
    textAlign: "center",
    color: 'white',
    fontSize: 18,
    marginBottom: 15
  },
  mainContent: {
    marginTop: 45,
    marginLeft: '3%'
  },
  ConHeaderTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 23,
    marginBottom: 15
  },
  ConHeaderTxt1: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 14,
    letterSpacing: 2,
    textAlign: "center"
  },
  ContentImage: {
    width: 224,
    height: 224,
    marginRight: 20
  },
  ContentImage1: {
    width: "97.5%",
    height: 390,
    marginRight: 20,
    position: 'absolute',
    borderRadius:3
  },
  ListTitle: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'FuturaPT-Medium',
    width: '100%',
    position:'absolute',
    bottom:48,
    left:30
  },
  Description: {
    fontSize: 22,
    color: '#82828f',
    fontFamily: 'FuturaPT-Book',
    width: '100%',
    position:'absolute',
    bottom:18,
    left:30
  },
  ListContent1: {
    marginTop: 5,
    width: "97.5%",
    height: 390,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AllArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginRight:5
  }
})
