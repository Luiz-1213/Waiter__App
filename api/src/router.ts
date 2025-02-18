import { Router } from 'express';

export const router = Router();
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';

// list categories
router.get('/categories',listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products',(request, response)=>{
  response.send('ok');
});

// create product
router.post('/products', (request, response)=>{
  response.send('ok');
});

// get products by category
router.get('/categories/:categoryId/products', (request, response)=>{
  const id = request.params.categoryId;
  response.send(id);
});

// list order
router.get('/orders', (request, response)=>{
  response.send('ok');
});

// create order
router.post('/orders', (request, response)=>{
  response.send('ok');
});

// change order status
router.patch('/orders/:orderId', (request, response)=>{
  response.send('ok');
});

// Delete/cancel order
router.delete('/orders/:orderId', (request, response)=>{
  response.send('ok');
});
