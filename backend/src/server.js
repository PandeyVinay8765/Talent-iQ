import express from 'express';
import { ENV } from './lib/env.js';

const app=express();
app.get('/',(req,res) => {
    res.status(201).json({msg:"backend working"})
})
app.listen(ENV.PORT,()=>{
    console.log(`server running on port ${ENV.PORT}`);
})