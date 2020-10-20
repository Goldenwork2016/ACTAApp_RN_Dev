import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../Assets/Images/loginBackground.png')} resizeMode='stretch' style={styles.ImageBackground}>
                    <Image source={require('../Assets/Images/AlphaImage.png')} resizeMode='stretch' style={styles.AlphaImage}/>
                    <View style={styles.mainContainer}>
                        <Image source={require('../Assets/Images/PursueImage.png')} resizeMode='stretch' style={styles.PursueImage}/>
                        <Image source={require('../Assets/Images/DesignedImage.png')} resizeMode='stretch' style={styles.DesignedImage}/>
                        <TouchableOpacity style={styles.createBtn} onPress={()=>this.props.navigation.navigate("CreateScreen")}>
                            <Text>Create Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("SigninScreen")}>
                            <Image source={require('../Assets/Images/LoginImage.png')} resizeMode='stretch' style={styles.LoginImage}/>
                        </TouchableOpacity>
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
    PursueImage:{
        width:200,
        height:100,
        alignSelf:"center",
        marginBottom:35
    },
    DesignedImage:{
        width:262,
        height:20,
        alignSelf:"center",
        marginBottom:35
    },
    LoginImage:{
        width:46,
        height:19,
        alignSelf:"center"
    },
    createBtn:{
        width:330, 
        height:55, 
        backgroundColor:'white', 
        justifyContent:"center", 
        alignItems:"center", 
        alignSelf:'center',
        borderRadius:3,
        marginBottom:30
    },
    mainContainer:{
        position:'absolute',
        bottom:70,
        alignSelf:'center'
    }
})
