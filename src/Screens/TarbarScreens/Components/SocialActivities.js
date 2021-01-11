import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../../../styles';
import {ThemeConstants} from '../../../theme/themeConstants';
import {ThemeContext} from '../../../App'

export default class SocialActivities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentList: [
			{
				ImageUrl: require('../../../Assets/Images/person1.png'),
				name: 'Kelly Winters',
				time: 'Today at 10:40',
				countLike: 4,
				titleMessage: "Flamin' Hot Cardio Circuit",
				message: "I absolute nailed it today in my opinion. I felt strong like donkey kong!",
				timeComplete: '12 min. 15 sec.'
			},
			{
				ImageUrl: require('../../../Assets/Images/favPerson1.jpg'),
				name: 'Cliff Williams',
				time: 'Today at 10:40',
				countLike: 25,
				titleMessage: "Abs Dominator",
				message: "Pellentesque in nisi a turpis ornare iaculic.",
				timeComplete: '12 min. 15 sec.'
			},
			{
				ImageUrl: require('../../../Assets/Images/favPerson2.jpg'),
				name: 'Fabira Mirzai',
				time: 'Today at 10:40',
				countLike: 10,
				titleMessage: "Squad Mates",
				message: "Pellentesque in nisi a turpis ornare iaculis. Lacinia quam imperdiet pretium risus vitae ed",
				timeComplete: '12 min. 15 sec.'
			},
			],
		};
	}

	_rendermakelist({ item, index }) {
			
		return <ThemeContext.Consumer>
          {({ theme }) => (
			 <View style={{...styles.ListArea,  borderColor: ThemeConstants[theme].borderColor}}>
              <View style={{...styles.listHeader, backgroundColor: ThemeConstants[theme].backgroundColor, borderBottomColor: ThemeConstants[theme].borderColor}}>
                <Image source={item.ImageUrl} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={{...styles.proTxt, color: ThemeConstants[theme].textColorTitle}}>{item.name}</Text>
                  <Text style={styles.timeTxt}>{item.time}</Text>
                </View>
                <View style={styles.like}>
                {theme === 'light' ?  <Image source={require('../../../Assets/Images/likeIconBlack.png')} resizeMode='stretch' style={styles.BtnImage} />
                : <Image source={require('../../../Assets/Images/likeIconWhite.png')} resizeMode='stretch' style={styles.BtnImage} />}
                    <Text style={{...styles.countLike, color: ThemeConstants[theme].textColorTitle}}>{item.countLike}</Text>
                    </View>
              </View>
              <View style={{...styles.listContents, backgroundColor: ThemeConstants[theme].backgroundColor}}>
                <Text style={{...styles.contentHeader, color: ThemeConstants[theme].textColorTitle}}>{item.titleMessage}</Text>
         		<Text style={styles.message}>{item.message}</Text>
         		  <View style={{...styles.LineStyle1,  borderBottomColor: ThemeConstants[theme].borderColor}}/>
         		  <View style={{marginLeft: 15,  flexDirection: 'row', margin: 20}}>
         		    <Image source={require('../../../Assets/Images/TimeIcon.png')} resizeMode='stretch' style={styles.TimeIcon}/>
         		  	<Text style={styles.completed}>Completed</Text>
         		  	<Text  style={{...styles.timeComplete, color: ThemeConstants[theme].textColorTitle}}>{item.timeComplete}</Text>
         		  </View>
              </View>
            </View>
          )}
 		</ThemeContext.Consumer>
	}

	render() {
		return <>
            <FlatList
				vertical
				// showsVerticalScrollIndicator={true}
				numColumns={1}
				data={this.state.contentList}
				renderItem={this._rendermakelist}
				keyExtractor={item => `${item.id}`}
			/>
			<ThemeContext.Consumer>
          {({ theme }) => (
			<View style={styles.mainContent}> 
          	  <TouchableOpacity style={styles.ViewMore}>
					<Image source={require('../../../Assets/Images/arrow_right.png')} resizeMode='stretch' style={styles.RightIcon}/>
					<Text style={{...styles.ConHeaderTxt1, color: ThemeConstants[theme].textColorTitle}}>VIEW MORE</Text>
				</TouchableOpacity>
         </View>
           )}
 		</ThemeContext.Consumer>
        </>
	}
}
