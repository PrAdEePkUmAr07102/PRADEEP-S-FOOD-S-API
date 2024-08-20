import express from "express";

const router = express.Router();

//R - FOR READING 

router.get("/",(req,res)=>{
    res.send("Get A FOOD");
});

//C - FOR CREATING 

router.post("/",(req,res)=>{
    res.send("Make A Food");
});

//U -FOR UPDATE

router.put("/",(req,res)=>{
    res.send("Add some salt");
});

//D - FOR DELETE

router.delete("/",(req,res)=>{
    res.send("Don't waste food");
});


export default router;