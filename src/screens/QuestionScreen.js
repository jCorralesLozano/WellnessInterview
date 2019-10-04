import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useResults from '../hooks/useResults.js';
import QuestionList from '../components/QuestionList.js';
import {filterSubdomainArray} from '../hooks/HelperFunctions.js'


var headerTitle = '';

const QuestionScreen = ({navigation}) => {
    const [fetchQuestion, results, errorMessage] = useResults();

    /* when this screen is navigate to, the navigation prop will have an additional param named 
    'subdomain'. We retrieve the value to determine the questions from which subdomain to display */
    const subdomain = navigation.getParam('subdomain', 'something');

    /* update headerTitle so that it can be used in navigationOptions */
    headerTitle = subdomain;
    console.log(`headerTitle: ${headerTitle}`);

    /* returns an array with questions pertinent to the given subdomain */
    const questionList = filterSubdomainArray(subdomain, results);

    /* function will filter through and return an array of items with the same subdomain */
    return(
        <View style={styles.container}>
            <Text>Subdomain: {subdomain}</Text>
            <QuestionList results={results} questionList={questionList} />
        </View>
    );
};

QuestionScreen.navigationOptions = ({navigation}) => {
    return{
        title: "Question Huh?! <3",
        headerTitle: headerTitle
    };
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 15
    }
});

export default QuestionScreen;