import * as request from "~/utils/request";

export const getCates = async()=>{
    try {
        const response = await request.get('/cates', {
            params: {}
        })
        return response
        
    } catch (error) {
        console.log(error);
    }
}