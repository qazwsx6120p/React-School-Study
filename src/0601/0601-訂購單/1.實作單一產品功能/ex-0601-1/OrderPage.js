import './OrderPage.css';
import OrderList from './components/OrderList/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';
//模仿從資料庫引入
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  // {
  //   id: 2,
  //   name: '黑色 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 400,
  // },
];

function OrderPage() {
  //設定數量狀態，初始值為1 <--商品的數量
  const [count, setCount] = useState(1);

  //計算總數量
  const totalNumber = () => {
    return count;
  };
  //計算總金額
  const totalPrice = () => {
    //return 數量 * products索引0的price = totalPrice
    return count * products[0].price;
  };

  return (
    <div className="card">
      <div className="row">
        {/* 傳送設定數量的函數、數量、商品的物件給 OrderList */}
        <OrderList setCount={setCount} count={count} products={products} />
        {/* 傳送運算好的值給Summary，要傳送函數呼叫，不是函數 */}
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  );
}

export default OrderPage;
