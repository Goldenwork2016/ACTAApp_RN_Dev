import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, TextInput, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import config, { BASE_PATH } from "../Api/config";
import Modal from 'react-native-modal';


const { height, width } = Dimensions.get('window')
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// lowercase, uppercase, one numeric digit, one special character
let reg_strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
// numeric digit, uppercase, lowercase
let reg_average = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;

export default class CreatePasswordScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			email: '',
			phone: '',
			smscode: '',
			isEmail: ''
		};
	}

	componentDidMount = async () => {
		await this.setState({
			email: this.props.navigation.getParam("email"),
			phone: this.props.navigation.getParam("phone"),
			isEmail: this.props.navigation.getParam("isEmail"),
		})
		console.log(this.state.email)
	}

	handler = () => {
		const { smscode, email, phone, isEmail } = this.state
		if (smscode == "") {
			this.setState({
				modal: true
			});
		} else if (smscode.length != 6) {
			this.setState({
				modal: true
			});
		} else {
			fetch(config.auth.verify, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					sms: smscode
				})
			}).then((resp) => {
				return resp.json();
			}).then(resp => {
				console.log(resp);
				if (resp.message) {
					this.props.navigation.navigate("CreatePasswordScreen", { email: email, phone: phone, smscode: smscode, isEmail:isEmail })
				} else {
					this.setState({
						modal: true
					});
				}
			});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
						<Image source={require('../Assets/Images/BackBtn.png')} resizeMode='stretch' />
					</TouchableOpacity>
					<Text style={styles.headerTxt}>CREATE</Text>
				</View>
				<Text style={styles.TitleTxt}>CREATE.</Text>
				<Text style={styles.desTxt}>Input your pin code from SMS</Text>
				<TextInput keyboardType="number-pad" placeholder="6 digital code" placeholderTextColor="#53535f" style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ smscode: e })} />
				<TouchableOpacity style={styles.emailBtn} onPress={() => { this.handler() }}>
					<Text style={styles.EmailTxt}>Next</Text>
				</TouchableOpacity>
                <Modal isVisible={this.state.modal}>
                    <View style={styles.modalView1}>
                        <Text style={styles.TitleTxt1}>OOPS!</Text>
                        <View style={{width:"95%", alignSelf:'center'}}>
                            <Text style={styles.Description}>
								Please input correct 6 digital code.
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.QuitWorkout} onPress={() => this.setState({ modal: false })}>
                            <Text style={{ ...styles.Dismiss, color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center'
	},
	header: {
		marginTop: Platform.OS === 'ios' ? 60 : 20,
		width: "90%",
		alignItems: "center",
		paddingBottom: 41,
		borderBottomWidth: 1,
		borderColor: '#53535f'
	},
	LoginTxtImage: {
		marginTop: 45,
		width: 140,
		height: 52,
		alignSelf: "center",
		marginBottom: 30
	},
	EmailInputTxt: {
		width: 330,
		height: 50,
		backgroundColor: '#18171a',
		marginBottom: 8,
		borderRadius: 3,
		paddingLeft: 20,
		color: "white",
		fontSize: 20,
		fontFamily: 'FuturaPT-Book'
	},
	LoginwithTxtImage: {
		width: 300,
		marginTop: 5,
		marginBottom: 40
	},
	emailBtn: {
		width: 330,
		height: 55,
		marginTop: 15,
		backgroundColor: 'white',
		justifyContent: "center",
		alignItems: "center",
		alignSelf: 'center',
		borderRadius: 3,
		marginBottom: 10
	},
	BackBtn: {
		width: 26,
		height: 20,
		position: 'absolute',
		left: 10
	},
	ForgotPasswordImage: {
		marginTop: 15,
		width: 150,
		height: 20
	},
	EmailTxt: {
		fontSize: 20,
		fontFamily: 'FuturaPT-Demi',
	},
	headerTxt: {
		color: 'white',
		fontSize: 15,
		fontFamily: 'FuturaPT-Demi'
	},
	TitleTxt: {
		fontFamily: 'TrumpSoftPro-BoldItalic',
		color: 'white',
		fontSize: 62,
		textAlign: "center",
		marginBottom: 20,
		lineHeight: 70,
		marginTop: 35
	},
	desTxt: {
		fontFamily: 'FuturaPT-Book',
		color: '#82828f',
		fontSize: 20,
		textAlign: "center",
		marginBottom: 35
	},
    modalView1: {
        width: '100%',
        height: 350,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleTxt1: {
        color: 'black',
        fontSize: 55,
        marginTop: 30,
        marginBottom: 10,
        fontFamily: 'TrumpSoftPro-BoldItalic',
        width: '100%',
        textAlign: "center"
    },
    Description: {
        color: "black",
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'FuturaPT-Book',
        fontWeight:'bold',
		textAlign: 'center'
    },
    QuitWorkout: {
        width: 100,
        height: 45,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#18171A',
        borderColor: '#18171A'
    },
    Dismiss: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'FuturaPT-Medium'
    }
})
