import {StackNavigator} from 'react-navigation';
import {LoginScreen, ResetPasswordScreen, SetPasswordScreen, SignupScreen} from '../screens';
import TabNavigator from "./MainTabNavigator";
export default StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Signup: {
        screen: SignupScreen,
    },
    ResetPassword: {
        screen: ResetPasswordScreen,

    },
    SetPassword: {
        screen: SetPasswordScreen,
    },
    MainPage: {
        screen: TabNavigator,

    }
});




