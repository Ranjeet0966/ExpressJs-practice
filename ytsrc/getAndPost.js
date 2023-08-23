const express=require('express')

const app=express()

const PORT=4000;


app.listen(PORT,()=>console.log('Server is running in ${PORT}'));

app.get('/movie',(req,res)=>{
    res.send([
        {
            id: 1,
            name:'Gadar-2'
        },
        {
            id:2,
            name:'Border'
        }
    ])
})