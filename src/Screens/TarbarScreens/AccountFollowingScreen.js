import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class ActivityFollowingScreen extends Component {
    constructor(props) {
        super(props);
		window.render.add('users', ()=>{
			this.setState({reload: !this.state.reload});
		});
        this.state = {
			reload: true,
            toggleFlag: true
        };
    }

    componentDidMount(){
        this.setState({toggleFlag: this.props.navigation.getParam("ddd")})
    }
    render() {
        return (
            <View style={{ ...styles.container, backgroundColor: 'black' }}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground}>
                            <View style={styles.header}>
                                <TouchableOpacity style={{ ...styles.BackBtn, marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={styles.headerTxt}>CONNECTIONS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={this.state.toggleFlag?styles.createBtn:styles.createBtn1} onPress={() => { this.setState({ toggleFlag: true }) }}>
                                <Text style={this.state.toggleFlag?styles.CreateTxt:styles.CreateTxt1}>Following</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={this.state.toggleFlag?styles.createBtn1:styles.createBtn} onPress={() => { this.setState({ toggleFlag: false }) }}>
                                <Text style={this.state.toggleFlag?styles.CreateTxt1:styles.CreateTxt}>Followers</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%' }}>
                        {this.state.toggleFlag ?
                            <View style={styles.mainContent}>
                                <Text style={styles.numberTxt}>{window.core.each(window.us.data.follow).length}</Text>
								{
									window.core.each(window.us.data.follow).map(userId=>{
										let user = window.us._users[userId]||{data:{}};
                                        if(!user._id) return;
										return (
											 <View style={styles.ListContent2}>
												<Image source={{
													uri: 'https://acta.webart.work'+user.avatarUrl
													}} resizeMode='stretch' style={styles.activityImage} 
												/>
												<View>
													<Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{user.name}</Text></Text>
													<Text style={styles.desTxt1}>{user.data.address}</Text>
												</View>
												<TouchableOpacity onPress={()=>{ window.us.data.follow[user._id]=false; window.us.update(); this.setState({reload: this.state.reload}) }}  style={styles.unfollowBtn}>
													<Text style={styles.btnTxt}>Unfollow</Text>
												</TouchableOpacity>
											</View>
										)
									})
								}
                            </View> :
                            <View style={styles.mainContent}>
                                <Text style={styles.numberTxt}>{window.core.each(window.us.followers).length}</Text>
                                {
                                    window.core.each(window.us.follow).map(userId=>{
                                        let user = window.us._users[userId]||{data:{}};
                                        if(!user._id) return;
                                        return (
                                             <View style={styles.ListContent2}>
                                                <Image source={{
                                                    uri: 'https://acta.webart.work'+user.avatarUrl
                                                    }} resizeMode='stretch' style={styles.activityImage} 
                                                />
                                                <View>
                                                    <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{user.name}</Text></Text>
                                                    <Text style={styles.desTxt1}>{user.data.address}</Text>
                                                </View>
                                                <TouchableOpacity onPress={()=>{ window.us.data.follow[user._id]=!window.us.data.follow[user._id]; window.us.update(); this.setState({reload: this.state.reload}) }}   style={styles.followBtn}>
                                                    <Text style={styles.btnTxt}>{ window.us.data.follow[user._id] && "Unfollow" || "Follow" }</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
