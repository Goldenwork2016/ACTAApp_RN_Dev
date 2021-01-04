import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import CategoryScreen from './CategoryScreen'
import WorkoutsScreen from './workoutsScreen';


export default class ExercicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList1: [
        {
          Title: 'ABS',
          ImageUrl: require("../../Assets/Images/program_11_execises.png")
        },
        {
          Title: 'QUADS',
          ImageUrl: require("../../Assets/Images/program_10_execises.png")
        },
        {
          Title: 'HAMSTRINGS',
          ImageUrl: require("../../Assets/Images/program_9_execises.png")
        },
        {
          Title: 'CALVES',
          ImageUrl: require("../../Assets/Images/program_8_execises.png")
        },
        {
          Title: 'TRICEPS',
          ImageUrl: require("../../Assets/Images/program_7_execises.png")
        },
        {
          Title: 'BICEPS',
          ImageUrl: require("../../Assets/Images/program_6_execises.png")
        },
        {
          Title: 'SHOULDERS',
          ImageUrl: require("../../Assets/Images/program_5_execises.png")
        },
        {
          Title: 'PECTORALS',
          ImageUrl: require("../../Assets/Images/program_4_execises.png")
        },
        {
          Title: 'LATS',
          ImageUrl: require("../../Assets/Images/program_3_execises.png")
        },
        {
          Title: 'BACK',
          ImageUrl: require("../../Assets/Images/program_2_execises.png")
        },
        {
          Title: 'GLUTES',
          ImageUrl: require("../../Assets/Images/program_1_execises.png")
        }
      ],
       toggleFlag: true,
       abs: true, 
       data: {}
    };
  }

  componentDidMount(){
    this.setState({toggle:this.props.navigation.getParam("toogle")})
  }

  toggle = async () => {
    await this.setState({ toggleFlag: true });
  }
  goBack =()=>{
    this.setState({abs: true})
  }
   /*this.props.navigation.navigate("ProgramDetailScreen") */
  rendermakelist1 = ({ item }) => (
    <TouchableOpacity style={styles.ListContent1} onPress={() =>{this.props.navigation.navigate('CategoryScreen', {item})}}>
      <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
      <Text style={styles.ListTitle}>{item.Title}</Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
         {/*this.state.toggleFlag ? */} 
          {/*this.state.abs ?*/} 
            <ScrollView style={{ flex: 1, width: '100%' }}>
              <View style={{ width: '100%', height: 220 }}>
                  <View style={styles.header}>
                    <View style={styles.BackBtn}>
                      <Image source={require('../../Assets/Images/HeaderImage.png')} resizeMode='stretch' style={styles.HeaderImage} />
                    </View>
                    <View style={styles.dropDown}>
                      <Text style={styles.headerTxt}>EXERCISES</Text>
                    </View>
                    <TouchableOpacity style={styles.AlarmkBtn} onPress = {()=>{this.props.navigation.navigate('NotificationScreen')}}>
                      <Image source={require('../../Assets/Images/noti.png')} resizeMode='stretch' style={styles.notiImage} />
                      <View style={styles.notiNumArea}>
                        <Text style={styles.notiNum}>3</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.LineStyle}/>
                  <View style={styles.mainContainer}>
                   <Text style={styles.TileTxt}>EXERCISES</Text>
                    <Text style={styles.minText}>Learn how to perform exercises by muscle group</Text>
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
           {/*: <CategoryScreen goBack ={this.goBack} title = {this.state.data.Title}/>*/}
      </View>
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
    marginTop: 15,
    marginBottom: 30,
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
    marginBottom: 7,
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
