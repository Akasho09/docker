import express from 'express'

const app = express();

app.get("/" , ( req:any , res:any)=>{
    res.send("home pageeee")
})

app.listen(3000 , ()=>{
    console.log("started sever")
})