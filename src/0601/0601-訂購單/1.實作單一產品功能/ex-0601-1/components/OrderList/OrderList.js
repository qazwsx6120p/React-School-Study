import React from 'react';
import ProductItem from './ProductItem';

function OrderList(props) {
  //先解構接到的props
  //數量、設定數量的方法、產品的物件
  const { count, setCount, products } = props;
  // {
  //   id: 2,
  //   name: '黑色 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 400,
  // },

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {/* 利用map將product的物件跑出來，並傳送給 ProductItem*/}
        {products.map((product, i) => {
          //將produs解構出來
          const { id, name, categroy, image, price } = product;

          return (
            <ProductItem
              //id={product.id} <--錯誤寫法先解構再傳送
              key={id} //<--用map跑出必須給一個key值，通常會用id值
              id={id}
              name={name}
              categroy={categroy}
              price={price}
              image={image}
              // 再將 更新完的數量、更新數量的函數 傳送給ProductItem
              count={count}
              setCount={setCount}
            />
          );
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
