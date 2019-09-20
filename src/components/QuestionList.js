import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Question from './Question';

const QuestionList = ({results}) => {
    return(
        <View>
            <Text>->Response from url: https://olfactory.brainaging.uci.edu/acct-ad/fullassessment/test.json</Text>
            <Text>->Results Length:{results.length}</Text>
            <FlatList
                data={results}
                keyExtractor={() => String(Math.floor(Math.random() * 99999))}
                renderItem={({item}) => {
                    return(
                        <View style={styles.question}>
                            <Question 
                                comments={item.COMMENTS}
                                component={item.COMPONENT}
                                main={item.MAIN}
                                options={item.OPTIONS}
                                prompts={item.PROMPTS}
                                question={item.QUESTION}
                                subdomain={item.SUBDOMAIN}
                            />
                        </View>
                    );
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    question:{
        marginBottom: 25
    }
});

export default QuestionList;