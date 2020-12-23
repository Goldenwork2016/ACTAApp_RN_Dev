import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import {CircularProgressbar} from 'react-circular-progressbar';

export default function ProgressStatus (){
    const percentage = 0.25;
	return <>
	<View style={styles.headerContent}>
		<View style={{ ...styles.ContentList2, borderRightWidth: 0, marginTop: 27}}>
			<Text style={styles.itemTxt}>Week</Text>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<Text style={styles.numTxt}>4</Text>
				<Text style={styles.from}>/8</Text>
			</View>
		</View>
		<ProgressCircle
			percent={25}
			radius={61}
			borderWidth={3}
		    bgColor='#000'
			shadowColor="#111012"
			color="white"
			outerCircleStyle={{}}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ fontSize: 50, color: 'white', fontFamily: 'TrumpSoftPro-BoldItalic' }}>25</Text>
				<Text style={{ fontSize: 25, marginLeft: 5, color: 'white', fontFamily: 'TrumpSoftPro-BoldItalic' }}>%</Text>
			</View>
		</ProgressCircle>
       {/*  <CircularProgressbar       
            value={percentage}
            strokeWidth={5}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 50, color: 'white', fontFamily: 'TrumpSoftPro-BoldItalic' }}>25</Text>
                    <Text style={{ fontSize: 25, marginLeft: 5, color: 'white', fontFamily: 'TrumpSoftPro-BoldItalic' }}>%</Text>
                </View>
            </CircularProgressbar>*/}
  		<View style={{ ...styles.ContentList2, borderRightWidth: 0 }}>
			<Text style={styles.itemTxt}>Day</Text>
			<Text style={styles.numTxt}>2</Text>
		</View>
	</View>
	</>
}
const styles = StyleSheet.create({
    headerContent: {

        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 25,
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
        fontSize: 18,
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
    from:{
        color: '#82828f',
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'FuturaPT-Medium',
        textAlign: 'center',
        paddingLeft: 2,
        marginVertical: 3
    }
})