import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';

import HomeScreen from './Screens/TarbarScreens/HomeScreen'
import ExecicesScreen from './Screens/TarbarScreens/ExecicesScreen'
import ActivityScreen from './Screens/TarbarScreens/ActivityScreen'
import AccountScreen from './Screens/TarbarScreens/AccountScreen'
import HomeDropScreen from './Screens/TarbarScreens/HomeDropScreen'
import workoutsScreen from './Screens/TarbarScreens/workoutsScreen'
import ProgramDetailScreen from './Screens/TarbarScreens/ProgramDetailScreen'
import ProgramDetailStartScreen from './Screens/TarbarScreens/ProgramDetailStartScreen'
import ProgramWorkoutDetailScreen from './Screens/TarbarScreens/ProgramWorkoutDetailScreen'

const perfectSize = create(PREDEF_RES.iphoneX.dp);

const Home = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        HomeDropScreen: {
            screen: HomeDropScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'HomeDropScreen',
    }
);


Home.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName == "HomeDropScreen") {
                tabBarVisible = false;
            }
            else {
              tabBarVisible = true;
            }
        });
    }
    return {
        tabBarVisible
    };
};

const Exercices = createStackNavigator(
    {
        ExecicesScreen: {
            screen: ExecicesScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        workoutsScreen: {
            screen: workoutsScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        ProgramDetailScreen: {
            screen: ProgramDetailScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        ProgramDetailStartScreen: {
            screen: ProgramDetailStartScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        ProgramWorkoutDetailScreen: {
            screen: ProgramWorkoutDetailScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'ExecicesScreen',
    }
);

// Exercices.navigationOptions = ({ navigation }) => {
//     let tabBarVisible;
//     if (navigation.state.routes.length > 1) {
//         navigation.state.routes.map(route => {
//             if (route.routeName === "workoutsScreen") {
//                 tabBarVisible = false;
//             }
//             else {
//               tabBarVisible = true;
//             }
//         });
//     }
//     return {
//         tabBarVisible
//     };
// };
const Activity = createStackNavigator(
    {
        ActivityScreen: {
            screen: ActivityScreen,
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {
        initialRouteName: 'ActivityScreen',
    }
);

Activity.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName === "ActivityScreen") {
                tabBarVisible = true;
            }
            // else {
            //   tabBarVisible = true;
            // }
        });
    }
    return {
        tabBarVisible
    };
};

const Account = createStackNavigator(
    {
        AccountScreen: {
            screen: AccountScreen,
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {
        initialRouteName: 'AccountScreen',
    }
);

Account.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName === "AccountScreen") {
                tabBarVisible = true;
            }
            // else {
            //   tabBarVisible = true;
            // }
        });
    }
    return {
        tabBarVisible
    };
};

const TabNavigation = createBottomTabNavigator(
    {
        Home,
        Exercices,
        Activity,
        Account,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                //   let IconComponent = Icon;
                //   let iconName;
                var ImageUrl;
                if (routeName === 'Home') {
                    if (focused === true) {
                        tintColor = 'gray';
                        ImageUrl = require('./Assets/Images/HomeSelectImage.png')
                    } else {
                        ImageUrl = require('./Assets/Images/HomeUnselectImage.png')
                    }
                    return <Image source={ImageUrl} color={tintColor} style={{ width: 27, height: 23 }} />
                } else if (routeName === 'Exercices') {
                    if (focused === true) {
                        tintColor = 'gray';
                        ImageUrl = require('./Assets/Images/ExerciesSelectImage.png')
                    } else {
                        ImageUrl = require('./Assets/Images/ExerciesUnselectImage.png')
                    }
                    return <Image source={ImageUrl} color={tintColor} style={{ width: 27, height: 23 }} />
                } else if (routeName === 'Activity') {
                    if (focused === true) {
                        tintColor = 'gray';
                        ImageUrl = require('./Assets/Images/ActivitySelectImage.png')
                    } else {
                        ImageUrl = require('./Assets/Images/ActivityUnSelectImage.png')
                    }
                    return <Image source={ImageUrl} color={tintColor} style={{ width: 27, height: 23 }} />
                } else if (routeName === 'Account') {
                    if (focused === true) {
                        tintColor = 'gray';
                        ImageUrl = require('./Assets/Images/AcountSelectImage.png')
                    } else {
                        ImageUrl = require('./Assets/Images/AcountUnselectImage.png')
                    }
                    return <Image source={ImageUrl} color={tintColor} style={{ width: 27, height: 23 }} />
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            style: {
                backgroundColor: '#000',
                //----------add this line------------------------//
                height: perfectSize(70),
            },
            labelStyle: {
                marginTop: perfectSize(-10),
                marginBottom: perfectSize(10),
                fontSize: perfectSize(15),
                fontFamily:'FuturaPT-Book'
            },
        },
    },
);

export default createAppContainer(TabNavigation);