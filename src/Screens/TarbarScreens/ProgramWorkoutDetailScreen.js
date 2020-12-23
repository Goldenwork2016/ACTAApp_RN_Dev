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
                            <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.navigate("ProgramDetailStartScreen")}>
                                <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                            </TouchableOpacity>
                            <View style={styles.dropDown}>
                                <Text style={styles.headerTxt}>WORKOUT</Text>
                            </View>
                        </View>
                        <View style={styles.mainContainer}>
                            <ImageBackground source={require('../../Assets/Images/FastFuriousImage.png')} resizeMode='stretch' style={styles.ImageBackground}>
                                <Image source={require('../../Assets/Images/AlphaImage.png')} resizeMode='stretch' style={styles.AlphaImage} />
                                <Text style={styles.TileTxt}>FAST & FURIOUS</Text>
                                <View style={styles.headerContent}>
                                    <View style={styles.ContentList2}>
                                        <Text style={styles.numTxt}>30</Text>
                                        <Text style={styles.itemTxt}>Minutes</Text>
                                    </View>
                                    <View style={styles.ContentList2}>
                                        <Text style={styles.numTxt}>Legs</Text>
                                        <Text style={styles.itemTxt}>Type</Text>
                                    </View>
                                    <View style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
                                        <Text style={styles.numTxt}>Time/Rep.</Text>
                                        <Text style={styles.itemTxt}>Based</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.createBtn2} onPress={() => this.props.navigation.navigate("ReadyScreen")}>
                                    <Text style={styles.CreateTxt}>Start Workout</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text style={{alignSelf:'center',color:'white', fontSize:25, fontFamily:'FuturaPT-Medium', marginVertical:30}} >
                                Exercises
                            </Text>
                            <View style={{width:"90%", alignSelf:'center'}}>
                                <View style={styles.NextArea}>
                                    <Text style={styles.NextTxt}>Warming Up</Text>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View>
                                        <Text style={styles.FastTxt}>Incline Walk</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25}}>5</Text>
                                        <Text style={styles.minTxt}>min</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:"90%", alignSelf:'center'}}>
                                <View style={styles.ItemArea1}>
                                    <Text style={styles.FastTxt1}>Rest</Text>
                                    <View style={{borderColor:'#18171A', borderBottomWidth:2, width:"50%"}}>
                                    </View>
                                    <View style={styles.leftMin1}>
                                    <Text style={{ ...styles.numTxt, fontSize: 25, color: '#82828f' }}>60</Text>
                                        <Text style={styles.minTxt}>sec.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:"90%", alignSelf:'center', marginTop:-20}}>
                                <View style={styles.NextArea}>
                                    <Text style={styles.NextTxt}>Glute Activation</Text>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Left Banded Glude</Text>
                                        <Text style={styles.FastTxt}>KickBack</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25}}>12</Text>
                                        <Text style={styles.minTxt}>reps</Text>
                                    </View>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Banded Glude</Text>
                                        <Text style={styles.FastTxt}>Bridge</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{...styles.numTxt, fontSize: 25 }}>12</Text>
                                        <Text style={styles.minTxt}>reps</Text>
                                    </View>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Left Banded Glude</Text>
                                        <Text style={styles.FastTxt}>Kickback</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>20</Text>
                                        <Text style={styles.minTxt}>reps</Text>
                                    </View>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Rnussaion</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>5</Text>
                                        <Text style={styles.minTxt}>min.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:"90%", alignSelf:'center'}}>
                                <View style={styles.ItemArea1}>
                                    <Text style={styles.FastTxt1}>Rest</Text>
                                    <View style={{borderColor:'#18171A', borderBottomWidth:2, width:"50%"}}>
                                    </View>
                                    <View style={styles.leftMin1}>
                                    <Text style={{ ...styles.numTxt, fontSize: 25, color: '#82828f'}}>60</Text>
                                        <Text style={styles.minTxt}>sec.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:"90%", alignSelf:'center', marginTop:-20}}>
                                <View style={styles.NextArea}>
                                    <Text style={styles.NextTxt}>Glute Activation</Text>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Left Banded Glude</Text>
                                        <Text style={styles.FastTxt}>KickBack</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>12</Text>
                                        <Text style={styles.minTxt}>reps</Text>
                                    </View>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Banded Glude</Text>
                                        <Text style={styles.FastTxt}>Bridge</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>12</Text>
                                        <Text style={styles.minTxt}>reps</Text>
                                    </View>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Left Banded Glude</Text>
                                        <Text style={styles.FastTxt}>Kickback</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>20</Text>
                                        <Text style={styles.minTxt}>reps</Text>
                                    </View>
                                </View>
                                <View style={styles.ItemArea}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View >
                                        <Text style={styles.FastTxt}>Rnussaion</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>5</Text>
                                        <Text style={styles.minTxt}>min.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
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
        marginTop: 50,
        marginBottom: 15,
        alignItems: 'center'
    },
    ContentList2: {
        width: '33%',
        alignItems: "center",
        borderRightWidth: 0.25,
        borderColor: '#82828f'
    },
    itemTxt: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 16,
        textAlign: 'center',
    },
    numTxt: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'FuturaPT-Medium',
        textAlign: 'center',
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
        width: "90%",
        height: 50,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        borderRadius: 3,
        marginBottom: 45
    },
    mainContainer: {
        alignSelf: 'center',
        width: '100%'
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
        fontSize: 55,
        textAlign: "center",
        marginTop: 115,
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
        width: 55,
        height: 60
    },
    ItemArea: {
        height: 100,
        width: '100%',
        padding: 20,
        backgroundColor: '#18171A',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,
    },
    ItemArea1: {
        height: 100,
        width: '100%',
        padding: 20,
        justifyContent:'space-between',
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
        right: 25,
        borderLeftWidth: 1,
        borderColor: '#302f32',
        height: 50,
        justifyContent: "center",
        paddingLeft: 30
    },
    leftMin1: {
        height: 50,
        justifyContent: "center",
        paddingLeft: 20
    },
    FastTxt: {
        color: 'white',
        fontFamily: 'FuturaPT-Medium',
        marginVertical: 3,
        fontSize: 22,
        fontFamily: 'FuturaPT-Book',
        marginLeft: 10
    },
    FastTxt1: {
        color: 'white',
        fontFamily: 'FuturaPT-Medium',
        marginVertical: 3,
        fontSize: 22,
        fontFamily: 'FuturaPT-Book',
    },
    bottomList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 15,
        marginHorizontal: '5%',
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        borderColor: '#82828f'
    }
})
