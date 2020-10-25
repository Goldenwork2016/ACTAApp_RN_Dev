import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import ActiveExersiceScreen from './ActiveExersiceScreen'

export default class ReadyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processNumber: '',
            Timer: ''
        };
    }

    componentDidMount = () => {
        this.state.Timer = setInterval(async () => {
            await this.setState({ processNumber: ++this.state.processNumber })
            if (this.state.processNumber == 4) {
                clearInterval(this.state.Timer);
            }
        }, 1000);
    }

    gotoNextScreen = () =>{
        this.props.navigation.navigate("ProgramWorkoutInfoScreen")
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.processNumber == 4 ?
                        <ActiveExersiceScreen gotoNextScreen = {this.gotoNextScreen} /> :
                        <View style={styles.headerContent}>
                            <ProgressCircle
                                percent={this.state.processNumber * 25}
                                radius={100}
                                borderWidth={3}
                                color="white"
                                shadowColor="#111012"
                                bgColor="#000"
                                outerCircleStyle={{}}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.processTxt}>{this.state.processNumber}</Text>
                                </View>
                            </ProgressCircle>
                            <Text style={styles.GetTxt}>Get redy in ...</Text>
                        </View>
                }
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'black',
        justifyContent: "center"
    },
    processTxt: {
        fontSize: 50,
        width: 50,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'TrumpSoftPro-BoldItalic'
    },
    GetTxt: {
        color: '#82828f',
        fontFamily: 'FuturaPT-Book',
        fontSize: 20, marginTop: 50
    },
    headerContent: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center'
    },
})
