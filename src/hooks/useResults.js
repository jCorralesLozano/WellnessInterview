import {useEffect, useState} from 'react';
import brainaging from '../api/brainaging.js';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchQuestion = async () => {
        try{
            const response = await brainaging.get('fullassessment/test.json');
            // console.log(response.data.ASSESSMENT.PAGE[0]);
            setResults(response.data.ASSESSMENT.PAGE);
        }catch(e){
            setErrorMessage('Something went wrong');
        }
    };

    /* call fetchQuestion when component is first rendered */
    useEffect(() => {
        fetchQuestion('fullassessment/test.json');
    }, []);

    return [fetchQuestion, results, errorMessage];
};