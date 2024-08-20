import express from "express";

const app = express();
const PORT = 7070;


//CRUD FUNCTIONALITY OF PRADEEPS FOODS

//R - FOR READING 

app.get("/foods",()=>{});

//C - FOR CREATING 

app.post("/foods",()=>{});

//U -FOR UPDATE

app.put("/foods/1",()=>{});

//D - FOR DELETE

app.delete("/foods/2",()=>{});


app.get("/",(req,res)=>{
    res.json({PRADEEPS_KITCHEN : "HELLO BUDDY! WHAT TYPE OF FOOD YOU NEED?"});
});

app.listen(PORT,()=>{
    console.log(`The Server Is Running at http://localhost:${PORT}`);
    
});