import express from "express"
import cors from "cors"
import { connectDB } from "./database/connection.js";
import Data from "./models/data.js";




const app=express()
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true
  }));
  app.use(express.json())
const port=process.env.PORT || 8000

connectDB()

app.post("/api/data",async(req,res)=>{
  try {
    const jsonData=req.body;
    const data=new Data(jsonData)
    await data.save()
    res.status(201).json({ message: 'Data saved successfully', data });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})



app.listen(port,()=>{
    console.log(`Server live at ${port}`)
})

