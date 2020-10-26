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
                                <Text style={styles.headerTxt}>NOTIFICATION</Text>
                            </View>
                        </View>
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
                                        <Image source={require('../../Assets/Images/messageImage.png')} resizeMode='stretch' style={styles.BtnImage} />
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
                                        <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '49.7%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
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
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '49.7%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
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
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Image source={require('../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '49.7%' }}>
                                    <TouchableOpacity style={{ ...styles.createBtn1, backgroundColor: '#18171a' }}>
                                        <Image source={require('../../Assets/Images/messageImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                                    </TouchableOpacity>
                                </View>
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
            </View>
        );
    }
}
