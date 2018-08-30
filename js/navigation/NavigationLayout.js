import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {AboutContainer} from '../screens/About';

const AboutStack = createStackNavigator(
    {
        About: { screen: AboutContainer},
    },
    {
        headerMode: 'none',
    }
);


// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator({
    About: AboutStack,
});