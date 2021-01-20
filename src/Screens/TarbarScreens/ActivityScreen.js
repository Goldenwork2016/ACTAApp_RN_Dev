import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../../styles';
import {ThemeConstants} from '../../theme/themeConstants'
import {ThemeContext} from '../../App'

export default class ActivityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [
        {
          title : "Squats",
          ImageUrl: require("../../Assets/Images/chartImage1.png"),
          date: '12 December, 2020',
          details: '10 REPS',
          progress: '455 LBS'
        },
        {
          title : "Hip Trust",
          ImageUrl: require("../../Assets/Images/chartImage1.png"),
          date: '12 December, 2020',
          details: '10 REPS',
          progress: '455 LBS'
        },
         {
          title : "Bench Press",
          ImageUrl: require("../../Assets/Images/chartImage1.png"),
          date: '12 December, 2020',
          details: '10 REPS',
          progress: '455 LBS'
        },
         {
          title : "Stair Stepper",
          ImageUrl: require("../../Assets/Images/chartImage1.png"),
          date: '12 December, 2020',
          details: '265 STEPS',
          progress: '26 MIN'
        }
      ]
    };
  }

  _rendermakelist({ item, index }) {
    return ( <ThemeContext.Consumer>
          {({ theme }) => (
      <View>
        <View>
            <View style={styles.AllArea1}>
              <Text style={{...styles.ConHeaderTxt, color: ThemeConstants[theme].textColorDescription}}>{item.title}</Text>
              <View style={styles.AllArea}>
                <Text style={{...styles.ConHeaderTxt1,color: ThemeConstants[theme].textColorDescription}}>
                <Text style={{fontSize: 20}}>+</Text> NEW DATA</Text>
              </View>
            </View>
          <View style ={activity_styles.progressWorkout}>
          <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
            <View style={styles.LineStyle2}/>
              <View style={activity_styles.progressInfo}>
                <View style={activity_styles.progressInfoLeft}>
                  <Text style={activity_styles.mainNumber}>{item.progress}</Text>
                {/*  <Text style={activity_styles.mainText}>LBS</Text>*/}
                  <View>
                    <Text style={activity_styles.textSub}>PR</Text>
                  </View>
                </View>
                <View style={activity_styles.progressInfoRight}>
                  <Text style={activity_styles.mainNumber}>{item.details}</Text>
              {/*    <Text style={activity_styles.mainText}>REPS</Text>*/}
                </View>
              </View>
            <Text style={activity_styles.Date}>{item.date}</Text>
          </View>
        </View>
      </View>
         )}
 </ThemeContext.Consumer>
    )
  }

  render() {
    return ( <ThemeContext.Consumer>
          {({ theme }) => (
      <View style={{...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
        <ScrollView style={{ flex: 1, width: '100%'}}>
          <View style={{ width: '100%' }}>
            <View style={styles.ImageBackground}>
              <View style={styles.header}>
                <View style={styles.BackBtn}>
                { theme === 'light' ? <Image source={require('../../Assets/Images/iconBlack.png')} resizeMode='stretch' style={styles.HeaderImage} />
                  : <Image source={require('../../Assets/Images/iconWhite.png')} resizeMode='stretch' style={styles.HeaderImage} />
                }
                </View>
                <View style={styles.dropDown}>
                  <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>ACTIVITY</Text>
                </View>
                <TouchableOpacity style={styles.AlarmkBtn} onPress={()=>this.props.navigation.navigate("NotificationScreen")}>
                 {theme === 'light' 
                    ? <Image source={require('../../Assets/Images/notification_Black.png')} resizeMode='stretch' style={styles.notiImage} />
                    :
                  <Image source={require('../../Assets/Images/noti.png')} resizeMode='stretch' style={styles.notiImage} />
                }
                  <View style={{...styles.notiNumArea, backgroundColor: ThemeConstants[theme].textColorTitle}}>
                    <Text style={{...styles.notiNum, color: ThemeConstants[theme].backgroundColor}}>{window.us.users.filter(window.us.new_followers).length}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.LineStyle}/>
              <View style={{marginTop: 35}}>
                   <Text style={{...activity_styles.TileTxt, color: ThemeConstants[theme].textColorDescription}}>YOUR</Text>
                     <Text style={{...activity_styles.TileTxt, color: ThemeConstants[theme].textColorDescription}}>PROGRESS</Text>
              </View>
              <View style={styles.AllArea1}>
                <Text style={{...styles.ConHeaderTxt,  color: ThemeConstants[theme].textColorDescription}}>Weight</Text>
                <View style={styles.AllArea}>
                  <Text style={{...styles.ConHeaderTxt1, color: ThemeConstants[theme].textColorDescription}}>
                  <Text style={{fontSize: 20}}>+</Text> WEIGTH IN</Text>
                </View>
              </View>
              <Image source={require('../../Assets/Images/chartImage1.png')} resizeMode='stretch' style={styles.chartImage1} />
              <View style={styles.AllArea1}>
                <Text style={{...styles.ConHeaderTxt, color: ThemeConstants[theme].textColorDescription}}>Average Heart Rage</Text>
              </View>
              <Image source={require('../../Assets/Images/chartImage2.png')} resizeMode='stretch' style={styles.chartImage1} />
              {/* <View>
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
                        <Text style={activity_styles.mainText}>10 REPS</Text>
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
              </View>*/}
            </View>
          </View>
          <View style={{marginTop: 0, marginBottom: 40}}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              numColumns={1}
              data={this.state.contentList}
              renderItem={this._rendermakelist}
              keyExtractor={item => `${item.id}`}
            /> 
            </View>
        </ScrollView>
      </View>
    )}
 </ThemeContext.Consumer>);
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
    fontSize: 18,
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
    borderRadius: 8,

    fontFamily: 'FuturaPT-Medium',
    fontWeight: 'bold',
    backgroundColor: '#d8d8d8',    width: 20,
    color: '#2d2c2f',
    fontSize: 10,
    marginLeft: 8,
    lineHeight: 13,
    textAlign: "center"
  }
});

