import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class ProgramDetailStartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={{ width: '100%' }}>
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
                                <View style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
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
                            <View>
                                <View style={styles.NextArea}>
                                    <Text style={styles.NextTxt}>Next Workout</Text>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/FastFuriousImage.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View>
                                        <Text style={styles.FastTxt}>Fast & Furious</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>30</Text>
                                        <Text style={styles.minTxt}>min</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.createBtn2} onPress={() => this.props.navigation.navigate("ActiveExersiceScreen")}>
                                <Text style={styles.CreateTxt}>Start Workout</Text>
                            </TouchableOpacity>
                            <Text style={styles.minText}>Your Statistics</Text>
                            <View style={{ ...styles.headerContent, marginTop: 0 }}>
                                <View style={styles.ContentList2}>
                                    <Text style={styles.numTxt}>14</Text>
                                    <Text style={styles.itemTxt}>Workouts</Text>
                                </View>
                                <View style={styles.ContentList2}>
                                    <Text style={styles.numTxt}>10</Text>
                                    <Text style={styles.itemTxt}>Days</Text>
                                </View>
                                <View style={{ ...styles.ContentList2, borderRightWidth: 0, }}>
                                    <Text style={styles.numTxt}>166</Text>
                                    <Text style={styles.itemTxt}>Min</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.bottomList}>
                                <Text style={styles.ConHeaderTxt1}>Program Overview</Text>
                                <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon} />
                            </View>
                            <View style={styles.bottomList}>
                                <Text style={styles.ConHeaderTxt1}>Program Details</Text>
                                <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon} />
                            </View>
                        </View>
                        <TouchableOpacity style={{margin:30}}>
                            <Text style={styles.ConHeaderTxt1}>End workout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
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
        alignItems: 'center'
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
        marginVertical: 3
    },
    numTxt: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'FuturaPT-Medium',
        textAlign: 'center',
        marginVertical: 3
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
    RightIcon: {
        width: 6,
        height: 11,
        marginRight: 10
    },
    ConHeaderTxt1: {
        fontFamily: 'FuturaPT-Book',
        color: 'white',
        fontSize: 18,
        marginRight: 10,
        textAlign: "center"
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
    },
    NextTxt: {
        fontSize: 20,
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        marginLeft: 20
    },
    NextArea: {
        height: 50,
        width: '100%',
        backgroundColor: "#111012",
        justifyContent: 'center',
    },
    fastImage: {
        width: 65,
        height: 65
    },
    ItemArea: {
        height: 100,
        width: '100%',
        padding: 20,
        backgroundColor: '#18171A',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,
        marginBottom: 20
    },
    minTxt: {
        color: '#82828f',
        fontSize: 15,
        fontFamily: 'FuturaPT-Book',
        textAlign: 'center',
        marginTop: -6
    },
    leftMin: {
        position: 'absolute',
        right: 20,
        borderLeftWidth: 0.2,
        borderColor: '#82828f',
        height: 50,
        justifyContent: "center",
        paddingLeft: 20
    },
    FastTxt: {
        color: 'white',
        fontFamily: 'FuturaPT-Medium',
        textAlign: 'center',
        marginVertical: 3,
        fontSize: 22,
        fontFamily: 'FuturaPT-Book',
        marginLeft: 20
    },
    bottomList:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical:15, 
        marginHorizontal: '5%', 
        borderTopWidth:0.2, 
        borderBottomWidth:0.2, 
        borderColor:'#82828f' 
    }
})
