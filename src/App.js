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
import {themeConstans} from './theme/themeConstants';
const theme = {}

export const ThemeContext = React.createContext(null);


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
     state = {
        theme: 'dark',
        isOn: false
    };

    toggleTheme = () => {
            this.setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light',
         }));
             this.setState(({ isOn }) => ({
            isOn: isOn === false ? true : false,
         }));
    };
    render() {
        return (
            <>
                {/* <StatusBar hidden={true} /> */}
                <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme, isOn: this.state.isOn }} >
                    <RootNavigator />
                </ThemeContext.Provider>
            </>
        );
    }
}
