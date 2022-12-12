const express=require('express');
const app=express();
const PORT=process.env.PORT || 8084;

app.get('/',(req,res)=>{
    res.send("DOCKER ASSIGNMENT")
})
 
app.get('/proj',(req,res)=>{
    res.send("GET API")
})

app.listen(PORT,()=>{
    console.log("App is running");
})