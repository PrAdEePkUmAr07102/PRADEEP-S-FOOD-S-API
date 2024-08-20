import express from "express";

const app = express();
const PORT = 7070;


app.get("/",(req,res)=>{
    res.json({PRADEEPS_KITCHEN : "HELLO BUDDY! WHAT TYPE OF FOOD YOU NEED?"});
});

app.listen(PORT,()=>{
    console.log(`The Server Is Running at http://localhost:${PORT}`);
    
});