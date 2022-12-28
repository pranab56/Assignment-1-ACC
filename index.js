const express = require('express');
const router = require('./routes/user');
const app=express();
const port=process.env.PORT ||5000;

app.use(express.json());
app.use('/user',router)


app.get('/',(req,res)=>{
    res.send('database')
})

app.listen(port,()=>{
    console.log('database running');
})