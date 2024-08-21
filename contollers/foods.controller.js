//R - FOR READING 

import Food from "../model/foods.models.js";

export const FoodLists = (req,res)=>{

};

//C - FOR CREATING 

export const FoodCreate = async(req,res)=>{
    console.log(req.body);
    const newFood = new Food({
        title:req.body.title,
        description:req.body.description,
    });
    try {
        const food = await newFood.save();
        return res.status(201).json(food)
        
    } catch (error) {
        return res.status(400).json({message:error.message});
        
    }
};

//U -FOR UPDATE

export const FoodUpdate = (req,res)=>{

};

//D - FOR DELETE

export const FoodWaste = (req,res)=>{

};