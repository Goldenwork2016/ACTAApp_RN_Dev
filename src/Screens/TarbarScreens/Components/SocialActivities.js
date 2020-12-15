import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../../../styles'

export default class SocialActivities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// contentList: [
			// {
			// 	ImageUrl: require("../../../Assets/Images/workout.png")
			// },
			// {
			// 	ImageUrl: require("../../../Assets/Images/workout.png")
			// }
			// ],
			// contentList1: [
			// {
			// 	Title: 'SUMMER READY',
			// 	ImageUrl: require("../../../Assets/Images/program1.png")
			// },
			// {
			// 	Title: 'KELLY WINTERS',
			// 	ImageUrl: require("../../../Assets/Images/program2.png")
			// },
			// {
			// 	Title: 'COUPLE WORKOUT',
			// 	ImageUrl: require("../../../Assets/Images/program3.png")
			// }
			// ],

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
		return <>
   		 <View style={styles.mainContent}>
             <TouchableOpacity style={styles.ListArea} onPress={()=>this.props.navigation.navigate("ActivityDetailScreen")}>
              <View style={styles.listHeader}>
                <Image source={require('../../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>Kelly Winters</Text>
                  <Text style={styles.timeTxt}>Today at 10:40</Text>
                </View>
                <View style={styles.like}>
                    <Image source={require('../../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                    <Text style={styles.countLike}>4</Text>
                    </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>Flamin' Hot Cardio Circuit</Text>
         		<Text style={styles.message}>I absolute nailed it today in my opinion. I felt strong like donkey kong!</Text>
         		  <View style={styles.LineStyle}/>
         		  <View style={{marginLeft: 15, flex: 1, flexDirection: 'row',  marginTop: 20}}>
         		    <Image source={require('../../../Assets/Images/TimeIcon.png')} resizeMode='stretch' style={styles.TimeIcon}/>
         		  	<Text style={styles.completed}>Completed</Text>
         		  	<Text  style={styles.timeComplete}>12 min. 15 sec.</Text>
         		  </View>
              </View>
            </TouchableOpacity>
          </View>
        </>
	}
}
