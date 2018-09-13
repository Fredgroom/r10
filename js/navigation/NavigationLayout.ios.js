import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AboutContainer } from '../screens/About';
import { colours } from '../config/styles';
import { FavesContainer } from '../screens/Faves';
import { ScheduleContainer } from '../screens/Schedule';
import { SessionContainer } from '../screens/Session';
import { SpeakerContainer } from '../screens/Speaker'
import { MapContainer } from '../screens/Map'
import { sharedNavigationOptions } from './config';

const AboutStack = createStackNavigator(
    {
        About: AboutContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation)
        })
    }
);

const FavesStack = createStackNavigator(
    {
        Faves: FavesContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation)
        })
    }
);

const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleContainer,
        Session: SessionContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation),
            initialRouteName: 'Schedule'
        })
    }
);

const MapStack = createStackNavigator(
    {
        Map: MapContainer
    }, {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation)
        })
    }
);

export default createBottomTabNavigator(
    {
        Schedule: { screen: ScheduleStack },
        Map: { screen: MapStack },
        Faves: { screen: FavesStack },
        About: { screen: AboutStack },
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'About') {
                    iconName = `ios-information-circle`;
                } else if (routeName === 'Faves') {
                    iconName = `ios-heart`;
                } else if (routeName === 'Map') {
                    iconName = `ios-map`;
                } else if (routeName === 'Schedule') {
                    iconName = `ios-calendar`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: colours.white,

            labelStyle: {
                fontSize: 10,
            },
            style: {
                backgroundColor: colours.black,
            },
        },
    }
);