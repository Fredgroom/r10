import { createStackNavigator } from 'react-navigation';
import { AboutContainer } from '../screens/About';

const RootStack = createStackNavigator({
    About: {
        screen: AboutContainer,
        navigationOptions: {
            title: 'About',
        },
    },
}, 
{   initialRouteName: 'About',
}
);

export default RootStack;  