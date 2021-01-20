import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';

import {ThemeConstants} from '../../theme/themeConstants'
//import {ThemeContext} from '../../App'

export default class ActivityTraingenScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
             contentList1: null
            //[
            //     {
            //         Title: 'Fast & Furious',
            //         Description: '10 Exercices. 30 min',
            //         ImageUrl: require("../../Assets/Images/FastFuriousImage.png")
            //     },
            //     {
            //         Title: 'Buddy Workout',
            //         Description: '10 Exercices. 30 min',
            //         ImageUrl: require("../../Assets/Images/BuddyWorkoutImage.png")
            //     },
            //     {
            //         Title: 'Leg Workout',
            //         Description: '10 Exercices. 30 min',
            //         ImageUrl: require("../../Assets/Images/LegWorkoutImage.png")
            //     },
            //     {
            //         Title: 'Stretch a Leg',
            //         Description: '10 Exercices. 30 min',
            //         ImageUrl: require("../../Assets/Images/StretchLegImage.png")
            //     },
            //     {
            //         Title: 'Work it',
            //         Description: '10 Exercices. 30 min',
            //         ImageUrl: require("../../Assets/Images/WorkitImage.png")
            //     },
            //     {
            //         Title: 'Jumping Ropes',
            //         Description: '10 Exercices. 30 min',
            //         ImageUrl: require("../../Assets/Images/JumpingImage.png")
            //     },
            // ],
        };
    }
  //     componentDidMount(){
  //   let workout = global.mongo.get('workout')
  //   this.setState({contentList1: workout.all})
  // }

    render() {
        let workouts = this.props.navigation.getParam('workoutList')
        let theme = this.props.navigation.getParam('theme')
        return (
            <View style={{ ...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground}>
                            <View style={{...styles.header2, borderBottomColor: ThemeConstants[theme].borderBottomWorkouts}}>
                                <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                {theme === 'light' 
                                ? <Image source={require('../../Assets/Images/BackBtnBlack.png')} resizeMode='stretch' />
                                : <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                }
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={{...styles.headerTxt, color: ThemeConstants[theme].textColorTitle}}>WORKOUTS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                        <View style={styles.LineStyle}/>
                    <View style={{ width: '100%' }}>
                        <View style={styles.mainContent}>
                            <Text style={{...styles.numberTxtWorkouts,color: ThemeConstants[theme].textColorTitle}}>{workouts.length}</Text>
                            <View style={styles.AllArea2}>
                                <Text style={{...styles.ConHeaderTxt5,color: ThemeConstants[theme].textColorTitle}}>September 27</Text>
                                <Text style={{...styles.ConHeaderTxt5, color:'#82828f'}}>2020</Text>
                            </View>
                            <View width="95%">
                                <FlatList
                                    vertical
                                    showsVerticalScrollIndicator={true}
                                    numColumns={1}
                                    data={workouts}
                                    renderItem={({item}) => (
                                        <TouchableOpacity style={styles.ListContent3} onPress={() => this.props.navigation.navigate("ProgramWorkoutDetailScreen", {theme: theme})}>
                                            <Image source={{uri: 'https://acta.webart.work'+item.thumb}} resizeMode="stretch" style={styles.ContentImage2} />
                                            <Text style={styles.ListTitle1}>{item.name}</Text>
                                            <Text style={styles.Description}>{item.details} {item.duration} min.</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => `${item.id}`}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>);
    }
}
