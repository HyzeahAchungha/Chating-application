import mongoose from "mongoose";


const MesssageSchema = new mongoose.Schema({
    chatId:{
        type:String
    },
    senderId:{
        type:String
    },
    text:{
        type:String
    }
},{
    timestamps:true
}
)
const MessageModel = mongoose.model("Message", MesssageSchema)
export default  MessageModel