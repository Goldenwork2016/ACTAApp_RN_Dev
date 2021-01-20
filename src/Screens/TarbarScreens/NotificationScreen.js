import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';

import {ThemeConstants} from '../../theme/themeConstants';
import {ThemeContext} from '../../App';

export default class ActivityScreen extends Component {
      constructor(props) {
        super(props);
        window.render.add('users', ()=>{
            this.setState({reload: !this.state.reload});
        });
    }
    state ={
        reload: true,
        users: window.us.users
    }
  // componentdidUpdate(prevProps, prevState){
  //     if (this.state.users.length !== prevState.users.length) {
  //           console.log('work')
  //       }
  // }
    // _rendermakelist({ item, index }) {
    //     return (
    //         <View style={styles.ListContent1}>
    //             <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
    //             <Text style={styles.ListTitle}>{item.Title}</Text>
    //         </View>
    //     )
    // }

    render() {
        let {users} = this.state;
        return ( <ThemeContext.Consumer>
          {({ theme }) => (
            <View style={{ ...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground}>
                            <View style={styles.header}>
                                <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                {theme === 'light' ?  <Image source={require('../../Assets/Images/BackBtnBlack.png')} resizeMode='stretch' />
                                : <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                }
                                </TouchableOpacity>
                                <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>NOTIFICATIONS</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.pendingArea}>
                        <Text style={styles.timeTxt}>Pending following requests</Text>
                        <Text style={styles.timeTxt}>{window.us.users.filter(window.us.new_followers).length}</Text>
                    </View>
                    <View style={styles.mainContent}>
                        {window.us.users.filter(window.us.new_followers).map(user=>{
                            return (
                                <View style={styles.ListArea}>
                                    <View style={{...styles.listHeader, backgroundColor: ThemeConstants[theme].backgroundColorActivity}}>
                                        <Image source={{
                                            uri: 'https://acta.webart.work'+user.avatarUrl
                                            }} resizeMode='stretch' style={styles.HeaderImage1} />
                                        <View style={{ marginLeft: 15 }}>
                                            <Text style={{...styles.proTxt, color: ThemeConstants[theme].textColorTitle}}>{user.name}</Text>
                                            <Text style={{...styles.timeTxt, color: ThemeConstants[theme].textColorDescription}}>{user.data.address||''}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.BtbArea}>
                                        <View style={{ width: '49.7%' }}>
                                            <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: ThemeConstants[theme].inputColor}} onPress={()=>{window.us.data.follow[user._id]=true; window.us.update(); this.setState({reload: this.state.reload}) }}>
                                                <Text style={{...styles.AcceptTxt, color: ThemeConstants[theme].textColorTitle}}>ACCEPT</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: '49.7%'}}>
                                            <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor:  ThemeConstants[theme].inputColor }}  onPress={()=>{window.us.data.ignore[user._id]=true; window.us.update(); this.setState({reload: this.state.reload})}}>
                                                <Text style={{...styles.AcceptTxt,color: ThemeConstants[theme].textColorTitle}}>DECLINE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View> )   
                            })
                        }
                      {/*  <View style={{ ...styles.pendingArea, marginTop: 20 }}>
                            <Text style={styles.timeTxt}>Activity</Text>
                        </View>
                        <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:10, borderBottomWidth:0.3, width:'95%', alignSelf:"center", paddingBottom:10, borderColor:'#82828f'}}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt}><Text style={{color:'white'}}>Sammy and 5 others</Text> gave you </Text>
                                <Text style={styles.desTxt}>pounds on your <Text  style={{color:'white'}}>Budy Workout</Text></Text>
                                <Text style={{...styles.desTxt, color:'white'}}>with Zayn Perevalova </Text>
                                <Text style={styles.desTxt}>30 minutes ago </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:10, borderBottomWidth:0.3, width:'95%', alignSelf:"center", paddingBottom:10, borderColor:'#82828f'}}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt}><Text style={{color:'white'}}>Slawomir and 12 others</Text> gave you </Text>
                                <Text style={styles.desTxt}>pounds on your <Text  style={{color:'white'}}>Flamin' Hot Cardio</Text></Text>
                                <Text style={{...styles.desTxt, color:'white'}}>Circuit</Text>
                                <Text style={styles.desTxt}>1 hour ago </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:10, borderBottomWidth:0.3, width:'95%', alignSelf:"center", paddingBottom:10, borderColor:'#82828f'}}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt}><Text style={{color:'white'}}>Sammy and 5 others</Text> gave you </Text>
                                <Text style={styles.desTxt}>pounds on your <Text  style={{color:'white'}}>Budy Workout</Text></Text>
                                <Text style={{...styles.desTxt, color:'white'}}>with Zayn Perevalova </Text>
                                <Text style={styles.desTxt}>30 minutes ago </Text>
                            </View>
                        </View>*/}
               {/*    <FlatList
                      vertical
                      showsVerticalScrollIndicator={true}
                      numColumns={1}
                      data={this.state.contentList}
                      renderItem={this._rendermakelist}
                      keyExtractor={item => `${item.id}`}
                    /> */}
                    </View>
                </ScrollView>
            </View>)}
 </ThemeContext.Consumer>);
    }
}
