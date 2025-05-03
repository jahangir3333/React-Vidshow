const express=require('express');
const cors=require('cors')
const app=express();

app.use(cors())
app.use(express.json());

let server=app.post("/",
    (req,res)=>{
        console.log("Backend Code Invoked..")

    })

server.listen(8080)