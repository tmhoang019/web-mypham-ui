import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:3001'
})

export const get = async (path, params)=>{
    const response =  await request.get(path, params)
    return response.data
}

export default request