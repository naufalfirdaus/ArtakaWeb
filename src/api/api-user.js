import axios from 'axios';
import config from '../config/config';

const signup = async(data)=>{
    try {
        const result = await axios.post(`${config.domainAuth}/signup`,data);
        return result;    
    } catch (error) {
        return error;
    }
}

const signin = async(data)=>{
    try {
        const result = await axios.post(`${config.domainAuth}/signin`,data);
        return result;    
    } catch (error) {
        return error;
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signin,
    signup
}