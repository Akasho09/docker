import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req:any, res:any) => {
    res.json({
        message: "Healthy server new"
    })
})

app.post("/", async (req:any, res:any) => {
    try {
        console.log("heree2")
        await client.user.create({
            data: {
                email: req.body.email,
                name: req.body.name
            }
        })
        res.json({
            message: "Done signing up!"
        })
    } catch(e){
        console.log("error" , e)
    }
})

app.listen(3000);