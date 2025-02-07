import express from 'express'

const app = express();

app.get("/" , ( req:any , res:any)=>{
    res.send("home pageeee 34")
})

app.listen(3000 , ()=>{
    console.log("started sever")
})