import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import WorkoutsScreen from './workoutsScreen';
import ProgressStatus from './Components/ProgressStatus';
import SocialActivities from './Components/SocialActivities'



export default class HomeScreen extends Component {
  constructor(props){
    super(props)
    window.render.add('programs', ()=>{
      this.setState({reload: false});
    });
  }
  state = {
    exercise:  window.exercise.exercise,
    exercises: window.exercise.exercises,
    workouts: [],
    programs:  window.program.programs,
    modalVisible: false,
    reload: true,
    toggleFlag: true,
    start: false
  }

  // componentDidMount(){
  // //  fetch('https://acta.webart.work/api/exercise/get', {
  // //   method: "GET"
  // // }).then(resp=>resp.json()).then(resp=>{
  // //   if(resp.body.length) this.setState({exercise: resp.body.shift()});
  // //   if(resp.body.length) this.setState({exercises: resp.body});
  // // });
  // }
    toggle = async () => {
    await this.setState({ toggleFlag: true });
  }
  _rendermakelist({ item, index }) {
    return (
      <View style={{ marginTop: 5, position: 'relative'}}>
      <Image source={{
        uri: 'https://acta.webart.work'+item.thumb
      }} resizeMode="stretch" style={styles.ContentImage} />
      <Text style={styles.imgTxt1}>{item.name}</Text>
      <Text style={styles.imgTxt2}>{item.details}</Text>
      </View>
      )
    }
    render() {
      return (
        <View style={styles.container}>
          { this.state.toggleFlag ?
        <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={{ width: '100%', height: 520 }}>
        { this.state.exercise && 
          <ImageBackground source={require('../../Assets/Images/HomeBackImage1.png')}style={styles.ImageBackground}>
          <Image source={require('../../Assets/Images/AlphaImage.png')} resizeMode='stretch' style={styles.AlphaImage} />
          <View style={styles.header}>
          <View style={styles.BackBtn}>
          <Image source={require('../../Assets/Images/HeaderImage.png')} resizeMode='stretch' style={styles.HeaderImage} />
          </View>


          {/*<TouchableOpacity style={styles.dropDown} onPress={() => this.props.AnimationsStart()}>
          <Text style={styles.headerTxt}>BUILS MUSCLE</Text>
          <Image source={require('../../Assets/Images/UnderIcon.png')} resizeMode='stretch' style={styles.UnderIcon} />
        </TouchableOpacity>*/}

        <View style={styles.dropDown}>
        <Text  style={styles.headerTxt}>DASHBOARD</Text>
        </View>
        <TouchableOpacity  style={styles.AlarmkBtn}>
        <Image source={require('../../Assets/Images/noti.png')} resizeMode='stretch' style={styles.notiImage} />
        <View style={styles.notiNumArea}>
        <Text style={styles.notiNum}>3</Text>
        </View>
        </TouchableOpacity>
      <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center',  marginTop: 30}}>
      <View style={{ width: '50%' }}>
      <TouchableOpacity style={styles.createBtnPrograms} onPress={() => { this.setState({ toggleFlag: true }) }}>
      <Text style={styles.createTxtPrograms}>Program</Text>
      </TouchableOpacity>
      </View>
      <View style={{ width: '63%' }}>
      <TouchableOpacity style={styles.createBtnWorkouts} onPress={() => { this.setState({ toggleFlag: false }) }}>
      <Text style={styles.CreateTxtWorkouts}>Workouts</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      <View  style={styles.mainContainer}>
      {!this.state.start ? <Text style={styles.nextTxt}>Start your first program</Text>
       : <Text style={styles.nextTxt}>Your current program</Text>}


    {/* <Text style={styles.TileTxt}>{this.state.exercise.name}</Text>
         <Text style={styles.minText}>{this.state.exercise.details}</Text>*/}
      
      <Text style={styles.TileTxt}>FAST & FURIOUS.</Text>

    {this.state.start ? <ProgressStatus/> : <Text></Text>}
      <View style ={styles.mainButton}>
        <TouchableOpacity style={styles.createBtn} onPress={() =>{this.setState({start: true})}}>
         {!this.state.start? <Text style={styles.CreateTxt}>Start</Text> : <Text style={styles.CreateTxt} onPress={() => this.props.gotoReadyScreen()}>Continue</Text>}
        </TouchableOpacity>
        <View>
         <Image source={require('../../Assets/Images/Mask.png')} resizeMode='stretch' style={styles.infoImage} alt="Help"/>
        </View>
      </View>
    </View>
    </ImageBackground>
  }
  </View>

  <View style={styles.mainContent}>
<TouchableOpacity style={styles.allProgramsButton} onPress={() => this.props.gotoExcercise()}>
<Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon}/>
<Text style={styles.ConHeaderTxt1}> ALL PROGRAMS</Text>
</TouchableOpacity>
<View style={styles.mainContent}>

<View style ={styles.headerQuickWorkouts}>
<Text style={styles.ConHeaderTxt}>Quick workouts</Text>
<TouchableOpacity style={styles.Categories} onPress={() => this.props.AnimationsStart()}>
<Text style={styles.headerTxt}>CATEGORIES</Text>
<Image source={require('../../Assets/Images/UnderIcon.png')} resizeMode='stretch' style={styles.UnderIcon} />
</TouchableOpacity>
</View>
<FlatList
horizontal
// showsVerticalScrollIndicator={true}
numColumns={1}
data={this.state.exercises}
renderItem={this._rendermakelist}
keyExtractor={item => `${item.id}`}
/>
</View>

{/*<FlatList
  vertical
  showsVerticalScrollIndicator={true}
  numColumns={1}
  data={this.state.programs}
  renderItem={({ item }) => (
  <TouchableOpacity style={styles.ListContent1} onPress={() => this.props.gotoProgramDetail()}>
  <Image source={{
   uri: 'https://acta.webart.work'+item.thumb
 }} resizeMode="stretch" style={styles.ContentImage1} />
 <Text style={styles.ListTitle}>{item.name}</Text>
 </TouchableOpacity>
 )}
 keyExtractor={item => `${item.id}`}
/>*/}
</View>


<View style ={styles.mainContent, styles.Social}>
  <Text style ={styles.ConHeaderTxt}>Social Activities</Text>
  {!this.state.start ? <View style={styles.socialActivitiesBody}>
        <Image source={require('../../Assets/Images/ProjectIcon.png')} resizeMode='stretch' style={styles.HeaderImageSocial} />
      <TouchableOpacity style={styles.socialActvitiesRightBlock}>
        <Text style={styles.socialActivitiesText}>
          Find and follow friends and athletes to see their social activities here
          <Text>  </Text>
         <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon}/>  
          </Text>
       </TouchableOpacity>
  </View> : <SocialActivities />}
</View> 
</ScrollView> :  <WorkoutsScreen toggle={this.toggle} gotoDetailScreen ={this.props.gotoDetailScreen} />}
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
  header_button:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 25,
    alignItems: "center",
    paddingTop: 65
  },
  notiImage: {
    width: 22,
    height: 23
  },
  RightIcon: {
    width: 5,
    height: 9,
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
    color: '#4e4e59',
    height: 7,
    alignSelf: 'center',
    marginLeft: 8
  },
  LoginImage: {
    width: 46,
    height: 19,
    alignSelf: "center"
  },
  createBtn: {
    width: 100,
    height: 45,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 3,

  },
  createBtnPrograms:{
   width: "100%",
   height: 46,
   backgroundColor: 'white',
   justifyContent: "center",
   alignItems: "center",
   alignSelf: 'center',
   borderRadius: 3,
 },
 createBtnWorkouts:{
   width: "100%",
   height: 46,
   backgroundColor: 'rgba(255,255,255,0.2)',
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
mainButton:{
  marginLeft: 55,
  flexDirection: 'row',
  alignSelf: 'center'
},
infoImage:{ 
  marginLeft: 20,
  marginTop: 13
},
CreateTxt: {
  fontFamily: 'FuturaPT-Medium',
  color: 'black',
  fontSize: 20
},
createTxtPrograms:{
  fontFamily: 'FuturaPT-Medium',
  color: 'black',
  fontSize: 18,
  textAlign: "center",
},
CreateTxtWorkouts:{
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
  color: 'white', 
  fontSize: 62,
  textAlign: "center",
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
imgTxt1: {
  fontFamily: 'FuturaPT-Book',
  textAlign: "center",
  color: 'white',
  fontSize: 18,
  marginBottom: 15,
  position: 'absolute',
  bottom: 30,
  fontWeight: 'bold',
  textShadowColor: 'rgba(0, 0, 0, 0.4)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 3,
  left: 10
},
imgTxt2: {
  fontFamily: 'FuturaPT-Book',
  textAlign: "center",
  color: '#777',
  fontSize: 18,
  marginBottom: 15,
  position: 'absolute',
  bottom: 10,
  left: 10,
  textShadowColor: 'rgba(0, 0, 0, 0.4)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 3,
},
mainContent: {
   marginTop: 25,
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
  letterSpacing: 2
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
  textAlign: "center"
},
ListContent1: {
  marginTop: 5,
  width: "100%",
  height: 160,
  marginBottom: 10,
  justifyContent: 'center',
  alignItems: 'center'
},

allProgramsButton:{
  flex: 1,
  flexDirection: 'row',
  paddingTop: 15,
  paddingBottom: 15,
  marginRight: 15,
  borderColor: "#232327",
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
headerQuickWorkouts:{
  flex:1,
  flexDirection:'row',
  justifyContent: 'space-between',
  marginRight: 15
},
Categories:{
  flexDirection: 'row',
  height: 20,
  marginTop: 8,
},
Social:{
  marginTop: 45,
  marginLeft: '6%',
  marginRight: '3%',
},
HeaderImageSocial:{
   
    marginTop: 10,
    marginRight: 20
},
socialActivitiesBody:{
  flexDirection: 'row', 
  justifyContent: 'center',
  backgroundColor: '#111012',
  padding: 30,
  marginBottom: 20
},
socialActvitiesRightBlock:{
  flexDirection: 'row',
},
socialActivitiesText:{
  width: '85%',
  fontFamily: 'FuturaPT-Medium',
  color: 'white',
  fontSize: 18,
  lineHeight: 25
}
})
