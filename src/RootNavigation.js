import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import CreateScreen from './Screens/CreateScreen';
import SigninScreen from './Screens/SigninScreen';
import SigninEmailScreen from './Screens/SigninEmailScreen';
import SigninPhoneScreen from './Screens/SigninPhoneScreen';
import CreateEmailScreen from './Screens/CreateEmailScreen';
import CreatePhoneScreen from './Screens/CreatePhoneScreen';
import CreatePasswordScreen from './Screens/CreatePasswordScreen';
import CreateFirstnameScreen from './Screens/CreateFirstnameScreen';
import CreatePreferenceScreen from './Screens/CreatePreferenceScreen';
import PhoneVerificationScreen from './Screens/PhoneVerificationScreen';
import TabBarScreen from './TabBarNavigation'


const AuthStack = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        CreateScreen: {
            screen: CreateScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        SigninScreen: {
            screen: SigninScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        SigninEmailScreen: {
            screen: SigninEmailScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        SigninPhoneScreen: {
            screen: SigninPhoneScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        CreateEmailScreen: {
            screen: CreateEmailScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        CreatePhoneScreen: {
            screen: CreatePhoneScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        CreatePasswordScreen: {
            screen: CreatePasswordScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        CreateFirstnameScreen: {
            screen: CreateFirstnameScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        CreatePreferenceScreen: {
            screen: CreatePreferenceScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        PhoneVerificationScreen: {
            screen: PhoneVerificationScreen,
            navigationOptions: {
                headerShown: false
            }
        },
    },
    {
        initialRouteName: 'LoginScreen'
    }
)

const AppStack = createStackNavigator({
    Tabbar: {
        screen: TabBarScreen,
        navigationOptions: {
            headerShown: false
        }
    },
})

// const App = createAppContainer(RootNavigation);
// export default App;


export default createAppContainer(
    createSwitchNavigator(
        {
            Splash: SplashScreen,
            Auth: AuthStack,
            App: AppStack
        },
        {
            initialRouteName: 'Splash'
        }
    )
);