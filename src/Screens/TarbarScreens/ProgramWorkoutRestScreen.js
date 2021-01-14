import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class ActiveExersiceScreen extends Component {
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
                            <View style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                <Text style={styles.headerRightTxt}>EXERCISE 2<Text style={{ color: '#82828f' }}>-8</Text></Text>
                            </View>
                            <View style={styles.dropDown}>
                                <Text style={styles.headerTxt}>00:20</Text>
                            </View>
                            <TouchableOpacity style={styles.CloseBtn} onPress={() => this.props.navigation.goBack()}>
                                <Image source={require('../../Assets/Images/closeImage.png')} resizeMode='stretch' style={styles.closeImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={{borderBottomWidth:3, borderColor:'white', width:'40%', marginTop:-1, marginLeft:'5%'}}></View>
                        <View style={styles.mainContainer}>
                            <Text style={styles.TileTxt}>FAST & FURIOUS</Text>
                            <View style={{ width: "90%", alignSelf: 'center', marginTop:35 }}>
                                <View style={styles.NextArea1}>
                                    <Text style={styles.NextTxt}>Warming Up</Text>
                                </View>
                                <View style={styles.ItemArea2}>
                                    <Image source={require('../../Assets/Images/inclineWork.png')} resizeMode='stretch' style={styles.fastImage} />
                                    <View>
                                        <Text style={styles.FastTxt}>Incline Walk</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>5</Text>
                                        <Text style={styles.minTxt}>min</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "90%", alignSelf: 'center' }}>
                                <View style={styles.ItemArea1}>
                                    <Text style={{...styles.FastTxt1, color:'#575763'}}>Rest</Text>
                                    <View style={styles.leftMin1}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25, color:'#575763' }}>60</Text>
                                        <Text style={styles.minTxt}>sec.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "90%", alignSelf: 'center', marginTop: -20 }}>
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
                            <View style={{ width: "90%", alignSelf: 'center' }}>
                                <View style={styles.ItemArea1}>
                                    <Text style={styles.FastTxt1}>Rest</Text>
                                    <View style={{ borderColor: '#18171A', borderBottomWidth: 2, width: "50%" }}>
                                    </View>
                                    <View style={styles.leftMin1}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>60</Text>
                                        <Text style={styles.minTxt}>sec.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "90%", alignSelf: 'center', marginTop: -20 }}>
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
        paddingBottom: 30,
        borderBottomWidth: 2,
        borderColor: '#82828f',
        alignSelf: 'center',
    },
    headerTxt: {
        color: 'white',
        fontSize: 22,
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
    closeImage: {
        width: 25,
        height: 25
    },
    numTxt: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'FuturaPT-Medium',
        textAlign: 'center',
        marginVertical: 3
    },
    BackBtn: {
        height: 20,
        position: 'absolute',
        left: 0,
        marginTop: 5
    },
    CloseBtn: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10
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
        marginTop: 50,
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
    NextArea1: {
        height: 55,
        width: '100%',
        backgroundColor: "#070708",
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
    },
    ItemArea2: {
        height: 110,
        width: '100%',
        padding: 20,
        backgroundColor: '#0a0a0b',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,
    },
    ItemArea1: {
        height: 100,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
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
    leftMin1: {
        borderLeftWidth: 0.2,
        borderColor: '#82828f',
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
        marginLeft: 20
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
    },
    headerRightTxt: {
        color: 'white',
        fontFamily: 'FuturaPT-Demi',
        letterSpacing: 2
    }
})
