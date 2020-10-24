import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class ProgramDetailStartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentList1: [
                {
                    Title: 'Fast & Furious',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/FastFuriousImage.png")
                },
                {
                    Title: 'Buddy Workout',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/BuddyWorkoutImage.png")
                },
                {
                    Title: 'Leg Workout',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/LegWorkoutImage.png")
                },
                {
                    Title: 'Stretch a Leg',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/StretchLegImage.png")
                },
                {
                    Title: 'Work it',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/WorkitImage.png")
                },
                {
                    Title: 'Jumping Ropes',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/JumpingImage.png")
                },
            ],

        };
    }

    _rendermakelist1({ item, index }) {
        return (
            <View style={styles.ListContent1}>
                <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage1} />
                <Text style={styles.ListTitle}>{item.Title}</Text>
                <Text style={styles.Description}>{item.Description}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%', height: 610, }}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                            </TouchableOpacity>
                            <View style={styles.dropDown}>
                                <Text style={styles.headerTxt}>PROGRAM</Text>
                            </View>
                        </View>
                        <View style={styles.mainContainer}>
                            <Text style={styles.TileTxt}>SUMMER</Text>
                            <Text style={styles.TileTxt}>READY.</Text>
                            <View style={styles.headerContent}>
                                <View style={{...styles.ContentList2, borderRightWidth: 0}}>
                                    <Text style={styles.itemTxt}>Week</Text>
                                    <Text style={styles.numTxt}>4</Text>
                                </View>
                                <ProgressCircle
                                    percent={25}
                                    radius={65}
                                    borderWidth={3}
                                    color="white"
                                    shadowColor="#111012"
                                    bgColor="#000"
                                    outerCircleStyle={{}}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 50, color: 'white', fontFamily: 'TrumpSoftPro-BoldItalic' }}>25</Text>
                                        <Text style={{ fontSize: 25, marginLeft: 5, color: 'white', fontFamily: 'TrumpSoftPro-BoldItalic' }}>%</Text>
                                    </View>
                                </ProgressCircle>
                                <View style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
                                    <Text style={styles.itemTxt}>Day</Text>
                                    <Text style={styles.numTxt}>2</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.createBtn2} onPress={() => this.props.navigation.navigate("CreateScreen")}>
                                <Text style={styles.CreateTxt}>Continus  Program</Text>
                            </TouchableOpacity>
                            <Text style={styles.minText}>Your Statistics</Text>
                            <View style={styles.headerContent}>
                                <View style={styles.ContentList2}>
                                    <Text style={styles.numTxt}>8</Text>
                                    <Text style={styles.itemTxt}>Week</Text>
                                </View>
                                <View style={styles.ContentList2}>
                                    <Text style={styles.numTxt}>5</Text>
                                    <Text style={styles.itemTxt}>Per Week</Text>
                                </View>
                                <View style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
                                    <Text style={styles.numTxt}>30</Text>
                                    <Text style={styles.itemTxt}>Minutes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainContent}>
                        <View style={{ width: '100%', alignSelf: "center", marginBottom: 30 }}>
                            <Text style={styles.DescriptionTxt}>
                                Mauris posuere magna ut ex dictum vehicula. Nulla neque ipsum, molestie ac magna non, viverra maximus nulla. Etiam vulputate euismod sapien, sed vehicula lorem blandit vel.
                            </Text>
                        </View>
                        <View style={styles.AllArea}>
                            <Text style={styles.ConHeaderTxt}>Workouts</Text>
                        </View>
                        <FlatList
                            vertical
                            showsVerticalScrollIndicator={true}
                            numColumns={1}
                            data={this.state.contentList1}
                            renderItem={this._rendermakelist1}
                            keyExtractor={item => `${item.id}`}
                        />
                    </View>
                </ScrollView>
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
        borderBottomWidth: 0.2,
        borderColor: '#82828f',
        alignSelf: 'center'
    },
    headerTxt: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'FuturaPT-Demi',
        letterSpacing: 1.5
    },
    headerContent: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
        alignItems:'center'
    },
    ContentList2: {
        width: '33%',
        alignItems: "center",
        borderRightWidth: 0.2,
        borderColor: '#82828f'
    },
    itemTxt: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 20,
        textAlign: 'center',
        marginVertical:3
    },
    numTxt: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'FuturaPT-Medium',
        textAlign: 'center',
        marginVertical:3
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
    createBtn2: {
        width: "100%",
        height: 50,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        borderRadius: 3,
    },
    mainContainer: {
        marginTop: 58,
        alignSelf: 'center',
        width: '90%'
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
        fontSize: 22,
        textAlign: "center",
    },
    TileTxt: {
        fontFamily: 'TrumpSoftPro-BoldItalic',
        color: 'white',
        fontSize: 60,
        textAlign: "center",
        marginTop: -20,
        lineHeight: 70
    },
    dropDown: {
    },
    minText: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
        marginTop: 50
    },
    mainContent: {
        marginTop: 45,
        width: '95%',
        alignSelf: 'center'
    },
    ConHeaderTxt: {
        fontFamily: 'FuturaPT-Medium',
        color: 'white',
        fontSize: 23,
        marginBottom: 15
    },
    ContentImage: {
        width: 224,
        height: 224,
        marginRight: 20
    },
    ContentImage1: {
        width: "97.5%",
        height: 390,
        marginRight: 20,
        position: 'absolute',
        borderRadius: 3
    },
    ListTitle: {
        fontSize: 35,
        color: 'white',
        fontFamily: 'FuturaPT-Medium',
        width: '100%',
        position: 'absolute',
        bottom: 48,
        left: 30
    },
    Description: {
        fontSize: 22,
        color: '#82828f',
        fontFamily: 'FuturaPT-Book',
        width: '100%',
        position: 'absolute',
        bottom: 18,
        left: 30
    },
    ListContent1: {
        marginTop: 5,
        width: "100%",
        height: 390,
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
    blackImage: {
        alignSelf: 'center',
        width: 75,
        height: 75,
        marginBottom: 50
    },
    DescriptionTxt: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 18,
        lineHeight: 30
    }
})
