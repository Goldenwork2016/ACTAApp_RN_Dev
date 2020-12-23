import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../../../styles'

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
		return (
			 <View style={styles.ListArea}>
              <View style={styles.listHeader}>
                <Image source={item.ImageUrl} resizeMode='stretch' style={styles.HeaderImage1} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.proTxt}>{item.name}</Text>
                  <Text style={styles.timeTxt}>{item.time}</Text>
                </View>
                <View style={styles.like}>
                    <Image source={require('../../../Assets/Images/airImage.png')} resizeMode='stretch' style={styles.BtnImage} />
                    <Text style={styles.countLike}>{item.countLike}</Text>
                    </View>
              </View>
              <View style={styles.listContents}>
                <Text style={styles.contentHeader}>{item.titleMessage}</Text>
         		<Text style={styles.message}>{item.message}</Text>
         		  <View style={styles.LineStyle1}/>
         		  <View style={{marginLeft: 15,  flexDirection: 'row', margin: 20}}>
         		    <Image source={require('../../../Assets/Images/TimeIcon.png')} resizeMode='stretch' style={styles.TimeIcon}/>
         		  	<Text style={styles.completed}>Completed</Text>
         		  	<Text  style={styles.timeComplete}>{item.timeComplete}</Text>
         		  </View>
              </View>
            </View>
			)
	}

	render() {
		return <>
             {/*<TouchableOpacity style={styles.ListArea} onPress={()=>this.props.navigation.navigate("ActivityDetailScreen")}>
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
            </TouchableOpacity>*/}
            <FlatList
				vertical
				// showsVerticalScrollIndicator={true}
				numColumns={1}
				data={this.state.contentList}
				renderItem={this._rendermakelist}
				keyExtractor={item => `${item.id}`}
			/>
			<View style={styles.mainContent}> 
          	  <TouchableOpacity style={styles.ViewMore}>
					<Image source={require('../../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon}/>
					<Text style={styles.ConHeaderTxt1}>VIEW MORE</Text>
				</TouchableOpacity>
         </View>
        </>
	}
}
