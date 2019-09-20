/* This component serves as the */
import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import CollapseNavigatorContext from '../context/CollapseNavigatorContext';
import SubMenu from './SubMenu';
import FindCategory from '../hooks/FindCategory';
import useResults from '../hooks/useResults.js';

const SideMenu = () => {
    const {data, toggleCollapse} = useContext(CollapseNavigatorContext);
    /* only the results array is used */
    const [fetchQuestion, results, errorMessage] = useResults();
    /* results is used as an input to find unique values of the MAIN category */
    const mainCategory = FindCategory(results, "MAIN");
    
    var index = 0;

    return(
        <View style={styles.navigationContainer}>
            <ScrollView>
                <FlatList
                    data={mainCategory}
                    keyExtractor={() => String(Math.floor(Math.random() * 999999))}
                    renderItem={({item, index}) => {
                        return(
                            <View>
                                <TouchableOpacity onPress={() => toggleCollapse(index)}>
                                    <Text style={styles.subdomainContainer}>{item}</Text>
                                </TouchableOpacity>
                                <SubMenu 
                                    value={data[index]} 
                                    style={styles.subdomainContainer}
                                    screen='Question'
                                />
                            </View>
                        );
                    }}
                />
                
                <TouchableOpacity onPress={() => toggleCollapse(1)}>
                    <Text style={styles.subdomainContainer}>category 2</Text>
                </TouchableOpacity> 
                <SubMenu 
                    value={data[1]} 
                    style={styles.subdomainContainer}
                    screen='Question'
                />
                <TouchableOpacity onPress={() => toggleCollapse(2)}>
                    <Text style={styles.subdomainContainer}>category 3</Text>
                </TouchableOpacity>
                <SubMenu 
                    value={data[2]} 
                    style={styles.subdomainContainer}
                    screen='Question'
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