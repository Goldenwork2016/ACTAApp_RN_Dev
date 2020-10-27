import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class AccountScreen extends Component {
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
            <View style={styles.container2}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground1}>
                            <View style={styles.header}>
                                <TouchableOpacity style={{ ...styles.BackBtn, marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={styles.headerTxt}>SETTING</Text>
                                </View>
                            </View>
                            <View>
                                <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.PersonProfileImage} />
                                <TouchableOpacity style={styles.EditImageBtn}  >
                                    <Image source={require('../../Assets/Images/EditImage.png')} resizeMode='stretch' style={styles.EditImage} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Content}>
                            <TouchableOpacity style={styles.ListContent2} onPress={()=>this.props.navigation.navigate("AccountEditScreen")}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Name</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Tom Arends</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Email</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>tom@unusualpixels.com</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Mobile</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>-</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Birthday</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>17 October 1987</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Measurement Units</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Metric</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Connectivity</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Apple Health</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.QuitWorkout1}>
                                <Text style={styles.Dismiss1}>Logout</Text>
                            </TouchableOpacity>
                            <Text style={{...styles.desTxt1, fontSize:13, textAlign:"center", color:'white'}}>VERSION 1.023</Text>
                            <View style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Privacy Policy</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Term & Conditions</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}