import express from "express";
import foodRoutes from "./routes/foods.routes.js"
import connectDB from "./lib/dB.js";

const app = express();
const PORT = 7070;


//DATA UNDERSTANDING MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//CONNECTDB:
connectDB();

//CRUD FUNCTIONALITY OF PRADEEPS FOODS
app.use("/foods",foodRoutes);



app.get("/",(req,res)=>{
    res.json({PRADEEPS_KITCHEN : "HELLO BUDDY! WHAT TYPE OF FOOD YOU NEED?"});
});

app.listen(PORT,()=>{
    console.log(`The Server Is Running at http://localhost:${PORT}`);
    
});