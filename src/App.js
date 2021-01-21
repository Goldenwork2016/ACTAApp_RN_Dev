import React, { Component } from 'react';
import http from './services/http.service';
import user from './services/user.service';
import achievements from './services/achievements.service'
import render from './services/render.service';
import programs from './services/program.service';
import exercise from './services/exercise.service';
import workout from './services/workout.service';
import {Store_Service} from './services/store.service';
import {MongoService, RenderService} from 'wrcom';
import RootNavigator from './RootNavigation';
import {ThemeConstans} from './theme/themeConstants';

import AsyncStorage  from '@react-native-community/async-storage';

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
        achievements();
        programs();
        exercise();
        workout();
        MongoService();
        RenderService();
	}
     state = {
        theme: 'light',
        isOn: false
    };

    toggleTheme = () => {
            this.setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light',
                })
            );
             //AsyncStorage.setItem('storage_theme', theme)    
             this.setState(({ isOn }) => ({
            isOn: isOn === false ? true : false,
         }));     
    };
    // componentDidMount (){
    //      AsyncStorage.getItem('@storage_theme').then((theme) =>{
    //     if(theme){
    //         this.setState({theme: theme})
    //     }
    //    });
    // }
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
