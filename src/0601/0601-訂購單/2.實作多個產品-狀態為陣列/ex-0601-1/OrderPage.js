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
// console.log(products);

// --為初始化狀態設一個陣列回傳
// 傳入products陣列，回傳 [1,1....]
const initState = (productArray) => {
  //宣告一個空陣列
  const state = [];
  //利用for迴圈每跑一次就push一個1進去state空陣列
  for (let i = 0; i < productArray.length; i++) {
    state.push(1);
  }
  //回傳push完1的state陣列給initState
  return state;
};

// 與上述函式同功能
// fill() 方法會將陣列中索引的第一個到最後一個的每個位置全部填入一個靜態的值。
// const initState = (productArray) => Array(productArray.length).fill(1);

function OrderPage() {
  //ex. [1,1] 代表 [產品1數量1, 產品2數量1]
  //const [counts, setCounts] = useState([1,1]);
  //將狀態設回陣列
  const [counts, setCounts] = useState(initState(products)); //<--函示呼叫(傳入值為products陣列)

  //useState陣列的值相加
  const totalNumber = () => {
    let result = 0; //先設一個0的值
    for (let i = 0; i < counts.length; i++) {
      result += counts[i]; //result(0) + 每個counts的第i個值相加 = 總數量
    }
    return result;
  };
  const totalPrice = () => {
    let result = 0;
    for (let i = 0; i < counts.length; i++) {
      //result(0)+counts的第i個值 x products的第i個值的price = 總價格
      result += counts[i] * products[i].price;
    }
    return result;
  };
  return (
    <div className="card">
      <div className="row">
        {/* 將更改數量的函示、狀態更新的數量、產品物件傳送給OrderList */}
        <OrderList setCounts={setCounts} counts={counts} products={products} />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  );
}
export default OrderPage;
