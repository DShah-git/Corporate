// @ts-ignore
import { gamedata } from "../db/game"
import { json } from "@sveltejs/kit";


// @ts-ignore
export async function GET(requestEvent){
    const {request} = requestEvent;
    
    let code = request.url.split('=')[request.url.split('=').length-1]
    console.log(code)
    
    let data = await gamedata.findOne({code:code})

    if(data){
        return json({"message":"gameFound"},{status:201})
    }
    else{
        return json({"message":"game not found, please check code"},{status:400})
    }

    
    
}