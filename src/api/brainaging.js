import axios from 'axios';

export default axios.create({
    baseURL: 'https://olfactory.brainaging.uci.edu/acct-ad/',
    // baseURL: 'https://facebook.github.io/react-native/',
});
