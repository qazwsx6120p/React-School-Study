import React from 'react';
import ProductItem from './ProductItem';

function OrderList(props) {
  //將OderPage 傳送來的"商品列表"跟"更新商品列表狀態的函數"進行解構
  const { productsInOrder, setProductsInOrder } = props;

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
              商品項目
            </div>
          </div>
        </div>
        {/* 利用mpa將傳送過來"更新完狀態的商品列表"利用map跑出所有"更新完狀態的商品列表"的陣列 */}
        {productsInOrder.map((product, i) => {
          // 將map跑出的所有陣列解構賦值
          const { id, name, categroy, image, price, count } = product;

          return (
            //將map跑出的所有陣列的解構賦值傳送給ProductItem
            <ProductItem
              key={id}
              id={id}
              name={name}
              categroy={categroy}
              price={price}
              image={image}
              count={count}
              // 將 setCount (自己定義的函數)函數傳給 ProductItem
              // 由 ProductItem 呼叫 ProductItem 28行
              setCount={(newCount) => {
                // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
                // 注意要用map，因為要深拷貝到第一層的物件
                const newProductsInOrder = productsInOrder.map((value) => {
                  return { ...value };
                });

                // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount;

                // 3. 設定回原本的狀態中
                setProductsInOrder(newProductsInOrder);
              }}
              //傳送一個刪掉商品的方法過去ProductItem
              removeItem={() => {
                // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
                // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
                const newProductsInOrder = productsInOrder.filter(
                  (value, index) => {
                    // 先篩出當下的商品，回傳除了這個商品以外的結果
                    // 就是刪除該商品
                    return value.id !== product.id;
                  }
                );
                // 3. 設定回原本的狀態中
                setProductsInOrder(newProductsInOrder);
              }}
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
