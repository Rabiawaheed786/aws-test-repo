//index.js
const express = require("express")
const { timeStamp } = require("node:console")

const app = express()
const PORT = process.env.PORT ?? 3000

//-------------------------heaith check api
app.get("/", (req, res)=>{
    res.status(200).send("health check passed: server is active !" )
})

//------------------------------------response api
app.get("/api", (req, res)=>{
    return res.json({
        message: "i m get api on ECS machine ",
        developer: "Rabia",
        cloud: "AWS",
        timeStamp: new Date()
    })
})



app.listen(PORT, ()=>{console.log(`server is up and running on ${PORT}`)})