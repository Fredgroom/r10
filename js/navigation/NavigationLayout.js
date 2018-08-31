import React from 'React';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AboutContainer } from '../screens/About';
import { ScheduleContainer } from '../screens/Schedule';
import { FavesContainer } from '../screens/Faves';
import { MapContainer } from '../screens/Map';
import { colours, fonts } from '../config/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AboutStack = createStackNavigator(
    {
        About: AboutContainer,
    },
    {
        headerMode: 'none',
    },

);

const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleContainer,
    },
    {
        headerMode: 'none',
    },

);

const MapStack = createStackNavigator(
    {
        Map: MapContainer,
    },
    {
        headerMode: 'none',
    },

);

const FavesStack = createStackNavigator(
    {
        Faves: FavesContainer,
    },
    {
        headerMode: 'none',
    },

);


// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack,


    },
    
    {
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