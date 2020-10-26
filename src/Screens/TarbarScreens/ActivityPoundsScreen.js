import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class ActivityPoundsScreen extends Component {
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
                                <TouchableOpacity style={{...styles.BackBtn, marginLeft:20}} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={styles.headerTxt}>POUNDS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainContent}>
                        <View style={styles.pendingArea}>
                            <Text style={styles.timeTxt}>Athletes you follow</Text>
                            <Text style={styles.timeTxt}>4</Text>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Enyinnaya</Text></Text>
                                <Text style={styles.desTxt1}>Philadephia</Text>
                            </View>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Yahiro Ayuko</Text></Text>
                                <Text style={styles.desTxt1}>Winnipeg</Text>
                            </View>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                        </View>
                        <View style={styles.pendingArea}>
                            <Text style={styles.timeTxt}>Other Athletes</Text>
                            <Text style={styles.timeTxt}>20</Text>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                <Text style={styles.desTxt1}>Hamilton</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily:'FuturaPT-Book', fontSize:15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                <Text style={styles.desTxt1}>Lincoln</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily:'FuturaPT-Book', fontSize:15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily:'FuturaPT-Book', fontSize:15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily:'FuturaPT-Book', fontSize:15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                <Text style={styles.desTxt1}>Hamilton</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily:'FuturaPT-Book', fontSize:15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                <Text style={styles.desTxt1}>Lincoln</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily:'FuturaPT-Book', fontSize:15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily:'FuturaPT-Book', fontSize:15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}
