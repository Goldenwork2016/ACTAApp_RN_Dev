import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class ActivityTraingenScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentList1: [
                {
                    Title: 'Fast & Furious',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/FastFuriousImage.png")
                },
                {
                    Title: 'Buddy Workout',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/BuddyWorkoutImage.png")
                },
                {
                    Title: 'Leg Workout',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/LegWorkoutImage.png")
                },
                {
                    Title: 'Stretch a Leg',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/StretchLegImage.png")
                },
                {
                    Title: 'Work it',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/WorkitImage.png")
                },
                {
                    Title: 'Jumping Ropes',
                    Description: '10 Exercices. 30 min',
                    ImageUrl: require("../../Assets/Images/JumpingImage.png")
                },
            ],
        };
    }

    render() {
        return (
            <View style={{ ...styles.container, backgroundColor: 'black' }}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground}>
                            <View style={styles.header2}>
                                <TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={styles.headerTxt}>WORKOUTS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                        <View style={styles.LineStyle}/>
                    <View style={{ width: '100%' }}>
                        <View style={styles.mainContent}>
                            <Text style={styles.numberTxtWorkouts}>48</Text>
                            <View style={styles.AllArea2}>
                                <Text style={styles.ConHeaderTxt5}>September 27</Text>
                                <Text style={{...styles.ConHeaderTxt5, color:'#82828f'}}>2020</Text>
                            </View>
                            <View width="95%">
                                <FlatList
                                    vertical
                                    showsVerticalScrollIndicator={true}
                                    numColumns={1}
                                    data={this.state.contentList1}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={styles.ListContent3} onPress={() => this.props.navigation.navigate("ProgramWorkoutDetailScreen")}>
                                            <Image source={item.ImageUrl} resizeMode="stretch" style={styles.ContentImage2} />
                                            <Text style={styles.ListTitle1}>{item.Title}</Text>
                                            <Text style={styles.Description}>{item.Description}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => `${item.id}`}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
