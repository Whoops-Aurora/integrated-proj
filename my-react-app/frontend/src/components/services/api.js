import axios from 'axios';
const baseUrl = 'http://localhost:5000'



 export const getClubs = async() =>{
    let results = await axios.get(`${baseUrl}/clubs/`)
    return results?.data
 }

