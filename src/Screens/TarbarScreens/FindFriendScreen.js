import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class ActivityPoundsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View style={{ ...styles.container, backgroundColor: 'black' }}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%', backgroundColor: '#111012' }}>
                        <View style={styles.ImageBackground}>
                            <View style={styles.header}>
                                <TouchableOpacity style={{ ...styles.BackBtn, marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={styles.headerTxt}>FIND FRIENDS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', paddingTop: 5, paddingBottom:35, backgroundColor: '#111012' }}>
                        <TextInput placeholder="Search for friends" placeholderTextColor="white" style={{...styles.SendInputTxt, backgroundColor:'black', color:'white', fontSize:20}} />
                        <TouchableOpacity style={styles.sendBtn}>
                            <Image source={require('../../Assets/Images/SearchImage.png')} resizeMode='stretch' style={styles.SearchImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContent}>
                        <View style={styles.pendingArea}>
                            <Text style={styles.timeTxt}>Suggestions based on current community</Text>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                <Text style={styles.desTxt1}>Hamilton</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                <Text style={styles.desTxt1}>Lincoln</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                <Text style={styles.desTxt1}>Hamilton</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                <Text style={styles.desTxt1}>Lincoln</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ListContent2}>
                            <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                            <View>
                                <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                <Text style={styles.desTxt1}>Sacramento</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}
