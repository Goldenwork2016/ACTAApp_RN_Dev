import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import WorkoutCompleteScreen from './WorkoutCompleteScreen'

export default class WorkoutOverViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            ready: '',
            Timer: '',
            flag: false
        };
    }

    complete = () => {
        this.setState({ isModalVisible: false })
        this.props.navigation.navigate("WorkoutCompleteScreen")
    }

    componentDidMount() {
        this.state.Timer = setInterval(async () => {
            await this.setState({ ready: ++this.state.ready })
            if (this.state.processNumber == 3) {
                clearInterval(this.state.Timer);
            }
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.ready >= 3 ?
                        <View style={styles.container}>
                            <ScrollView style={{ width: '100%' }}>
                                <View style={{ width: '100%' }}>
                                    <ImageBackground source={require('../../Assets/Images/HomeBackImage1.png')} resizeMode='stretch' style={styles.ImageBackground}>
                                        <Image source={require('../../Assets/Images/AlphaImage.png')} resizeMode='stretch' style={styles.AlphaImage} />
                                        <TouchableOpacity style={styles.shareBtn} onPress={() => this.setState({ isModalVisible: true })}>
                                            <Image source={require('../../Assets/Images/shareImage.png')} resizeMode='stretch' style={styles.ImageBackground1} />
                                        </TouchableOpacity>
                                        <View style={styles.workTxt}>
                                            <Text style={styles.TileTxt}>WORKOUT</Text>
                                            <Text style={styles.TileTxt}>COMPLETE</Text>
                                        </View>
                                        <View style={styles.headerContent}>
                                            <View style={{ width: '50%', marginLeft:10 }}>
                                                <Text style={styles.achiveTxt}>Workout</Text>
                                                <Text style={styles.minTxt1}>Fast & Furious</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                    <View style={styles.mainContainer}>
                                        <View style={{ ...styles.content, flexDirection: 'row' }}>
                                            <View style={{ width: '50%' }}>
                                                <Text style={styles.achiveTxt}>Total Time</Text>
                                                <Text style={styles.minTxt1}>00:28 min</Text>
                                            </View>
                                            <View style={{ width: '50%' }}>
                                                <Text style={styles.achiveTxt}>Date</Text>
                                                <Text style={styles.minTxt1}>Oct 10.2020</Text>
                                            </View>
                                        </View>
                                        <View style={styles.content}>
                                            <Text style={styles.achiveTxt}>Achievement</Text>
                                            <View style={styles.NextArea}>
                                                <Image source={require('../../Assets/Images/medalImage.png')} resizeMode='stretch' style={styles.medalImage} />
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.OverviewBtn} onPress={() => this.props.navigation.navigate("ProgramDetailStartScreen")}>
                                        <Text style={styles.FastTxt}>Back to overview</Text>
                                    </TouchableOpacity>
                                </View>
                                <Modal isVisible={this.state.isModalVisible}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.TitleTxt}>SHARE WORKOUT</Text>
                                        <Text style={styles.Description}>Show your workout achievements</Text>
                                        <Text style={styles.Description}>with your friends on instagram!</Text>
                                        <TouchableOpacity style={{ ...styles.QuitWorkout, backgroundColor: '#18171A', marginBottom: 10, borderColor: '#18171A' }}>
                                            <Image source={require('../../Assets/Images/InstagramIcon.png')} resizeMode='stretch' style={styles.InstagramIcon} />
                                            <Text style={{ ...styles.Dismiss, color: 'white' }}>Instagram Stroy</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.QuitWorkout}>
                                            <Image source={require('../../Assets/Images/ShareIcon.png')} resizeMode='stretch' style={styles.ShareIcon} />
                                            <Text style={styles.Dismiss}>Other options</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })}>
                                            <Text style={styles.Dismiss}>Dismiss</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </ScrollView>
                        </View > :
                        <WorkoutCompleteScreen />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'black',
        width: '100%'
    },
    workTxt: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: 'center'
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
    InstagramIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 20,
        top: 12
    },
    ShareIcon: {
        width: 15,
        height: 15,
        position: 'absolute',
        left: 20,
        top: 17
    },
    achiveTxt: {
        color: '#82828f',
        marginBottom: 15,
        fontSize: 18,
        fontFamily: 'FuturaPT-Book'
    },
    minTxt1: {
        color: 'white',
        marginBottom: 15,
        fontSize: 22,
        fontFamily: 'FuturaPT-Medium'
    },
    content: {
        width: "90%",
        alignSelf: 'center',
        borderTopColor: '#82828f',
        borderWidth: 0.5,
        paddingTop: 30
    },
    OverviewBtn: {
        alignItems: 'center',
        marginVertical: 45,
        width: '90%',
        height: 55,
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    ImageBackground: {
        width: '100%',
        height: 465,
        alignItems: 'center',
        justifyContent: 'center'
    },
    medalImage: {
        width: 35,
        height: 55
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
        width: '100%',
        textAlign: 'center',
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
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',

    },
    shareBtn: {
        position: 'absolute',
        top: 60,
        right: 20,
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
        bottom: -20,
        alignItems: 'center'
    },

    ContentList2: {
        width: '33%',
        alignItems: "center",
        borderRightWidth: 0.2,
        borderColor: '#82828f'
    },
    StopImage: {
        width: 90,
        height: 90,
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
        fontFamily: 'TrumpSoftPro-BoldItalic',
        color: 'white',
        fontSize: 65,
        textAlign: "center",
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
        height: 90,
        width: 90,
        backgroundColor: "#111012",
        justifyContent: 'center',
        alignItems: 'center'
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
        fontFamily: 'FuturaPT-Demi',
        marginVertical: 3,
        fontSize: 25,
        fontFamily: 'FuturaPT-Book',
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
