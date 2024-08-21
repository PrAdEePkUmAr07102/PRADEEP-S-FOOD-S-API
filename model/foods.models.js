import { model, Schema } from "mongoose";

//WRITE SCHEMA

const schema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    
});

const Food = model("Food",schema);

export default Food;