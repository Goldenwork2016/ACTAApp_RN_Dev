import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class ActivityPoundsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
			users: [],
			search: ''
        };
		fetch('https://acta.webart.work/api/user/get', {
			method: "GET"
		}).then(resp=>resp.json()).then(resp=>{
			this.setState({
				users: resp.body
			});
		});
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
                        <TextInput placeholder="Search for friends" placeholderTextColor="white" onChangeText={(e) => this.setState({ search: e })} style={{...styles.SendInputTxt, backgroundColor:'black', color:'white', fontSize:20}} />
                        <TouchableOpacity style={styles.sendBtn}>
                            <Image source={require('../../Assets/Images/SearchImage.png')} resizeMode='stretch' style={styles.SearchImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContent}>
                        <View style={styles.pendingArea}>
                            <Text style={styles.timeTxt}>Suggestions based on current community</Text>
                        </View>
						
						{ this.state.users.filter((user)=>{
							if(!this.state.search) return true;
							else return user.name.indexOf(this.state.search)>-1;
						}).map(user=>{
							let name = user.name.split(' ')[0];
							let surname = user.name.split(' ');
							if(surname.length>1) surname=surname[1];
							else surname = '';
							return (
								<View style={styles.ListContent2}>
									<Image source={{
									uri: 'https://acta.webart.work'+user.avatarUrl
									}} resizeMode='stretch' style={styles.activityImage} />
									<View>
										<Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{name}</Text></Text>
										<Text style={styles.desTxt1}>{surname}</Text>
									</View>
									<TouchableOpacity style={styles.followBtn}>
										<Text style={{ color: 'white', fontFamily: 'FuturaPT-Book', fontSize: 15 }}>Follow</Text>
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


