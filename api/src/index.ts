import 'dotenv/config';
import path from 'node:path'
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

const databaseURL = process.env.DATABASE_URL;

if(!databaseURL){
  throw new Error('Database URL is required');
}


mongoose.connect(databaseURL)
  .then(()=>{
    const app = express();
    const port = process.env.PORT;

    app.use('/uploads', express.static(path.resolve(__dirname, '../', 'uploads')))
    app.use(express.json());

    app.use(router);

    app.listen(port, ()=>{
      console.log(`🚀 Server is running on http://localhost:${port} `);
    });


  })
  .catch(()=> console.log('Falha na conexão ao mongoDB'));





