//R - FOR READING 

import Food from "../model/foods.models.js";

export const FoodLists = async (req,res)=>{
    try {
        const foods = await Food.find();
        res.json(foods);
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }

};

//TO SEE A FOOD IN DETAIL 

export const FoodDetail = async(req,res)=>{
    try {
        const food = await Food.findById(req.params.id);
        if(food==null){
            return res.status(404).json({message:"Cannot Find A Food"});
        }else{
            res.json(food);
        }
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

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

export const FoodUpdate = async (req,res)=>{
    try {
        const updateFood = await Food.findOneAndUpdate(
            {_id: req.params.id},
            {
                title:req.body.title,
                description:req.body.description,
            },
            {
                new:true,
            }
        );
        res.status(200).json(updateFood); 
        
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }

};

//D - FOR DELETE

export const FoodWaste = async(req,res)=>{
    const foodId = req.params.id;
    try {
        await Food.deleteOne({_id:foodId})
        res.json({message:"Food Deleted!"});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }


};