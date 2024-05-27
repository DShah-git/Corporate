// @ts-ignore
import { gamedata } from "../../db/game";
import { json } from "@sveltejs/kit";


// @ts-ignore
export async function PUT(requestEvent){
    const {request} = requestEvent;
    const data = await request.json()
    let code = data.code

    let gameDataObj = {
        "code":code,
        "words":[]
    }

    let res = await gamedata.insertOne(gameDataObj)

    if(res.acknowledged==true){
        return json({"code":code,message:"Lobby Created", ...res},{status:201});
    }
    else{
        return json({"code":code,message:"Failed to create lobby", ...res},{status:500});
    }
    
}

// @ts-ignore
export async function POST(requestEvent){
    const {request} = requestEvent;
    const data = await request.json()
    let code = data.code

    console.log(code)
    let res = await gamedata.findOne({code:code}) 
    console.log(res)
    if(res){
        return json({"code":code, ...res },{ status:201 });
    }
    else{
        return json({"code":code, message:"Not Found" },{ status:400 });
    }

   
    
}