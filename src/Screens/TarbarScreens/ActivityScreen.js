import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

export default class ActivityScreen extends Component {
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
      <View style={styles.container}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={{ width: '100%' }}>
            <View style={styles.ImageBackground}>
              <View style={styles.header}>
                <View style={styles.BackBtn}>
                  <Image source={require('../../Assets/Images/HeaderImage.png')} resizeMode='stretch' style={styles.HeaderImage} />
                </View>
                <View style={styles.dropDown}>
                  <Text style={styles.headerTxt}>ACTIVITY</Text>
                </View>
                <TouchableOpacity style={styles.AlarmkBtn}>
                  <Image source={require('../../Assets/Images/noti.png')} resizeMode='stretch' style={styles.notiImage} />
                  <Text style={styles.notiNum}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ListBnt}>
                <View style={{ width: '50%' }}>
                  <TouchableOpacity style={styles.createBtn}>
                    <Text style={styles.CreateTxt}>Following</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '50%' }}>
                  <TouchableOpacity style={styles.createBtn1}>
                    <Text style={styles.CreateTxt1}>You</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.ListArea}>
              <View style={styles.listHeader}>
                <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>Kelly Winters</Text>
                  <Text style={styles.timeTxt}>Today at 10:40</Text>
                </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>Flamin' Hot Cardio Circuit</Text>
                <View style={styles.contentBottom}>
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Text style={styles.timeTxt1}>24x keeppounding</Text>
                </View>
              </View>
              <View style={styles.BtbArea}>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/messageImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.ListArea}>
              <View style={styles.listHeader}>
                <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>Kelly Winters</Text>
                  <Text style={styles.timeTxt}>Today at 10:40</Text>
                </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>Flamin' Hot Cardio Circuit</Text>
                <View style={styles.contentBottom}>
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Text style={styles.timeTxt1}>24x keeppounding</Text>
                </View>
              </View>
              <View style={styles.BtbArea}>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/messageImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.ListArea}>
              <View style={styles.listHeader}>
                <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>Kelly Winters</Text>
                  <Text style={styles.timeTxt}>Today at 10:40</Text>
                </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>Flamin' Hot Cardio Circuit</Text>
                <View style={styles.contentBottom}>
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Text style={styles.timeTxt1}>24x keeppounding</Text>
                </View>
              </View>
              <View style={styles.BtbArea}>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/messageImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.ListArea}>
              <View style={styles.listHeader}>
                <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>Kelly Winters</Text>
                  <Text style={styles.timeTxt}>Today at 10:40</Text>
                </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>Flamin' Hot Cardio Circuit</Text>
                <View style={styles.contentBottom}>
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.personImage} />
                  <Text style={styles.timeTxt1}>24x keeppounding</Text>
                </View>
              </View>
              <View style={styles.BtbArea}>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '49.7%' }}>
                  <TouchableOpacity style={{...styles.createBtn1, backgroundColor:'#18171a'}}>
                    <Image source={require('../../Assets/Images/messageImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              numColumns={1}
              data={this.state.contentList1}
              renderItem={this._rendermakelist1}
              keyExtractor={item => `${item.id}`}
            /> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'black',
    paddingBottom:20
  },
  ImageBackground: {
    width: '100%',
    // height: '100%'
  },
  UnderIcon: {
    width: 10,
    height: 7,
    alignSelf: "center",
    marginRight: 10
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
    height: 25
  },
  HeaderImage1: {
    marginLeft: 10,
    width: 45,
    height: 45
  },
  personImage: {
    marginLeft: 3,
    width: 27,
    height: 27,
  },
  BtnImage: {
    marginLeft: 10,
    width: 35,
    height: 30,
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
  UnderIcon: {
    width: 10,
    height: 7,
    alignSelf: "center",
    marginLeft: 15
  },
  createBtn: {
    width: "98%",
    height: 51,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  createBtn1: {
    width: "100%",
    height: 53,
    backgroundColor: '#111012',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  CreateTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'black',
    fontSize: 20,
    textAlign: "center",
  },
  CreateTxt1: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 20,
    textAlign: "center",
  },
  dropDown: {
    marginLeft: '10%'
  },
  notiNum: {
    backgroundColor: 'white',
    textAlign: "center",
    fontSize: 12,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    position: "absolute",
    top: -3,
    right: -3,
  },
  nextTxt: {
    fontFamily: 'FuturaPT-Book',
    textAlign: "center",
    color: 'white',
    fontSize: 18,
    marginBottom: 15
  },
  mainContent: {
    alignItems: 'center'
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
    height: 160,
    marginRight: 20,
    position: 'absolute'
  },
  ListTitle: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'TrumpSoftPro-BoldItalic',
    width: '100%',
    textAlign: "center"
  },
  ListContent1: {
    marginTop: 5,
    width: "97.5%",
    height: 160,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AllArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginRight: 5
  },
  ListArea: {
    width: '95%',
    alignItems: 'center',
    marginTop:12
  },
  listHeader: {
    width: '100%',
    borderRadius: 3,
    height: 85,
    backgroundColor: '#111012',
    flexDirection: 'row',
    alignItems: "center"
  },
  listContents: {
    marginTop: 2,
    width: '100%',
    borderRadius: 3,
    height: 105,
    backgroundColor: '#18171a',
    justifyContent: "center"
  },
  proTxt: {
    color: 'white',
    fontFamily: 'FuturaPT-Book',
    fontSize: 18,
  },
  timeTxt: {
    color: '#575763',
    fontFamily: 'FuturaPT-Book',
    fontSize: 15
  },
  timeTxt1: {
    color: '#575763',
    fontFamily: 'FuturaPT-Book',
    fontSize: 15,
    marginLeft: 10
  },
  contentHeader: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
    marginBottom: 10
  },
  contentBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  ListBnt: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  BtbArea: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 3,
    alignSelf: 'center',
    justifyContent: 'space-between',
  }
})
