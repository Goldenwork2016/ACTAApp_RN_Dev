import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../../styles'

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
      <View style={{...styles.container, backgroundColor:'black'}}>
        <ScrollView style={{ flex: 1, width: '100%'}}>
          <View style={{ width: '100%' }}>
            <View style={styles.ImageBackground}>
              <View style={styles.header}>
                <View style={styles.BackBtn}>
                  <Image source={require('../../Assets/Images/HeaderImage.png')} resizeMode='stretch' style={styles.HeaderImage} />
                </View>
                <View style={styles.dropDown}>
                  <Text style={styles.headerTxt}>ACTIVITY</Text>
                </View>
                <TouchableOpacity style={styles.AlarmkBtn} onPress={()=>this.props.navigation.navigate("NotificationScreen")}>
                  <Image source={require('../../Assets/Images/noti.png')} resizeMode='stretch' style={styles.notiImage} />
                  <View style={styles.notiNumArea}>
                    <Text style={styles.notiNum}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.LineStyle}/>
              <View style={{marginTop: 35}}>
                   <Text style={activity_styles.TileTxt}>YOUR</Text>
                     <Text style={activity_styles.TileTxt}>PROGRESS</Text>
              </View>
              <View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Weight</Text>
                <View style={styles.AllArea}>
                  <Text style={styles.ConHeaderTxt1}>
                  <Text style={{fontSize: 20}}>+</Text> WEIGTH IN</Text>
                </View>
              </View>
              <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
              <View style={styles.AllArea1}>
                <Text style={styles.ConHeaderTxt}>Average Heart Rage</Text>
              </View>
              <Image source={require('../../Assets/Images/chartImage2.png')} resizeMode='stretch' style={styles.chartImage1} />
               <View>
                 <View style={styles.AllArea1}>
                  <Text style={styles.ConHeaderTxt}>Squats</Text>
                  <View style={styles.AllArea}>
                    <Text style={styles.ConHeaderTxt1}>
                    <Text style={{fontSize: 20}}>+</Text> NEW DATA</Text>
                  </View>
                </View>
                <View style ={activity_styles.progressWorkout}>
                   <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
                        <View style={styles.LineStyle2}/>
                    <View style={activity_styles.progressInfo}>
                      <View style={activity_styles.progressInfoLeft}>
                        <Text style={activity_styles.mainNumber}>455</Text>
                        <Text style={activity_styles.mainText}>LBS</Text>
                        <View>
                        <Text style={activity_styles.textSub}>PR</Text>
                        </View>
                      </View>
                      <View style={activity_styles.progressInfoRight}>
                        <Text style={activity_styles.mainNumber}>10</Text>
                        <Text style={activity_styles.mainText}>REPS</Text>
                      </View>
                    </View>
                       <Text style={activity_styles.Date}>12 December, 2020</Text>
                </View>
              </View>
              <View>
                 <View style={styles.AllArea1}>
                  <Text style={styles.ConHeaderTxt}>Hip Thrust</Text>
                  <View style={styles.AllArea}>
                    <Text style={styles.ConHeaderTxt1}>
                    <Text style={{fontSize: 20}}>+</Text> NEW DATA</Text>
                  </View>
                </View>
                <View style ={activity_styles.progressWorkout}>
                   <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
                        <View style={styles.LineStyle2}/>
                    <View style={activity_styles.progressInfo}>
                      <View style={activity_styles.progressInfoLeft}>
                        <Text style={activity_styles.mainNumber}>455</Text>
                        <Text style={activity_styles.mainText}>LBS</Text>
                        <View>
                        <Text style={activity_styles.textSub}>PR</Text>
                        </View>
                      </View>
                      <View style={activity_styles.progressInfoRight}>
                        <Text style={activity_styles.mainNumber}>10</Text>
                        <Text style={activity_styles.mainText}>REPS</Text>
                      </View>
                    </View>
                      <Text style={activity_styles.Date}>12 December, 2020</Text>
                </View>
              </View>
               <View>
                 <View style={styles.AllArea1}>
                  <Text style={styles.ConHeaderTxt}>Bench Press</Text>
                  <View style={styles.AllArea}>
                    <Text style={styles.ConHeaderTxt1}>
                    <Text style={{fontSize: 20}}>+</Text> NEW DATA</Text>
                  </View>
                </View>
                <View style ={activity_styles.progressWorkout}>
                   <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
                        <View style={styles.LineStyle2}/>
                    <View style={activity_styles.progressInfo}>
                      <View style={activity_styles.progressInfoLeft}>
                        <Text style={activity_styles.mainNumber}>455</Text>
                        <Text style={activity_styles.mainText}>LBS</Text>
                        <View>
                        <Text style={activity_styles.textSub}>PR</Text>
                        </View>
                      </View>
                      <View style={activity_styles.progressInfoRight}>
                        <Text style={activity_styles.mainNumber}>10</Text>
                        <Text style={activity_styles.mainText}>REPS</Text>
                      </View>
                    </View>
                      <Text style={activity_styles.Date}>12 December, 2020</Text>
                </View>
              </View>
               <View>
                 <View style={styles.AllArea1}>
                  <Text style={styles.ConHeaderTxt}>Stair Stepper</Text>
                  <View style={styles.AllArea}>
                    <Text style={styles.ConHeaderTxt1}>
                    <Text style={{fontSize: 20}}>+</Text> NEW DATA</Text>
                  </View>
                </View>
                <View style ={{...activity_styles.progressWorkout, marginBottom: 25}}>
                   <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
                        <View style={styles.LineStyle2}/>
                    <View style={activity_styles.progressInfo}>
                      <View style={activity_styles.progressInfoLeft}>
                        <Text style={activity_styles.mainNumber}>26</Text>
                        <Text style={activity_styles.mainText}>MIN</Text>
                        <View>
                        <Text style={activity_styles.textSub}>PR</Text>
                        </View>
                      </View>
                      <View style={activity_styles.progressInfoRight}>
                        <Text style={activity_styles.mainNumber}>265</Text>
                        <Text style={activity_styles.mainText}>STEPS</Text>
                      </View>
                    </View>
                      <Text style={activity_styles.Date}>12 December, 2020</Text>
                </View>
              </View>
             {/* <View style={styles.ListBnt}>
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
              </View>*/}
            </View>
          </View>
       {/* <View style={styles.mainContent}>
             <TouchableOpacity style={styles.ListArea} onPress={()=>this.props.navigation.navigate("ActivityDetailScreen")}>
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
                  <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson4.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson3.jpg')} resizeMode='stretch' style={styles.personImage} />
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
            </TouchableOpacity>
            <View style={styles.ListArea}>
              <View style={styles.listHeader}>
                <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>Kelly Winters</Text>
                  <Text style={styles.timeTxt}>Today at 10:40</Text>
                </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>Flamin' Hot Cardio Circuit</Text>
                <View style={styles.contentBottom}>
                  <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson3.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson4.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
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
                <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>Kelly Winters</Text>
                  <Text style={styles.timeTxt}>Today at 10:40</Text>
                </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>Flamin' Hot Cardio Circuit</Text>
                <View style={styles.contentBottom}>
                  <Image source={require('../../Assets/Images/favPerson4.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson3.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.personImage} />
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
                  <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson3.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson4.jpg')} resizeMode='stretch' style={styles.personImage} />
                  <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
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
            <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              numColumns={1}
              data={this.state.contentList1}
              renderItem={this._rendermakelist1}
              keyExtractor={item => `${item.id}`}
            /> 
          </View>*/}
        </ScrollView>
      </View>
    );
  }
}

