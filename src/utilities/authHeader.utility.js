import { getItem } from './localStorage.utility'

export default function authHeader() {
    //get user from local storage
    const user = getItem('user')
    //check user and if they have accessToken
    if(user && user.accessToken){
        return {'x-access-token': user.accessToken}
    }else { 
        return {}
    }
}