const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello World from server")
});

app.get('/about',(req,res)=>{
    res.send("Hello World from about server")
});

app.listen(3000);