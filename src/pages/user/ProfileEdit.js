import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default class AccountEditScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			isModalVisible1: false,
			isModalVisible2: false
		};
	}
	update(){
		if(!this.state.value){
			return this.setState({ isModalVisible2: true });
		}
		window.us.data[window.us.form.field] = this.state.value;
		this.setState({ isModalVisible1: true });
		window.us.update(()=>{
			setTimeout(() => {
				this.setState({ isModalVisible1: false });
				this.props.navigation.goBack();
			}, 2000);      
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.BackBtn} onPress={() => this.props.navigation.goBack()}>
						<Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
					</TouchableOpacity>
					<Text style={styles.headerTxt}>{window.us.form.header}</Text>
				</View>
				<Text style={styles.TitleTxt}>{window.us.form.title}</Text>
				<TextInput placeholder="{window.us.form.placeholder}" placeholderTextColor="#53535f" defaultValue={window.us.data[window.us.form.field]} style={styles.EmailInputTxt} onChangeText={(e) => this.setState({ value: e })} />
				<TouchableOpacity style={styles.emailBtn} onPress={() => this.update()}>
					<Text style={styles.EmailTxt}>Save</Text>
				</TouchableOpacity>
				<Modal isVisible={this.state.isModalVisible1}>
					<View style={{ ...styles.modalView, backgroundColor: '#111012' }}>
						<Image source={require('../../Assets/Images/logo.png')} resizeMode='stretch' style={{ width: 40, height: 38, marginBottom: 20 }} />
						<Text style={styles.Description1}>Your {window.us.form.field} changed successfully!</Text>
					</View>
				</Modal>
				<Modal isVisible={this.state.isModalVisible2}>
					<View style={styles.modalView}>
						<Text style={styles.TitleTxt1}>OOPS!</Text>
						<Text style={styles.Description2}>Please input {window.us.form.field}.</Text>
						<TouchableOpacity style={styles.QuitWorkout2} onPress={() => this.setState({ isModalVisible2: false })}>
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
		paddingBottom: 37,
		borderBottomWidth: 0.25,
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
		fontFamily: 'FuturaPT-Book',
		color: 'white',
		fontSize: 27,
		textAlign: "center",
		marginBottom: 10,
		lineHeight: 50,
		marginTop: 25
	},
	desTxt: {
		fontFamily: 'FuturaPT-Book',
		color: '#82828f',
		fontSize: 20,
		textAlign: "center",
		marginBottom: 35
	},
	modalView: {
		width: '100%',
		height: 200,
		borderRadius: 5,
		alignSelf: 'center',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	TitleTxt1: {
		color: 'black',
		fontSize: 55,
		marginBottom: 25,
		fontFamily: 'TrumpSoftPro-BoldItalic',
		width: '100%',
		textAlign: "center"
	},
	Description2: {
		color: "black",
		fontSize: 23,
		marginBottom: 20,
		fontFamily: 'FuturaPT-Book'
	},
	QuitWorkout2: {
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
	},
	Description1: {
		color: 'white',
		fontSize: 25,
		marginBottom: 20,
		fontFamily: 'FuturaPT-Book'
	},
})
