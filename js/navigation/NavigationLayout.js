import React from 'React';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AboutContainer } from '../screens/About';
import {colours, fonts} from '../config/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AboutStack = createStackNavigator(
    {
        About: { screen: AboutContainer },
    },
    {
        headerMode: 'none',
    },

);


// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
    {
        About: {
            screen: AboutStack,
        }
    }, 
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'About') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings') {
              iconName = `ios-options${focused ? '' : '-outline'}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
    
        tabBarOptions: {
            activeTintColor: colours.white,
            inactiveTintColor: colours.grey,
            labelStyle: {
                fontSize: 10,
            },
            style: {
                backgroundColor: colours.black,
                fontFamily: fonts.regular,
            },
        },
    }

);