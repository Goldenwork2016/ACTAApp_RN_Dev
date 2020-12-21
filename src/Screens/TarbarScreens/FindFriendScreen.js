import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'
export default class ActivityPoundsScreen extends Component {
    constructor(props) {
        super(props);
		window.render.add('users', ()=>{
			this.setState({reload: !this.state.reload});
		});
        this.state = {
			reload: true,
			search: ''
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
                    <View style={{ width: '100%', paddingBottom:35, backgroundColor: '#111012' }}>
                        <TextInput placeholder="Search for friends" placeholderTextColor="white" onChangeText={(e) => this.setState({ search: e })} style={{...styles.SendInputTxt, backgroundColor:'black', color:'white', fontSize:18}} />
                        <TouchableOpacity style={styles.sendBtn}>
                            <Image source={require('../../Assets/Images/SearchImage.png')} resizeMode='stretch' style={styles.SearchImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContent}>
                        <View style={styles.pendingArea}>
                            <Text style={styles.timeTxt}>Suggestions based on current community</Text>
                        </View>
						
						{ window.us.users.filter((user)=>{
							if(window.us._id == user._id) return false;
							if(window.us.data.follow[user._id]) return false;
							if(!this.state.search) return true;
							return user.name.indexOf(this.state.search)>-1;
						}).map(user=>{
							return (
								<View style={styles.ListContent2}>
									<Image source={{
									uri: 'https://acta.webart.work'+user.avatarUrl
									}} resizeMode='stretch' style={styles.activityImage} />
									<View>
										<Text style={styles.desTxt}>{user.name}</Text>
										<Text style={styles.desTxt1}>{user.data.address||''}</Text>
									</View>
									<TouchableOpacity onPress={()=>{ window.us.data.follow[user._id]=true; window.us.update(); this.setState({reload: this.state.reload}) }} style={styles.followBtn}>
										<Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 13 }}>Follow</Text>
									</TouchableOpacity>
								</View>
							)	
						}) }
                    </View>
                </ScrollView>
            </View >
        );
    }
}