const activity_styles = StyleSheet.create({
    TileTxt: {
      fontFamily: 'TrumpSoftPro-BoldItalic',
      color: 'white', 
      fontSize: 60,
      textAlign: "center",
      marginBottom: -10,
      lineHeight: 60
  },
  progressWorkout:{
    backgroundColor: '#18171a',
    marginLeft: 20,
    marginRight: 20,   
    paddingBottom: 17
  },
  progressInfo:{
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 45,
  },
  progressInfoLeft:{
    borderRightWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    paddingRight: 15
  },
  progressInfoRight:{
    flexDirection: 'row',
    paddingLeft: 7
  },
  Date:{
    marginLeft: 55,
    color: '#81818e',
    fontSize: 12,
    fontFamily: 'FuturaPT-Book'
  },
  mainNumber:{
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 28,
    marginLeft: 10,
    textAlign: "center"
  },
  mainText:{
    fontFamily: 'FuturaPT-Medium',
    letterSpacing: 1.5,
    color: 'white',
    fontSize: 13,
    marginTop: 10,
    marginLeft: 8,
    textAlign: "center"
  },
  textSub:{
    fontFamily: 'FuturaPT-Medium',
    fontWeight: 'bold',
    backgroundColor: '#d8d8d8',
    borderRadius: 8,
    width: 20,
    color: '#2d2c2f',
    fontSize: 10,
    marginLeft: 8,
    lineHeight: 13,
    textAlign: "center"
  }
});

