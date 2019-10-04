import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, ScrollView} from 'react-native';
import Answer from './Answer';
import {getQuestionIndex} from '../hooks/HelperFunctions';

const QuestionList = ({results, questionList}) => {
    /* state variable to keep track of which question from 
    a given subdomain should be displayed to the user */
    const [questionIndex, setQuestionIndex] = useState(0);

    /* check to ensure question list is not empty when React first
    renders the screen*/
    if(questionList.length > 0 ){
        return(
            <ScrollView>
                <Text>Subdomain: {questionList[questionIndex].SUBDOMAIN}</Text>
                <Text>Comments: {questionList[questionIndex].COMMENTS}</Text>
                <Text>Component: {questionList[questionIndex].COMPONENT}</Text>
                <Text>Main: {questionList[questionIndex].MAIN}</Text>
                <Text>Prompts: {questionList[questionIndex].PROMPTS}</Text>
                <Text>Question: {questionList[questionIndex].QUESTION}</Text>
                <Text>State Value: {questionIndex}</Text>
                <Button
                    title="Next"
                    onPress={() => setQuestionIndex(questionIndex + 1)}
                />
                <Button
                    title="Previous"
                    onPress={() => setQuestionIndex(questionIndex - 1)}
                />
                <Answer 
                    optionList={questionList[questionIndex].OPTIONS}
                    contextIndex={getQuestionIndex(results, questionList[questionIndex].QUESTION)}
                />
            </ScrollView>
        );
    }else{
        return null;
    }
};

const styles = StyleSheet.create({
    question:{
        marginBottom: 25
    }
});

export default QuestionList;