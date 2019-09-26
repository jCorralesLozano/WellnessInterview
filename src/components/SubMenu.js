import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
/* withNavigation allows this component access to the 'navigation' prop */
import {withNavigation} from 'react-navigation'; 
import useResults from '../hooks/useResults.js';
// import {Navigate} from '../hooks/HelperFunctions';

/* note that navigation is not sent as a prop in the SideMenu parent
component, it is available solely because we export this component
using withNavigation() */
const SubMenu = ({navigation, value, screen, main}) => {
    /* only the results array is used */
    const [fetchQuestion, results, errorMessage] = useResults();

    /* return a set that contains all the SUBDOMAINs for a given MAIN */
    const filterSubdomain = (main, results) => {
        let set = new Set(); // placeholder for the subdomains 
        for(let j = 0; j < results.length; j++){
            if(main == results[j].MAIN){
                set.add(results[j].SUBDOMAIN);
            }
        }
        return setToArray(set);
    };

    if(value == 0){
        return null;
    }else{
        return(
            <FlatList
                data={filterSubdomain(main, results)}
                keyExtractor={() => String(Math.floor(Math.random() * 999999))}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('Question', {subdomain: item})}>
                            <View style={styles.subMenuContainer}>
                                <Text style={styles.subMenu}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        );        
    }
};

/* converts a set to an array, this is important because the data
will be used in a FlatList component, which cannot work with sets */
const setToArray = (set) => {
    /* iterator used to loop through the set container */
    var it = set.values();
    
    /* new array that will hold the elements from set*/
    var array = [];
    for(let i = 0; i < set.size; i++){
        array.push(it.next().value);
    }    
    return array;
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