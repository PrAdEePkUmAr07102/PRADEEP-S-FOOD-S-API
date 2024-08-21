import { model, Schema } from "mongoose";

const schema = new Schema({
    title:String,
    description:String,
});

const Food = model("Food",schema);

export default Food;