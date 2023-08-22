const http = require('http');

const express = require('express');
//const { create } = require('domain');
const index= express();

index.use((req,res,next)=>{
    console.log('In the middleware');
    next();//Allows the request to continue to the next middleware 
})

index.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Welcome to our country</h1>');
})

const server = http.createServer(index);

server.listen(3001);