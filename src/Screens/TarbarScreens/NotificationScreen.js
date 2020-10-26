import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

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
            <View style={{ ...styles.container, backgroundColor: 'black' }}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground}>
                            <View style={styles.header}>
                                <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <Text style={styles.headerTxt}>NOTIFICATIONS</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.pendingArea}>
                        <Text style={styles.timeTxt}>Pending following requests</Text>
                        <Text style={styles.timeTxt}>2</Text>
                    </View>
                    <View style={styles.mainContent}>
                        <View style={styles.ListArea}>
                            <View style={styles.listHeader}>
                                <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={styles.proTxt}>Kelly Winters</Text>
                                    <Text style={styles.timeTxt}>Sacramento</Text>
                                </View>
                            </View>
                            <View style={styles.BtbArea}>
                                <View style={{ width: '49.7%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Text style={styles.AcceptTxt}>ACCEPT</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '49.7%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Text style={styles.AcceptTxt}>DECLINE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ListArea}>
                            <View style={styles.listHeader}>
                                <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={styles.proTxt}>Kelly Winters</Text>
                                    <Text style={styles.timeTxt}>New York</Text>
                                </View>
                            </View>
                            <View style={styles.BtbArea}>
                                <View style={{ width: '49.7%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Text style={styles.AcceptTxt}>ACCEPT</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '49.7%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Text style={styles.AcceptTxt}>DECLINE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...styles.pendingArea, marginTop: 20 }}>
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
            </View >
        );
    }
}
