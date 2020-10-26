import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class ActivityDetailScreen extends Component {
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
                    <View style={styles.mainContent}>
                        <View style={styles.ListArea}>
                            <View style={{ width: '100%', backgroundColor: '#111012' }}>
                                <View style={styles.ImageBackground}>
                                    <View style={styles.header}>
                                        <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                            <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                        </TouchableOpacity>
                                        <View style={styles.dropDown}>
                                            <Text style={styles.headerTxt}>WORKOUT</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.listHeader2}>
                                <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.HeaderImage2} />
                                <View style={{ marginTop: 25 }}>
                                    <Text style={{ ...styles.proTxt, textAlign: "center", marginBottom: 5, fontSize: 20 }}>Kelly Winters</Text>
                                    <Text style={styles.timeTxt}>Today at 10:40</Text>
                                </View>
                            </View>
                            <View style={{ ...styles.listContents, height: 140 }}>
                                <Text style={{ ...styles.contentHeader, alignSelf: 'center' }}>Flamin' Hot Cardio Circuit</Text>
                                <TouchableOpacity style={styles.contentBottom} onPress={()=>this.props.navigation.navigate("ActivityPoundsScreen")}>
                                    <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Image source={require('../../Assets/Images/favPerson4.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Image source={require('../../Assets/Images/favPerson3.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Image source={require('../../Assets/Images/favPerson1.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Image source={require('../../Assets/Images/favPerson2.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Image source={require('../../Assets/Images/favPerson4.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Image source={require('../../Assets/Images/favPerson3.jpg')} resizeMode='stretch' style={styles.personImage} />
                                    <Text style={{ ...styles.timeTxt1, color: 'white', fontSize: 18 }}>+15</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.BtbArea}>
                                <View style={{ width: '49.8%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '49.8%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Image source={require('../../Assets/Images/messageImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...styles.pendingArea }}>
                            <Text style={styles.timeTxt}>3 Comments</Text>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={styles.personArea}>
                                <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                <View>
                                    <Text style={styles.desTxt}><Text style={{ color: 'white' }}>John Williams</Text></Text>
                                    <Text style={styles.desTxt}>Today 5:43 pm</Text>
                                </View>
                            </View>
                            <View style={styles.likeArea}>
                                <Text style={styles.desTxt}><Text style={{ color: 'white' }}>You keep rockingthat gym girl</Text></Text>
                                <Image source={require('../../Assets/Images/HeartUnselectImage.png')} resizeMode='stretch' style={styles.HeartUnselectImage} />
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={styles.personArea}>
                                <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                                <View>
                                    <Text style={styles.desTxt}><Text style={{ color: 'white' }}>Lilah loselet</Text></Text>
                                    <Text style={styles.desTxt}>Today 5:43 pm</Text>
                                </View>
                            </View>
                            <View style={styles.likeArea}>
                                <Text style={styles.desTxt}><Text style={{ color: 'white' }}>You keep rockingthat gym girl</Text></Text>
                                <Image source={require('../../Assets/Images/HeartSelectImage.png')} resizeMode='stretch' style={styles.HeartUnselectImage} />
                            </View>
                        </View>
                        <View style={{width:'100%', marginTop:20}}>
                            <TextInput placeholder="Add a comment" placeholderTextColor="#53535f" style={styles.SendInputTxt} />
                            <TouchableOpacity style={styles.sendBtn}>
                                <Text style={styles.sendBtnTxt}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
