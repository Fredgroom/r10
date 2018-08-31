import React from 'React';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AboutContainer } from '../screens/About';
import { ScheduleContainer } from '../screens/Schedule';
import { FavesContainer } from '../screens/Faves';
import { MapContainer } from '../screens/Map';
import { colours, fonts } from '../config/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from './config';




const AboutStack = createStackNavigator(
    {
        About: AboutContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: navigation.state.routeName,
        })
    }
);


const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: navigation.state.routeName,
        })
    }
);

const MapStack = createStackNavigator(
    {
        Map: MapContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: navigation.state.routeName,
        })
    }
);

const FavesStack = createStackNavigator(
    {
        Faves: FavesContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: navigation.state.routeName,
        })
    }
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
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Schedule') {
                    iconName = `ios-calendar`;
                } else if (routeName === 'Map') {
                    iconName = `ios-map`;
                } else if (routeName === 'Faves') {
                    iconName = `ios-heart`;
                } else if (routeName === 'About') {
                    iconName = `ios-information-circle`
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
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
                fontFamily: fonts.light,
            },
        },
    }

);