import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import http from './services/http.service';
import user from './services/user.service';
import render from './services/render.service';
import programs from './services/program.service';
import exercise from './services/exercise.service';
import RootNavigator from './RootNavigation';
const theme = {}

export default class App extends Component {
	constructor(props){
		super(props);
		render();
		http();
		user();
        programs();
        exercise();
	}
    render() {
        return (
            <>
                {/* <StatusBar hidden={true} /> */}
                <RootNavigator />
            </>
        );
    }
}
