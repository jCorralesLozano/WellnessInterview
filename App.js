import React from 'react';
// import {Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MenuScreen from './src/screens/MenuScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import HomeButton from './src/components/HomeButton'
import {CollapseNavigatorProvider} from './src/context/CollapseNavigatorContext';
import SideMenu from './src/components/SideMenu';

const navigator = createStackNavigator(
    {
        Menu: {
            screen: MenuScreen,
            navigationOptions: () => ({
                title: 'Menu Screen',
                headerRight:(
                    <HomeButton />
                )
            })
        },
        Question: {
            screen: QuestionScreen,
            navigationOptions: () => ({
                title: 'QuestionScreen'
            })
        },
    },
    {
        initialRouteName: 'Menu',
        defaultNavigationOptions: {
            title: 'Wellness Interview'
        }
    }
);

const DrawerNavigator = createDrawerNavigator({
    navigator,
    // MenuScreen
},{
    contentComponent: SideMenu,
    initialRouteName: 'navigator',
    defaultNavigationOptions:{
        title: 'Menu Screen'
    }
});

const App = createAppContainer(DrawerNavigator);
export default () => {
    return(
        <CollapseNavigatorProvider>
            <App />
        </CollapseNavigatorProvider>
    );
};