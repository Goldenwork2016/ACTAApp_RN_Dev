import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import ActiveExersiceScreen from './ActiveExersiceScreen';

import {ThemeConstants} from '../../theme/themeConstants';
import {ThemeContext} from '../../App';

export default class ReadyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processNumber: '',
            Timer: '',
            flag:false
        };
    }

    componentDidMount = () => {
        // this.setState({processNumber:this.props.navigation.getParam("processNumber")})
        this.state.Timer = setInterval(async () => {
            await this.setState({ processNumber: ++this.state.processNumber })
            if (this.state.processNumber == 4) {
                clearInterval(this.state.Timer);
                await this.setState({flag:true})
            }else{
                await this.setState({flag:false})
            }
        }, 1000);
    }

    // gotoNextScreen = () =>{
    //     this.props.navigation.navigate("ProgramWorkoutInfoScreen", {theme: theme})
    // }

    back = () => {
        this.props.navigation.navigate("ProgramWorkoutDetailScreen")
    }

    render() {
        return (<ThemeContext.Consumer>
          {({ theme }) => (
            <View style={{...styles.container, backgroundColor: ThemeConstants[theme].backgroundColor}}>
                {
                    this.state.flag == true ?
                        <ActiveExersiceScreen gotoNextScreen = {()=>{  this.props.navigation.navigate("ProgramWorkoutInfoScreen", {theme: theme})}} back={this.back} /> :
                        <View style={styles.headerContent}>
                            <ProgressCircle
                                percent={this.state.processNumber * 25}
                                radius={100}
                                borderWidth={3}
                                color={ThemeConstants[theme].textColorTitle}
                                shadowColor={ThemeConstants[theme].borderBottomWorkouts}
                                bgColor={ThemeConstants[theme].backgroundColor}
                                outerCircleStyle={{}}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{...styles.processTxt, color: ThemeConstants[theme].textColorTitle}}>{this.state.processNumber}</Text>
                                </View>
                            </ProgressCircle>
                            <Text style={styles.GetTxt}>Get redy in ...</Text>
                        </View>
                }
            </View>)}
 </ThemeContext.Consumer>);
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
