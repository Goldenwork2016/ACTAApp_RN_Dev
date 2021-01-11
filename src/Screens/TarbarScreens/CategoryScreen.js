import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import WorkoutsScreen from './workoutsScreen';
import {ThemeConstants} from '../../theme/themeConstants';
import {ThemeContext} from '../../App';


export default class ABSScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList1: [
        {
          Title: 'Standing Abs Exercise',
          ImageUrl: require("../../Assets/Images/CategoryVideo1.png")
        },
        {
          Title: 'Standing Abs Exercise with Towel',
          ImageUrl: require("../../Assets/Images/CategoryVideo2.png")
        },
        {
          Title: 'Standing Abs Exercise',
          ImageUrl: require("../../Assets/Images/CategoryVideo3.png")
        },
        {
          Title: 'Standing Abs Exercise with Towel',
          ImageUrl: require("../../Assets/Images/CategoryVideo4.png")
        },
        {
          Title: 'Standing Abs Exercise',
          ImageUrl: require("../../Assets/Images/CategoryVideo5.png")
        },
        {
          Title: 'Standing Abs Exercise with Towel',
          ImageUrl: require("../../Assets/Images/CategoryVideo6.png")
        },
        {
          Title: 'Standing Abs Exercise',
          ImageUrl: require("../../Assets/Images/CategoryVideo7.png")
        },
        {
          Title: 'Standing Abs Exercise with Towel',
          ImageUrl: require("../../Assets/Images/CategoryVideo8.png")
        }
      ]
    };
  }

  // componentDidMount(){
  //   this.setState({toggle:this.props.navigation.getParam("toogle")})
  // }

  // gotoDetailScreen = () => {
  //   this.props.navigation.navigate("ProgramWorkoutDetailScreen")
  // }

  // toggle = async () => {
  //   await this.setState({ toggleFlag: true });
  // }


  rendermakelist1 = ({ item }) => (
    <TouchableOpacity style={styles.ListContent1}>
      <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
      <Text style={styles.ListTitle}>{item.Title}</Text>
    </TouchableOpacity>
  )
  render() {
   let categoryData = this.props.navigation.getParam('item')
    return ( <ThemeContext.Consumer>
          {({ theme }) => (
      <View style={{...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
            <ScrollView style={{ flex: 1, width: '95%' }}>
            <View style={{ width: '100%'}}>
                  <View style={styles.header}>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => {this.props.navigation.goBack()}}>
                    {theme === "light" ?     
                     <Image source={require('../../Assets/Images/BackBtnBlack.png')} resizeMode='stretch' style={styles.HeaderImage} />
                    :  <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' style={styles.HeaderImage} />
                    }
                    </TouchableOpacity>
                    <View style={styles.dropDown}>
                      <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>{categoryData.Title}</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.mainContent}>
                <FlatList
                  vertical
                  showsVerticalScrollIndicator={true}
                  numColumns={1}
                  data={this.state.contentList1}
                  renderItem={this.rendermakelist1}
                  keyExtractor={item => `${item.id}`}
                />
              </View>
            </ScrollView>   
      </View>)}
          </ThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'black',
    width: '100%'
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
    paddingBottom: 27,
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
    height: 53,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  createBtn1: {
    width: "100%",
    height: 53,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,
  },
  createBtn2: {
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
    alignSelf: 'center'
  },
  CreateTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'black',
    fontSize: 22,
    textAlign: "center",
  },
  CreateTxt1: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 22,
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
    marginLeft: '3%',
    marginBottom: 20
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
    fontSize: 18,
    color: 'white',
    fontFamily: 'FuturaPT-Medium',
    width: '100%',
    paddingTop: 100,
    paddingLeft: 25
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
  LineStyle:{
    borderBottomColor: '#18171a',
    borderBottomWidth: 1,
    marginLeft: '5%',
    marginRight: '5%'
   }
})
