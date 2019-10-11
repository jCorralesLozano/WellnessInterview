import {useEffect, useState} from 'react';
import brainaging from '../api/brainaging.js';
import axios from 'axios';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    /* cancel token */
    let source = axios.CancelToken.source();

    /* makes the network request to pull question data */
    const fetchQuestion = async () => {
        try{
            const response = await brainaging.get('fullassessment/test.json', {
                cancelToken: source.token
            });
            setResults(response.data.ASSESSMENT.PAGE);
        }catch(e){
            if(axios.isCancel(e)){
                console.log('Caught cancel');
            }else{
                throw e;
            }
            setErrorMessage('Something went wrong');
        }
    };

    /* call fetchQuestion when component is first rendered */
    useEffect(() => {
        fetchQuestion('fullassessment/test.json');
    }, []);

    return [fetchQuestion, results, errorMessage, source];
};