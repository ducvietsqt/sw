import axios from 'axios';
import {AsyncStorage} from 'react-native';
// Add a request interceptor
let axiosInstance = axios.create();

let _storeData = async () => {
    try {
        await AsyncStorage.setItem('token', 'I like to save it.');
    } catch (error) {
        // Error saving data
    }
};
let _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
};

let getAccessTokenFromCookies = () => {

};
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //If the header does not contain the token and the url not public, redirect to login
    let accessToken = getAccessTokenFromCookies();

    //if token is found add it to the header
    if (accessToken) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = accessToken;
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);

});

export default axiosInstance;
