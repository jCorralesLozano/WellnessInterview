import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
/* withNavigation allows this component access to the 'navigation' prop */
import {withNavigation} from 'react-navigation'; 

/* note that navigation is not sent as a prop in the SideMenu parent
component, it is available solely because we are export this component
using withNavigation() */
const SubMenu = ({value, screen, navigation}) => {
    // console.log(navigation);
    if(value == 0){
        return null;
    }else{
        return(
            <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                <View style={styles.subMenuContainer}>
                    <Text style={styles.subMenu}>Question Screen</Text>
                </View>
            </TouchableOpacity>
        );        
    }
};

const styles = StyleSheet.create({
    subMenuContainer: {
        backgroundColor: 'lightgray',
        paddingVertical: 10,
        alignSelf: 'stretch',   // aligns items on the cross axis
    },
    subMenu: {
        fontSize: 16,
        color: 'blue',        // text color
        alignSelf: 'stretch',   // aligns items on the cross axis
        marginLeft: 10
    }
});

export default withNavigation(SubMenu);