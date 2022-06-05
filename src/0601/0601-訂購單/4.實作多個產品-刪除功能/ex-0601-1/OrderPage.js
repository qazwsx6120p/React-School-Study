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
  return productArray.map((v) => ({ ...v, count: 1 }));
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
  //設定productsInOrder的狀態
  const [productsInOrder, setProductsInOrder] = useState(initState(products));

  const totalNumber = () => {
    let result = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      //利用for迴圈將每次productsInOrder跑出來的數量+0 = 總數量
      result += productsInOrder[i].count;
    }

    return result;
  };

  const totalPrice = () => {
    let result = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      //利用for迴圈將每次productsInOrder跑出來的數量 x
      //利用for迴圈將每次productsInOrder跑出來的價格 + result(0) = 總價格
      result += productsInOrder[i].count * productsInOrder[i].price;
    }

    return result;
  };

  return (
    <div className="card">
      <div className="row">
        {/* 將更新完的商品列表 跟 設定商品列表狀態的函數傳給 OrderList */}
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        {/* 將總數量跟總價格的值傳給 Summary */}
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  );
}

export default OrderPage;
