import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, ScrollView} from 'react-native';
import Answer from './Answer';
import {getQuestionIndex, switchSubdomain} from '../hooks/HelperFunctions';

const QuestionList = ({results, questionIndex, questionList, navigation}) => {
    /* state variable to keep track of which question should be displayed to the user */
    const [index, setIndex] = useState(getQuestionIndex(results, results[questionIndex].QUESTION));

    return(
        <ScrollView>
            <Text>Subdomain: {results[index].SUBDOMAIN}</Text>
            <Text>Comments: {results[index].COMMENTS}</Text>
            <Text>Component: {results[index].COMPONENT}</Text>
            <Text>Main: {results[index].MAIN}</Text>
            <Text>Prompts: {results[index].PROMPTS}</Text>
            <Text>Question: {results[index].QUESTION}</Text>
            <Text>State Value: {index}</Text>
            <Button
                title="Next"
                onPress={() => setIndex(index + 1)}
            />
            <Button
                title="Previous"
                onPress={() => setIndex(index - 1)}
            />
            <Answer 
                optionList={results[index].OPTIONS}
                contextIndex={getQuestionIndex(results, results[index].QUESTION)}
            />
        </ScrollView>
    );
};

QuestionList.navigationOptions = ({navigation}) => {
    return{
        title: "Question Huh?! <3",
        headerTitle: 'headerTitle'
    };
};

const styles = StyleSheet.create({
    question:{
        marginBottom: 25
    }
});

export default QuestionList;