import axios from 'axios'

//import utils
import {setItem, getItem, removeItem} from '../utilities/localStorage.utility'

const API_URL="http://localhost:8800/auth/"
//function to register User
export const register =(username, email, password) => {
    return axios
    .post(API_URL+"signup", {
        username,
        email,
        password
    })
}

//Login the user
export const login = (username, password) => {
    return axios
    .post(API_URL+"signin", {
        username,
        password
    })
    .then((response)=>{
        //Check if the response of user has accessToken
        if(response.data.accessToken){
            setItem('user', response.data)
        }
        return response.data
    })
}

//logout the user
export const logout = () => {
    removeItem('user')
}

//get current user
export const getCurrentUser = () => {
    return getItem('user')
}