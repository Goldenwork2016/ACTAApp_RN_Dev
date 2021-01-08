import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#111012',
  },
  pendingArea: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 17,
    borderColor: '#111012',
    marginBottom: 10
  },
  pendingArea1: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 10,
    borderColor: '#111012',
    marginBottom: 10
  },
  ImageFitCover: {
	  backgroundColor: 'white'
  },
  container1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#111012',
  },
  container2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#000',
  },
  ImageBackground: {
    width: '100%',
    // height: '100%'
  },
  ImageBackground1: {
    width: '100%',
    backgroundColor: 'black'
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
    paddingBottom: 37,
  },
  header1: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    width: "90%",
    alignItems: "center",
    paddingBottom: 41,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    borderColor: '#53535f'
  },
  header2: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    width: "90%",
    alignItems: "center",
    paddingBottom: 27,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    backgroundColor: 'black'
  },
  headerTxt: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'FuturaPT-Demi',
    letterSpacing: 1.5,
    alignSelf: 'center'
  },
  ListContent2: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 10,
    borderBottomWidth: 0.25,
    width: '95%',
    alignSelf: "center",
  
    borderColor: '#82828f'
  },
  ListContent5: {
    marginTop: 10,
    borderBottomWidth: 0.25,
    width: '90%',
    alignSelf: "center",
    paddingBottom: 3,
    borderColor: '#82828f'
  },
  QuitWorkout1: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    marginBottom: 40,
    alignSelf: 'center',
    marginTop: 30,
  },
  Dismiss1: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'FuturaPT-Medium',
  },
  followBtn: {
    width: 60,
    height: 30,
    position: 'absolute',
    right: 0,
    top: 5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'white'
  },
   unfollowBtn: {
    width: 60,
    height: 30,
    position: 'absolute',
    right: 0,
    top: 5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#18171a'
  },
  HeaderImage: {
    marginLeft: 10,
    width: 25,
    height: 21
  },
  AcceptTxt: {
    color: 'white',
    fontSize: 15,
    letterSpacing: 2,
    fontFamily: "FuturaPT-Medium"
  },
  PersonProfileImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 55,
  },
  profileArea: {
    borderRadius: 55,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor:'white'
  },
  HeaderImage1: {
    marginLeft: 10,
    width: 45,
    height: 45,
    borderRadius: 22.5
  },
  HeaderImage2: {
    width: 90,
    height: 90,
    borderRadius: 22.5,
    marginTop: -10
  },
  activityImage: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 22.5,
    marginRight: 30,
	backgroundColor: 'white',
	resizeMode: 'cover'
  },
  numberTxt: {
    fontFamily: 'TrumpSoftPro-BoldItalic',
    color: 'white',
    textAlign: 'center',
    fontSize: 110,
    width: '100%',
    marginTop: 45,
    marginBottom: 15
  },
  numberTxtWorkouts: {
    fontFamily: 'TrumpSoftPro-BoldItalic',
    color: 'white',
    textAlign: 'center',
    fontSize: 100,
    width: '100%',
    marginTop: 10
  },
  btnTxt: {
    color: 'white',
    fontFamily: 'FuturaPT-Book',
    fontSize: 13
  },
  SearchImage: {
    marginLeft: 10,
    width: 20,
    height: 20,
    marginRight: 10
  },
  HeartUnselectImage: {
    marginLeft: 10,
    width: 20,
    height: 15,
    borderRadius: 22.5,
  },
  desTxt: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'FuturaPT-Book',
 
  },
  desTxt1: {
    color: '#82828f',
    fontSize: 16,
    fontFamily: 'FuturaPT-Book',
    marginBottom: 10
  },
  likeArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%', alignSelf: 'center',
    borderBottomWidth: 0.3,
    borderColor: '#82828f',
    paddingBottom: 5
  },
  SendInputTxt: {
    width: '95%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingStart: 20,
    fontSize: 18,
    fontFamily: 'FuturaPT-Book'
  },
  sendBtn: {
    position: 'absolute',
    right: 25,
    top: 13,
  },
  sendBtnTxt: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 20
  },
  personArea: {
    flexDirection: 'row',
    alignSelf:
      'flex-start',
    marginTop: 10,
    width: '95%',
    alignSelf: "center",
    paddingBottom: 10,
  },
  personImage: {
    marginLeft: 3,
    width: 27,
    height: 27,
    borderRadius: 13.5
  },
  BtnImage: {
    width: 15,
    height: 15,
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
  RightIcon1: {
    width: 6,
    height: 10,
  },
  ListContent4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  BackBtn: {
    width: 26,
    height: 20,
    position: 'absolute',
    left: 10
  },
  EditImageBtn: {
    alignSelf: 'center',
    marginTop: -20,
    marginLeft: 55
  },
  EditImage: {
    width: 30,
    height: 30,
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
  nextTxt: {
    fontFamily: 'FuturaPT-Book',
    textAlign: "center",
    color: 'white',
    fontSize: 18,
    marginBottom: 15
  },
  mainContent: {
    alignItems: 'center',
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
  ListTitle1: {
    fontSize: 33,
    color: 'white',
    fontFamily: 'FuturaPT-Medium',
    width: '100%',
    position: 'absolute',
    bottom: 48,
    left: 30
  },
  Description: {
    fontSize: 18,
    color: '#767575',
    fontFamily: 'FuturaPT-Book',
    width: '100%',
    position: 'absolute',
    bottom: 18,
    left: 30
  },
  ListContent1: {
    marginTop: 5,
    width: "97.5%",
    height: 160,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ListContent3: {
    marginTop: 5,
    width: "100%",
    height: 390,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ContentImage2: {
    width: "97.5%",
    height: 390,
    marginRight: 20,
    position: 'absolute',
    borderRadius: 3
  },
  ConHeaderTxt5: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 27,
    marginBottom: 15
  },
  AllArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  AllArea2: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: "center",
  },
  AllArea1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 25,
    marginBottom: 5,
    width: '95%',
    alignSelf: 'center'
  },
  ListArea: {
    width: '100%',
    alignItems: 'center',
    marginTop: 12
  },
  listHeader: {
    width: '100%',
    borderRadius: 3,
    height: 85,
    backgroundColor: '#111012',
    flexDirection: 'row',
    alignItems: "center"
  },
  listHeader1: {
    width: '100%',
    borderRadius: 3,
    height: 85,
    backgroundColor: '#111012',
    alignItems: "center"
  },
  listHeader2: {
    width: '100%',
    borderRadius: 3,
    height: 170,
    backgroundColor: '#111012',
    alignItems: "center"
  },
  listContents: {
    marginTop: 1,
    width: '100%',
    borderRadius: 3,
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
    fontSize: 16
  },
  timeTxt1: {
    color: '#575763',
    fontFamily: 'FuturaPT-Book',
    fontSize: 15,
    marginLeft: 10
  },
  contentHeader: {
    fontFamily: 'FuturaPT-Demi',
    fontSize: 18,
    color: '#fff',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 5
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
    marginBottom: 40
  },
  numTxt: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'FuturaPT-Medium',
    textAlign: 'center'
  },
  itemTxt: {
    fontFamily: 'FuturaPT-Book',
    color: '#82828f',
    fontSize: 16,
    textAlign: 'center',
  },
  itemTxt1: {
    fontFamily: 'FuturaPT-Book',
    color: '#82828f',
    fontSize: 15,
    textAlign: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  headerContent1: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    paddingBottom: 30,
    marginTop: 15,
    borderColor: '#82828f'
  },
  ContentList2: {
    width: '33%',
    alignItems: "center",
    borderRightWidth: 0.2,
    borderColor: '#82828f'
  },
  ContentList3: {
    width: '33%',
    alignItems: "center",
  },
  BtbArea: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  nameTxt: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'FuturaPT-Medium',
    fontSize: 25,
    marginTop: 20
  },
  AllArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  RightIcon: {
    width: 6,
    height: 10,
    marginRight: 10
  },
  Content: {
    width: '100%',
    backgroundColor: 'black',
  },
  ImageArea: {
    width: "85%",
    height: 110,
    backgroundColor: '#111012',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 15
  },
  ImageArea1: {
    width: "85%",
    height: 150,
    backgroundColor: '#111012',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 15
  },
  ArchieveImage: {
    width: 35,
    height: 50
  },
  ArchieveImage1: {
    width: '100%',
    height: '100%'
  },
  chartImage1: {
    width: '90%',
    height: 210,
    alignSelf: 'center',

  },
  modalView: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Description1: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
    fontFamily: 'FuturaPT-Book'
  },
  TitleTxt1: {
    color: 'black',
    fontSize: 55,
    marginBottom: 25,
    fontFamily: 'TrumpSoftPro-BoldItalic',
    width: '100%',
    textAlign: "center"
  },
  Description2: {
    color: "black",
    fontSize: 23,
    marginBottom: 20,
    fontFamily: 'FuturaPT-Book'
  },
  QuitWorkout2: {
    width: 100,
    height: 45,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#18171A',
    borderColor: '#18171A'
  },
  Dismiss: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'FuturaPT-Medium'
  },
  like:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 25
  },
  countLike:{
    marginLeft: 13,
    color: 'white',
    fontFamily: 'FuturaPT-Book',
  },
   message:{
    color: '#575763',
    width: '80%',
    fontFamily: 'FuturaPT-Book',
    fontSize: 16,
    marginLeft: 15,
    lineHeight: 25,
  },
  completed:{
    color: '#575763',
    fontFamily: 'FuturaPT-Book',
    fontSize: 14,
    marginLeft: 7,
  },
  timeComplete:{
    color: 'white',
    fontFamily: 'FuturaPT-Book',
    fontSize: 14,
    marginLeft: 10,
  
  },
  TimeIcon:{
    marginLeft: 5,
    width: 15,
    height: 15
  },
  ViewMore:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 30,
    marginRight: 10,
    alignItems: 'center'
  },
    ConHeaderTxt1: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 12,
    marginRight: 10,
    letterSpacing: 2,
    textAlign: "center"
  }, 
    ConHeaderTxt: {
    fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    textAlign: "center"
  }, 
  ContentList6: {
    width: '33%',
    height: 45,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: '#1d1c1e'
  },
  LineStyle1:{
    borderBottomColor: '#0e0d0f',
    borderBottomWidth: 1,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 15,
    marginBottom: 10
   },
  LineStyle:{
    borderBottomColor: '#18171a',
    borderBottomWidth: 1,
    marginLeft: '5%',
    marginRight: '5%'
   },
  LineStyle2:{
    borderBottomColor: '#2d2c31',
    borderBottomWidth: 1,
    marginLeft: '15%',
    marginRight: '15%'
   },
  allProgramsButton:{
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#575763",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
     marginBottom: 20
  },
  modeText:{
   fontFamily: 'FuturaPT-Medium',
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 40,
    marginTop: 45
},
 modeBlock:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 13
  }
})