import express from 'express';
import dotenv from 'dotenv';
import DBConnection from './config/db.js';

dotenv.config();

const app = express();

app.listen(process.env.PORT, (req,res) => {
    console.log(`Server is listening to PORT:${process.env.PORT}`);
    DBConnection();
});


