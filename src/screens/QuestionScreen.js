import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useResults from '../hooks/useResults.js';
import QuestionList from '../components/QuestionList.js';
import {getQuestionIndex, filterSubdomainArray} from '../hooks/HelperFunctions.js'


var headerTitle = '';

const QuestionScreen = ({navigation}) => {
    const [fetchQuestion, results, errorMessage] = useResults();

    /* when this screen is navigated to, the navigation prop will have an additional param named 
    'subdomain'. We retrieve the value to determine the questions from which subdomain to display */
    const subdomain = navigation.getParam('subdomain', 'something');

    /* update headerTitle so that it can be used in navigationOptions */
    headerTitle = subdomain;

    /* returns an array with questions pertinent to the given subdomain */
    const questionList = filterSubdomainArray(subdomain, results);
    
    /* For some reason, when React first renders this component, questionList is set to an empty array.
    Thus, trying to access its values results in errors. Console logging its contents suggest that this component is rendered
    twice, and it isn't until the second render that questionList actually contains data. I should research as to why */
    if(questionList.length > 0){
        /* retrieve the index of the first occurrence of the given subdomain */
        const questionIndex = getQuestionIndex(results, questionList[0].QUESTION);

        /* function will filter through and return an array of items with the same subdomain */
        return(
            <View style={styles.container}>
                <Text>Subdomain: {subdomain}</Text>
                <QuestionList 
                    results={results} 
                    questionIndex={questionIndex} 
                    questionList={questionList} 
                    navigation={navigation}
                />
            </View>
        );
    }else{
        return null;
    }

};

QuestionScreen.navigationOptions = ({navigation}) => {
    return{
        title: "Question Huh?! <3",
        headerTitle: 'Wellness Interview'
    };
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 15
    }
});

export default QuestionScreen;