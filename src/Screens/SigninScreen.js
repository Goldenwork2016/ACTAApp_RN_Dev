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
                <ImageBackground source={require('../Assets/Images/SigninBackground.png')} resizeMode='stretch' style={styles.ImageBackground}>
                    <Image source={require('../Assets/Images/AlphaImage.png')} resizeMode='stretch' style={styles.AlphaImage}/>
                    <View style={styles.mainContainer}>
                        <Text style={styles.headerTxt}>LOG IN WITH.</Text>
                        <TouchableOpacity style={styles.emailBtn} onPress={()=>this.props.navigation.navigate("SigninEmailScreen")}>
                            <Text style={styles.EmailTxt}>Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.phoneBtn} onPress={()=>this.props.navigation.navigate("SigninPhoneScreen")}>
                            <Text style={styles.PhoneTxt}>Phone</Text>
                        </TouchableOpacity>
                        <Text style={styles.nomemberTxt}>No membership yet?</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("SigninScreen")}>
                            <Text style={styles.LoginTxt}>Create Account</Text>
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
    CREATEwithImage:{
        width:240,
        height:53,
        alignSelf:"center",
        marginBottom:30
    },
    DesignedImage:{
        width:185,
        height:23,
        alignSelf:"center",
        marginBottom:30
    },
    LoginImage:{
        width:150,
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
        width:325, 
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
        fontSize:20,
        fontFamily:'FuturaPT-Demi',
    },
    PhoneTxt:{
        fontSize:20,
        color:'white',
        fontFamily:'FuturaPT-Demi',
    },
    LoginTxt:{
        fontFamily:'FuturaPT-Demi',
        color:'white',
        fontSize:22,
        textAlign:"center"
    },
    nomemberTxt:{
        fontFamily:'FuturaPT-Book', 
        color:'#82828f', 
        fontSize:20, 
        textAlign:"center", 
        marginBottom:20
    },
    headerTxt:{
        fontFamily:'TrumpSoftPro-BoldItalic', 
        color:'white', 
        fontSize:62, 
        textAlign:"center", 
        marginBottom:20, 
        lineHeight:70
    }
})
