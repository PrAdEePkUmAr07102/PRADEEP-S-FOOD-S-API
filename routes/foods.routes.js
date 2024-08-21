import express from "express";
import { FoodCreate, FoodDetail, FoodLists, FoodUpdate, FoodWaste } from "../contollers/foods.controller.js";

const router = express.Router();

//R - FOR READING 

router.get("/",FoodLists);

// TO SEE A FOOD IN DETAIL:
router.get("/:id",FoodDetail);

//C - FOR CREATING 

router.post("/",FoodCreate);


//U -FOR UPDATE

router.put("/:id",FoodUpdate);

//D - FOR DELETE

router.delete("/:id",FoodWaste);


export default router;