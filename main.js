import express from "express";
import foodRoutes from "./routes/foods.routes.js"

const app = express();
const PORT = 7070;


//CRUD FUNCTIONALITY OF PRADEEPS FOODS
app.use("/foods",foodRoutes);



app.get("/",(req,res)=>{
    res.json({PRADEEPS_KITCHEN : "HELLO BUDDY! WHAT TYPE OF FOOD YOU NEED?"});
});

app.listen(PORT,()=>{
    console.log(`The Server Is Running at http://localhost:${PORT}`);
    
});