import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import CollapseNavigatorContext from '../context/CollapseNavigatorContext';
import SubMenu from './SubMenu';

const SideMenu = () => {
    const {data, toggleCollapse} = useContext(CollapseNavigatorContext);

    return(
        <View style={styles.navigationContainer}>
            <ScrollView>
                <TouchableOpacity onPress={() => toggleCollapse(0)}>
                    <Text style={styles.subdomainContainer}>category 1</Text>
                </TouchableOpacity>
                <SubMenu 
                    value={data[0]} 
                    style={styles.subdomainContainer}
                />
                <TouchableOpacity onPress={() => toggleCollapse(1)}>
                    <Text style={styles.subdomainContainer}>category 2</Text>
                </TouchableOpacity> 
                <SubMenu 
                    value={data[1]} 
                    style={styles.subdomainContainer}
                />
                <TouchableOpacity onPress={() => toggleCollapse(2)}>
                    <Text style={styles.subdomainContainer}>category 3</Text>
                </TouchableOpacity>
                <SubMenu 
                    value={data[2]} 
                    style={styles.subdomainContainer}
                />
            </ScrollView>
        </View>
    );      
};

const styles = StyleSheet.create({
    navigationContainer: {
        paddingTop: 20,
        height: '100%',
        // backgroundColor: 'blue'
    },
    subdomainContainer:{
        paddingVertical: 10,
        fontSize: 18,
        color: 'blue',        // text color
        alignSelf: 'stretch',   // aligns items on the cross axis
        // backgroundColor: 'red',
        marginBottom: 10,
    }
});

export default SideMenu;