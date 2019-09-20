import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useResults from '../hooks/useResults.js';
import QuestionList from '../components/QuestionList.js';

const QuestionScreen = () => {
    navigationOptions = {
        title: 'Question'
    };

    // const [term, setTerm] = useState('');
    const [fetchQuestion, results, errorMessage] = useResults();

    // console.log(results[0].title);
    return(
        <View style={styles.container}>
            <QuestionList results={results} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 15
    }
});

export default QuestionScreen;