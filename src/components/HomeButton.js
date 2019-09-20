import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const HomeButton = (props) => {
    return(
        <View style={styles.home}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Question')}>
                <AntDesign name="home" size={30} />
            </TouchableOpacity>
        </View>
    );    
};

const styles=StyleSheet.create({
    home: {
        paddingRight: 10
    }
});

export default withNavigation(HomeButton);