import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Question = ({comments, component, main, options, prompts, question, subdomain}) => {
    
    return(
        <View>
            <Text>Comments: {comments}</Text>
            <Text>Component: {component}</Text>
            <Text>Main: {main}</Text>
            <Text>Prompts: {prompts}</Text>
            <Text>Question: {question}</Text>
            <Text>Subdomain: {subdomain}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Question;