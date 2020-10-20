import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';

export default class SigninScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../Assets/Images/CreateBackgroundImage.png')} resizeMode='stretch' style={styles.ImageBackground}>
                    <Image source={require('../Assets/Images/AlphaImage.png')} resizeMode='stretch' style={styles.AlphaImage}/>
                    <View style={styles.mainContainer}>
                        <Image source={require('../Assets/Images/CREATEwithImage.png')} resizeMode='stretch' style={styles.CREATEwithImage}/>
                        <TouchableOpacity style={styles.emailBtn}>
                            <Text style={styles.EmailTxt}>Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.phoneBtn}>
                            <Text style={styles.PhoneTxt}>Phone</Text>
                        </TouchableOpacity>
                        <Image source={require('../Assets/Images/AlreadyhaveImage.png')} resizeMode='stretch' style={styles.DesignedImage}/>
                        <Image source={require('../Assets/Images/LoginImage.png')} resizeMode='stretch' style={styles.LoginImage}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ImageBackground: {
        width: '100%',
        height: '100%'
    },
    AlphaImage: {
        width: '100%',
        height: '100%',
        position:'absolute',
    },
    CREATEwithImage:{
        width:240,
        height:53,
        alignSelf:"center",
        marginBottom:30
    },
    DesignedImage:{
        width:210,
        height:20,
        alignSelf:"center",
        marginBottom:30
    },
    LoginImage:{
        width:50,
        height:19,
        alignSelf:"center"
    },
    emailBtn:{
        width:330, 
        height:55, 
        backgroundColor:'white', 
        justifyContent:"center", 
        alignItems:"center", 
        alignSelf:'center',
        borderRadius:3,
        marginBottom:10
    },
    phoneBtn:{
        width:330, 
        height:52, 
        backgroundColor:'transparent', 
        justifyContent:"center", 
        alignItems:"center", 
        alignSelf:'center',
        borderRadius:3,
        marginBottom:30,
        borderWidth:2,
        borderColor:'white'
    },
    mainContainer:{
        position:'absolute',
        bottom:70,
        alignSelf:'center'
    },
    EmailTxt:{
        fontSize:20
    },
    PhoneTxt:{
        fontSize:20,
        color:'white'
    }
})
