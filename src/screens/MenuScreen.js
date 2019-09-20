import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import CollapseNavigatorContext from '../context/CollapseNavigatorContext';

const MenuScreen = ({navigation}) => {
    /* data: lets us know which MAIN categories have been collapsed
    toggleCollapse: callback function to toggle the collapse functionality */
    const {data, toggleCollapse} = useContext(CollapseNavigatorContext);

    return(
        <View style={styles.container}>
            <Text>Main Screen</Text>  
            <Button 
                title="Go to Question Screen"
                onPress={() => navigation.navigate('Question')}
            />
            <Button 
                title="Toggle Drawer"
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <Button 
                title="Toggle Collapse Menu"
                onPress={() => toggleCollapse(0)}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 15
    }
});

export default MenuScreen;