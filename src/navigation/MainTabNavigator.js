import { createBottomTabNavigator as TabNavigator } from 'react-navigation';
import {HomeScreen, MessageScreen, PhotoScreen, SettingsScreen, GroupScreen, ActivityScreen} from '../screens';


export default TabNavigator({
    Home: { screen: HomeScreen },
    Messages: {screen: MessageScreen},
    Photos: {screen: PhotoScreen},
    Groups: { screen: GroupScreen },
    Activity: {screen: ActivityScreen},
    Settings: {screen: SettingsScreen},
})

