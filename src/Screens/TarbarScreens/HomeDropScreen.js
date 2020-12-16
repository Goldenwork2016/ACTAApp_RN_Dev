import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Animated, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen'

export default class HomeDropScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList1: [
        {
          Title: 'BUILD MUSCLE',
          ImageUrl: require("../../Assets/Images/program1.png")
        },
        {
          Title: 'LOOSE FAT',
          ImageUrl: require("../../Assets/Images/program2.png")
        },
        {
          Title: 'BOTH',
          ImageUrl: require("../../Assets/Images/program3.png")
        }
      ],
      SlideInLeft: new Animated.Value(1),
    };
  }

  _rendermakelist({ item }) {
    return (
      <View style={{ marginTop: 5 }}>
        <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage} />
      </View>
    )
  }

  AnimationsStart = () => {
    return Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };
  AnimationsEnd = () => {
    return Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };

  gotoProgramDetail=()=>{
    this.props.navigation.navigate("ProgramDetailScreen")
  }

  gotoExcercise=()=>{
    this.props.navigation.navigate("ExecicesScreen",{toogle:true})
  }

  CreateScreen =() =>{
    this.props.navigation.navigate("ProgramWorkoutDetailScreen",{toogle:false})
  }
  gotoReadyScreen = () => {
  this.props.navigation.navigate("ReadyScreen")
  }
  gotoDetailScreen = () => {
    this.props.navigation.navigate("ProgramWorkoutDetailScreen")
  }
  _rendermakelist1({ item }) {
    return (
      <View style={styles.ListContent1}>
        <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
        <Text style={styles.ListTitle}>{item.Title}</Text>
      </View>
    )
  }

  render() {
    let { SlideInLeft } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={{ width: '100%', height: 350, alignItems: 'center' }}>
            <View style={styles.header}>
              <View style={styles.BackBtn}>
                <Image source={require('../../Assets/Images/HeaderImage.png')} resizeMode='stretch' style={styles.HeaderImage} />
              </View>
              <TouchableOpacity style={styles.dropDown} onPress={() => this.AnimationsEnd()}>
                <Text style={styles.headerTxt}>BUILS MUSCLE</Text>
                <Image source={require('../../Assets/Images/upImage.png')} resizeMode='stretch' style={styles.UnderIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.AlarmkBtn} onPress={() => this.AnimationsEnd()}>
                <Image source={require('../../Assets/Images/closeImage.png')} resizeMode='stretch' style={styles.notiImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
              <Text style={styles.TileTxt}>YOUR</Text>
              <Text style={styles.TileTxt}>FITNESS</Text>
              <Text style={styles.TileTxt}>GOAL.</Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              numColumns={1}
              data={this.state.contentList1}
              renderItem={this._rendermakelist1}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        </ScrollView>
        <Animated.View
          style={{
            transform: [
              {
                translateY: SlideInLeft.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1000, 0]
                })
              }
            ],
            flex: 1,
            width: "100%",
            height:'100%',
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center",
            position:'absolute'
          }}
        >
          <HomeScreen AnimationsStart={this.AnimationsStart} CreateScreen={this.CreateScreen} gotoProgramDetail={this.gotoProgramDetail} gotoExcercise={this.gotoExcercise} gotoReadyScreen ={this.gotoReadyScreen}
          gotoDetailScreen ={this.gotoDetailScreen}/>
        </Animated.View>
      </View>
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
  header: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    width: "90%",
    alignItems: "center",
    paddingBottom: 41,
    borderBottomWidth: 0.2,
    borderBottomColor: '#82828f',

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
    left: 0
  },
  AlarmkBtn: {
    width: 26,
    height: 20,
    position: 'absolute',
    right: 0
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
    width: 80,
    height: 53,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width:'100%'
  },
  CreateTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'black',
    fontSize: 22
  },
  LoginTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 22,
    textAlign: "center"
  },
  TileTxt: {
    fontFamily: 'TrumpSoftPro-BoldItalic',
    color: 'white',
    fontSize: 65,
    textAlign: "center",
    marginTop: -15,
    lineHeight: 70
  },
  dropDown: {
    flexDirection: 'row',
    marginLeft: '10%'
  },
  notiNum: {
    textAlign: "center",
    fontSize: 12,
    color: 'black'
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
    marginTop: 25,
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
    marginRight: 10,
    letterSpacing: 2,
    textAlign: "center"
  },
  ContentImage: {
    width: 224,
    height: 224,
    marginRight: 20
  },
  ContentImage1: {
    width: "95%",
    height: 160,
    marginRight: 20,
    position: 'absolute'
  },
  ListTitle: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'TrumpSoftPro-BoldItalic',
    width: '100%',
    textAlign: "center",
    marginTop: 15
  },
  ListContent1: {
    marginTop: 5,
    width: "100%",
    height: 160,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AllArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  }
})
