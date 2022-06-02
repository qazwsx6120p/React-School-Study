function ProductItem(props) {
  // 每個商品物件
  //    {
  //        id:1,
  //        name: '咖啡色 T-shirt',
  //        categroy:'Shirt',
  //        image:'https://i.imgur.com/1GrakTl.jpg',
  //        price:300
  //    }

  //先解構再傳值
  const { id, name, categroy, image, price, count, setCount } = props;

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{categroy}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              // 綁定onClick事件
              // 並用更新數量函數設定按一下-1 (count-1)
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {/* 計數器放上更新完的數量 */}
              {count}
            </a>
            <a
              href="#/"
              // 綁定onClick事件
              // 並用更新數量函數設定按一下+1 (count+1)
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${price} <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
