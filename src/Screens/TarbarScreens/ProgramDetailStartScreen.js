import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import {ThemeConstants} from '../../theme/themeConstants'

export default class ProgramDetailStartScreen extends Component {
    render() {
      let theme = this.props.navigation.getParam('theme')
      return (
        <View style={{...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
        <ScrollView style={{ width: '100%' }}>
        <View style={{ width: '100%' }}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.navigate("ProgramDetailScreen", {theme:theme})}>
        {theme === 'light' 
        ? <Image source={require('../../Assets/Images/BackBtnBlack.png')} resizeMode='stretch' />
        : 
        <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
    }
    </TouchableOpacity>
    <View style={styles.dropDown}>
    <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>PROGRAM</Text>
    </View>
    </View>
    <View style={styles.LineStyle}/>
    <View style={styles.mainContainer}>
    <Text style={{...styles.TileTxt, color: ThemeConstants[theme].textColorTitle}}>SUMMER</Text>
    <Text style={{...styles.TileTxt, color: ThemeConstants[theme].textColorTitle}}>READY.</Text>
    <View style={styles.headerContent}>
    <View style={{ ...styles.ContentList2, borderRightWidth: 0}}>
    <Text style={styles.itemTxt}>Week</Text>
    <Text style={{...styles.numTxt, color: ThemeConstants[theme].textColorTitle}}>4</Text>     
    </View>
    <AnimatedCircularProgress
    size={122}
    width={2}
    fill={25}
    rotation = {360}
    tintColor={ThemeConstants[theme].textColorTitle}
    backgroundColor={ThemeConstants[theme].borderBottomWorkouts} 
    >
    {
        (fill) => (
            <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 50, fontFamily: 'TrumpSoftPro-BoldItalic', color: ThemeConstants[theme].textColorTitle }}>25</Text>
            <Text style={{ fontSize: 25, marginLeft: 5, fontFamily: 'TrumpSoftPro-BoldItalic', color: ThemeConstants[theme].textColorTitle }}>%</Text>
            </View>
            )
    }
    </AnimatedCircularProgress>

    <View style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
    <Text style={styles.itemTxt}>Day</Text>
    <Text style={{...styles.numTxt, color: ThemeConstants[theme].textColorTitle}}>2</Text>
    </View>
    </View>
    <View>
    <View style={{...styles.NextArea, backgroundColor: ThemeConstants[theme].backgroundColorActivity}}>
    <Text style={styles.NextTxt}>Next Workout</Text>
    </View>
    <View style={{...styles.ItemArea, backgroundColor: ThemeConstants[theme].backgroundExerciseColor}}>
    <Image source={require('../../Assets/Images/FastFuriousImage.png')} resizeMode='stretch' style={styles.fastImage} />
    <View>
    <Text style={{...styles.FastTxt, color: ThemeConstants[theme].textColorTitle}}>Fast & Furious</Text>
    </View>
    <View style={styles.leftMin}>
    <Text style={{ ...styles.numTxt, fontSize: 25, color: ThemeConstants[theme].textColorTitle }}>30</Text>
    <Text style={styles.minTxt}>min</Text>
    </View>
    </View>
    </View>
    <TouchableOpacity style={{...styles.createBtn2, backgroundColor: ThemeConstants[theme].textColorTitle}} onPress={() => this.props.navigation.navigate("ReadyScreen")}>
    <Text style={{...styles.CreateTxt, color: ThemeConstants[theme].backgroundColor}}>Start Workout</Text>
    </TouchableOpacity>
    <Text style={styles.minText}>Your Statistics</Text>
    <View style={{ ...styles.headerContent, marginTop: -10}}>
    <View style={styles.ContentList6}>
    <Text style={{...styles.numTxt, color: ThemeConstants[theme].textColorTitle}}>14</Text>
    <Text style={styles.itemTxt}>Workouts</Text>
    </View>
    <View style={styles.ContentList6}>
    <Text style={{...styles.numTxt,color: ThemeConstants[theme].textColorTitle}}>10</Text>
    <Text style={styles.itemTxt}>Days</Text>
    </View>
    <View style={{ ...styles.ContentList2, borderRightWidth: 0, }}>
    <Text style={{...styles.numTxt,color: ThemeConstants[theme].textColorTitle}}>166</Text>
    <Text style={styles.itemTxt}>Min</Text>
    </View>
    </View>
    </View>
    <View>
    <View style={styles.LineStyle}/>
    <View style={styles.bottomList}>
    <Text style={{...styles.ConHeaderTxt1,color: ThemeConstants[theme].textColorTitle}}>Program Overview</Text>
    {theme === 'light' ?
    <Image source={require('../../Assets/Images/rightIconBlack.png')} resizeMode='stretch' style={styles.RightIcon1} />
    : <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon} />
}
</View>
<View style={styles.bottomList}>
<Text style={{...styles.ConHeaderTxt1,color: ThemeConstants[theme].textColorTitle}}>Program Details</Text>
{theme === 'light' ?
<Image source={require('../../Assets/Images/rightIconBlack.png')} resizeMode='stretch' style={styles.RightIcon1} />
: <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon} />
}
</View>
</View>
<TouchableOpacity style={{margin:30}}>
<Text style={{...styles.ConHeaderTxt1,color: ThemeConstants[theme].textColorTitle,fontWeight: 'bold'}}>End workout</Text>
</TouchableOpacity>
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
        height: 45,
        alignItems: "center",
        borderRightWidth: 0.2,
        borderColor: '#82828f'
    },
    itemTxt: {
        fontFamily: 'FuturaPT-Book',
        color: '#82828f',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 3
    },
    numTxt: {
        color: 'white',
        fontSize: 24,
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
        borderWidth: 0.25,
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
        borderWidth: 0.25,
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
        borderLeftWidth: 0.25,
        borderColor: '#242326',
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
        borderBottomWidth:0.25, 
        borderColor:'#82828f' 
    },
    ContentList6: {
        width: '33%',
        height: 45,
        alignItems: "center",
        borderRightWidth: 1,
        borderColor: '#1d1c1e'
    },
    LineStyle:{
        borderBottomColor: '#18171a',
        borderBottomWidth: 1,
        marginLeft: '5%',
        marginRight: '5%'
    },
})
