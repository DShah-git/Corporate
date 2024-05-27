// @ts-ignore
import { gamedata } from "../../../db/game";
import { json } from "@sveltejs/kit";


// @ts-ignore
export async function POST(requestEvent){
    const {request} = requestEvent;
    const data = await request.json()
    
    console.log(data)

    let game = await gamedata.findOne({code:data.code})

    if(!game){
        return json({message:"game not found"},{status:404})
    }
    
    
    
    game.words.push(data.entry)
    console.log(game)
    let res = await gamedata.updateOne({_id:game._id},{$set:{words:game.words}})
    
    if(!res){
        return json({message:"not able to add word"},{status:500})
    }

    return json({message:"word saved"},{status:201})
}