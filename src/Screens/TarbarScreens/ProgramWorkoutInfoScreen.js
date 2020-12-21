import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default class ActiveExersiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        };
    }

    complete = () => {
        this.setState({ isModalVisible: false })
        this.props.navigation.navigate("WorkoutOverViewScreen")
    }
    
    QuitWorkout = () => {
        this.setState({ isModalVisible: false })
        this.props.navigation.navigate("ProgramWorkoutDetailScreen")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.headerRightTxt}>EXERCISE 5<Text style={{ color: '#82828f' }}>-8</Text></Text>
                    </View>
                    <View style={styles.dropDown}>
                        <Text style={styles.headerTxt}>00:14</Text>
                    </View>
                    <TouchableOpacity style={styles.CloseBtn} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../../Assets/Images/closeImage.png')} resizeMode='stretch' style={styles.closeImage} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <ImageBackground source={require('../../Assets/Images/ProgramWorkoutInfoImage.png')} resizeMode='stretch' style={styles.ImageBackground}>
                            <ImageBackground source={require('../../Assets/Images/TopBackImage.png')} resizeMode='stretch' style={styles.ImageBackground1}>
                                <Text style={{ ...styles.numTxt, fontSize: 25 }}>6</Text>
                                <Text style={{ ...styles.minTxt, color: 'white' }}>reps</Text>
                            </ImageBackground>
                            <Text style={styles.TileTxt}>Left Banded Glute Kickback</Text>
                            <View style={styles.headerContent}>
                                <TouchableOpacity style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
                                    <Image source={require('../../Assets/Images/PreviousImage.png')} resizeMode='stretch' style={styles.PreviousImage} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
                                    <View style={styles.StopImage}>
                                        <Image source={require('../../Assets/Images/StopImage.png')} resizeMode='stretch' style={styles.PreviousImage} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
                                    <Image source={require('../../Assets/Images/NexImage.png')} resizeMode='stretch' style={styles.PreviousImage} />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <View style={styles.mainContainer}>
                            <View style={{ width: "90%", alignSelf: 'center' }}>
                                <View style={styles.NextArea}>
                                    <Text style={styles.NextTxt}>Next Exercise</Text>
                                </View>
                                <View style={styles.ItemArea}>
                                    <View >
                                        <Text style={styles.FastTxt}>Left Banded Glude Kickback</Text>
                                    </View>
                                    <View style={styles.leftMin}>
                                        <Text style={{ ...styles.numTxt, fontSize: 25 }}>12 <Text style={styles.minTxt}>reps</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', marginTop: 30}} onPress={() => this.setState({ isModalVisible: true })}>
                            <Text style={styles.EndTxt}>End workout</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.modalView}>
                            <Text style={styles.TitleTxt}>END WORKOUT</Text>
                            <Text style={styles.Description}>Are you sure you want to end</Text>
                            <Text style={styles.Description}>your workout?</Text>
                            <TouchableOpacity style={{ ...styles.QuitWorkout, backgroundColor: '#18171A', marginBottom: 10, borderColor: '#18171A' }} onPress={() => this.complete()}>
                                <Text style={{ ...styles.Dismiss, color: 'white' }}>Complete Workout</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.QuitWorkout} onPress={()=>this.QuitWorkout()}>
                                <Text style={styles.Dismiss}>QuitWorkout</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })}>
                                <Text style={styles.Dismiss}>Dismiss</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
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
    modalView: {
        width: '100%',
        height: 500,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageBackground: {
        width: '100%',
        height: 520,
        alignItems: 'center'
    },
    Dismiss: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'FuturaPT-Medium'
    },
    Description: {
        color: '#575763',
        fontSize: 20,
        marginBottom: 25,
        fontFamily: 'FuturaPT-Book'
    },
    TitleTxt: {
        color: 'black',
        fontSize: 55,
        marginBottom: 25,
        fontFamily: 'TrumpSoftPro-BoldItalic'
    },
    QuitWorkout: {
        width: '90%',
        height: 55,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 40
    },
    ImageBackground1: {
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20
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
        position: 'absolute',
        bottom: 15,
        alignItems: 'center'
    },

    ContentList2: {
        width: '33%',
        alignItems: "center",
        borderRightWidth: 0.2,
        borderColor: '#82828f'
    },
    StopImage: {
        width: 70,
        height: 70,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'white',
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
    PreviousImage: {
        width: 22,
        height: 28
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
        marginTop: 30,
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
        fontFamily: 'FuturaPT-Medium',
        color: 'white',
        fontSize: 28,
        textAlign: "center",
        position: 'absolute',
        bottom: 110,
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
        height: 55,
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
        height: 70,
        width: '100%',
        padding: 15,
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
        right: 15,
        borderLeftWidth: 0.3,
        borderColor: 'white',
        height: 25,
        justifyContent: "center",
        paddingLeft: 15
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
        fontSize: 20,
        fontFamily: 'FuturaPT-Book',
    },
    EndTxt:{
           color: 'white',
        fontFamily: 'FuturaPT-Medium',
        marginVertical: 3,
        fontSize: 20,
        fontFamily: 'FuturaPT-Book',
        borderBottomWidth: 3,
        borderRadius: 3,
        borderColor: 'white',
        paddingBottom: 25
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
