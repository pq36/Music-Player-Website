const express=require('express');
const app=express();
const port=3000;
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/songs',(req,res)=>{
    res.sendFile(__dirname+'/public/song.html');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/login.html');
});
app.listen(port,()=>{
    console.log("listen");
});
