import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req:Request, res: Response){
  try {
    const {name, icon} = req.body;

    const category = await Product.create({name, icon});

    res.status(201).json({category});
  } catch(error)  {
    console.error(error);
    res.sendStatus(500);
  }
}
