import {Container} from './styles';
import OrdersBoard from '../OrdersBoard';
import { Order } from '../../types/Order';


const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668472896991-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668473462705-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

function Orders() {
  return (
    <Container>
      <OrdersBoard icon={'🕑'} title='Fila de espera'  orders={orders}/>
      <OrdersBoard icon={'👩‍🍳'} title='Em produção' orders={orders} ></OrdersBoard>
      <OrdersBoard icon={'✅'} title='Pronto'  orders={orders}/>
    </Container>
  );
}

export default Orders;