import './OrderPage.css';
import OrderList from './components/OrderList/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '黑色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 500,
  },
];

// 擴充原本的product屬性，多一個記錄數量屬性(count)
// map語法
const initState = (productArray) => {
  return productArray.map((v, i) => ({ ...v, count: 1 }));
};

// for迴圈
// const initState = (productArray) => {
//   const state = []

//   for (let i = 0; i < productArray.length; i++) {
//     state.push({ ...productArray[i], count: 1 })
//   }

//   return state
// }

function OrderPage() {
  //ex.
  //[
  //  {
  //   id: 1,
  //   name: '咖啡色 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 300,
  //   count: 1
  //   }
  // ]
  const [productsInOrder, setProductsInOrder] = useState(initState(products)); //<--回傳商品陣列過去

  const totalNumber = () => {
    let result = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      //用for迴圈跑出總共有幾個productsInOrder[i].count並加起來
      //假如購物車有三個商品，那就有三個商品陣列，裡面各有三個count: 1
      //總數量就為result(0)+1+1+1=3
      result += productsInOrder[i].count;
    }

    return result;
  };

  const totalPrice = () => {
    let result = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      //用for迴圈跑出總共有幾個productsInOrder[i].count跟productsInOrder[i].price
      //假如有三個商品，，那就有三個商品陣列，裡面各有三個count: 1，三個prixe: 500(不一定)
      //總數價格就為 result(0)+ (1 x 500)... <--看有幾個商品
      result += productsInOrder[i].count * productsInOrder[i].price;
    }

    return result;
  };

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  );
}

export default OrderPage;
