import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import http from './services/http.service';
import user from './services/user.service';
import render from './services/render.service';
import programs from './services/program.service';
import exercise from './services/exercise.service';
import workout from './services/workout.service';
import {Store_Service} from './services/store.service';
import {MongoService, RenderService} from 'wrcom';
import RootNavigator from './RootNavigation';
const theme = {}

export default class App extends Component {
	constructor(props){
		super(props);
        Store_Service({
            database: {
                collections: [{
                    name: 'exercise',
                    opts: {
                        query: {
                                active: (doc)=>{
                                    return doc.active;
                                }
                            },
                       groups: {
                            workout: (doc)=>{
                               return doc.workout;
                            }
                        }
                    }
                }, {
                    name: 'program',
                    opts: {
                        query: {
                                workout: (doc)=>{
                                    return doc.workout;
                                }
                            },
                       groups: {
                            workout: (doc)=>{
                                return doc.workout;
                            }
                        }
                    }
                }, {
                    name: 'workout',
                    opts: {
                        query: {
                                workout: (doc)=>{
                                    return doc.workout;
                                }
                            },
                       groups: {
                            workout: (doc)=>{
                                return doc.workout;
                            }
                        }
                    }
                }, {
                    name: 'user',
                    opts: {
                        query: {
                                workout: (doc)=>{
                                    return doc.workout;
                                }
                            },
                       groups: {
                            workout: (doc)=>{
                                return doc.workout;
                            }
                        }
                    }
                 }
                ]
            }
        });
		render();
		http();
		user();
        programs();
        exercise();
        workout();
        MongoService();
        RenderService();
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
