import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';

import { withNavigation } from "react-navigation";

import NonImage from '../../Assets/Images/nopicture.png'

import config, { BASE_PATH } from "../../Api/config"

const options = {
    title: 'Choose Photo',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library'
}

class AccountSettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentList: [
                {
                    ImageUrl: require("../../Assets/Images/workout.png")
                },
                {
                    ImageUrl: require("../../Assets/Images/workout.png")
                }
            ],
            contentList1: [
                {
                    Title: 'SUMMER READY',
                    ImageUrl: require("../../Assets/Images/program1.png")
                },
                {
                    Title: 'KELLY WINTERS',
                    ImageUrl: require("../../Assets/Images/program2.png")
                },
                {
                    Title: 'COUPLE WORKOUT',
                    ImageUrl: require("../../Assets/Images/program3.png")
                }
            ],
            avatarSource: NonImage,
            avatarURL: '',
            timeFlag: false,
            isloading: false,
            isflag: '',
            Timer: null,
            isModalVisible1: false,
            isModalVisible2: false,
            UserName: '',
            Email: '',
            phoneNumber: '',
            birthday: '',
            measurement: '',
            connectivity: ''
        };
        this.getInfo();
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            console.log('sdfsfsdfddddddddddd++++++++++++++++++=sdfsdfsd')
            this.getInfo()
        });
    }

    getInfo = () => {
        fetch(config.auth.userInfo, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then(async (responseJson) => {
                if (responseJson['status'] == 200) {
					window.user = responseJson.body;
                    console.log("_____________________________________________________")
                    console.log(BASE_PATH + responseJson.body.avatarUrl)
                    await this.setState({ UserName: responseJson.body.name })
                    await this.setState({ Email: responseJson.body.email })
                    await this.setState({ avatarSource: BASE_PATH + responseJson.body.avatarUrl })
                    if (responseJson.body.email == "" || responseJson.body.email == null || responseJson.body.email == undefined) {
                        await this.setState({ Email: "-" })
                    } else {
                        await this.setState({ Email: responseJson.body.email })
                    }
                    console.log(responseJson.body.email)
                    if (responseJson.body.phone == "" || responseJson.body.phone == null || responseJson.body.phone == undefined) {
                        await this.setState({ phoneNumber: "-" })
                    } else {
                        await this.setState({ phoneNumber: responseJson.body.phone })
                    }
                    if (responseJson.body.data.birthday == "" || responseJson.body.data.birthday == null || !responseJson.body.data.birthday) {
                        await this.setState({ birthday: "-" })
                    } else {
                        await this.setState({ birthday: responseJson.body.data.birthday })
                    }
                    if (responseJson.body.data.measurement == "" || responseJson.body.data.measurement == null || !responseJson.body.data.measurement) {
                        await this.setState({ measurement: "-" })
                    } else {
                        await this.setState({ measurement: responseJson.body.data.measurement })
                    }
                    if (responseJson.body.data.connectivity == "" || responseJson.body.data.connectivity == null || !responseJson.body.data.connectivity) {
                        await this.setState({ connectivity: "-" })
                    } else {
                        await this.setState({ connectivity: responseJson.body.data.connectivity })
                    }

                }
            })
            .catch((err) => {
                console.log('JSON.stringify(err)=>', err);
            })
    }

    NetworkSensor = async () => {
        await this.setState({
            timeFlag: true,
            isLoading: false
        })
        alert('network error')
    }


    chooseImage = () => {
        ImagePicker.showImagePicker(options, async (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log(response.uri)
                const source = { uri: response.uri };
                const URL = response.data;
                await this.setState({ avatarURL: URL });
                let details = {
                    'dataUrl': "data:image/jpeg;base64," + this.state.avatarURL,
                };
                var myTimer = setTimeout(function () { this.NetworkSensor() }.bind(this), 25000)
                this.setState({ isLoading: true })

                let formBody = [];
                for (let property in details) {
                    let encodedKey = encodeURIComponent(property);
                    let encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetch(config.auth.profilePicture, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formBody
                })
                    .then((response) => response.json())
                    .then(async (responseJson) => {
                        this.setState({ isLoading: false })
                        clearTimeout(myTimer)
                        if (responseJson['status'] == 200) {
                            console.log(responseJson)
                            this.setState({ isModalVisible1: true })
                            this.getInfo()
                            setTimeout(() => {
                                this.setState({ isModalVisible1: false })
                            }, 2000)
                        } else if (responseJson['status'] == 400) {
                            this.setState({ isModalVisible2: true })
                        }
                    })
                    .catch((err) => {
                        console.log('JSON.stringify(err)=>', err);
                        if (!timeFlag) {
                            this.setState({ isLoading: false })
                            this.setState({ isModalVisible2: true })
                            clearTimeout(myTimer);
                        } else {
                            this.setState({ timeFlag: false })
                        }
                    })
            }
        });
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


    logout = async () => {
        fetch(config.auth.logout, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((responseJson) => {
                if (responseJson['status'] == 200) {
                    AsyncStorage.setItem('loggedIn', "");
                    this.props.navigation.navigate("Auth")
                }
            })
            .catch((err) => {
                console.log('JSON.stringify(err)=>', err);
            })
    }

    render() {
        const avatarSource = this.state
        return (
            <View style={styles.container2}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Uploading profile picture...'}
                    textStyle={{ color: 'white' }}
                />
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground1}>
                            <View style={styles.header}>
                                <TouchableOpacity style={{ ...styles.BackBtn, marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={styles.headerTxt}>SETTINGS</Text>
                                </View>
                            </View>
                            <View>
                                <View style={styles.profileArea}>
                                    <Image source={{ uri: this.state.avatarSource.toString() }} resizeMode='cover' style={styles.PersonProfileImage} />
                                </View>
                                <TouchableOpacity style={styles.EditImageBtn} onPress={() => { this.chooseImage() }}>
                                    <Image source={require('../../Assets/Images/EditImage.png')} resizeMode='stretch' style={styles.EditImage} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Content}>
                            <TouchableOpacity style={styles.ListContent2} onPress={() => this.props.navigation.navigate("AccountEditScreen")}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Name</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{this.state.UserName}</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2} onPress={()=>{this.props.navigation.navigate("EditEmailScreen",{isEmail:true})}}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Email</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{this.state.Email}</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2}  onPress={()=>{this.props.navigation.navigate("EditEmailScreen",{isEmail:false})}}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Mobile</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{this.state.phoneNumber}</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2} onPress={()=>{this.props.navigation.navigate("EditBirthdayScreen")}}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Birthday</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{this.state.birthday}</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2} onPress={()=>{this.props.navigation.navigate("EditMeasurement")}}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Measurement Units</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{this.state.measurement}</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2} onPress={()=>{window.us.form={header: 'My Address', title: 'Address', placeholder: 'Fill Address', field: 'address'}; this.props.navigation.navigate("ProfileEdit")}}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Address</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{window.us.data.address||'-'}</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ListContent2} onPress={()=>{this.props.navigation.navigate("EditConnectivity")}}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...styles.desTxt1, fontSize: 18 }}>Connectivity</Text>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>{this.state.connectivity}</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.QuitWorkout1} onPress={() => { this.logout() }}>
                                <Text style={styles.Dismiss1}>Logout</Text>
                            </TouchableOpacity>
                            <Text style={{ ...styles.desTxt1, fontSize: 13, textAlign: "center", color: 'white' }}>VERSION 1.023</Text>
                            <View style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Privacy Policy</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.ListContent2}>
                                <View style={{ width: '100%' }}>
                                    <View style={styles.ListContent4}>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Term & Conditions</Text></Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../Assets/Images/RightIcon.png')} resizeMode='stretch' style={styles.RightIcon1} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Modal isVisible={this.state.isModalVisible1}>
                    <View style={{ ...styles.modalView, backgroundColor: '#111012' }}>
                        <Image source={require('../../Assets/Images/logo.png')} resizeMode='stretch' style={{ width: 40, height: 38, marginBottom: 20 }} />
                        <Text style={styles.Description1}>Picture uploaded successfully!</Text>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalVisible2}>
                    <View style={styles.modalView}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <Text style={styles.Description2}>Uploading faild. Please try again.</Text>
                        <TouchableOpacity style={styles.QuitWorkout2} onPress={() => this.setState({ isModalVisible2: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default withNavigation(AccountSettingScreen);