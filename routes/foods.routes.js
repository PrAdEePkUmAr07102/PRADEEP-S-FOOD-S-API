import express from "express";
import { FoodCreate, FoodLists, FoodUpdate, FoodWaste } from "../contollers/foods.controller.js";

const router = express.Router();

//R - FOR READING 

router.get("/",FoodLists);

//C - FOR CREATING 

router.post("/",FoodCreate);


//U -FOR UPDATE

router.put("/",FoodUpdate);

//D - FOR DELETE

router.delete("/",FoodWaste);


export default router;