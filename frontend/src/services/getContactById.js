import api_url from '../constants/api_url';


const getContactById= _id =>{
    return `${api_url}${_id}`;
}

export default getContactById;