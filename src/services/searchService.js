import * as request from "~/utils/request";
import routes from "~/config/routes";

export const search = async(q, type=false)=>{
    try {
        const response = await request.get(routes.search, {
            params: {
                q,
                type
            }
        })
        return response
        
    } catch (error) {
        console.log(error);
    }
}