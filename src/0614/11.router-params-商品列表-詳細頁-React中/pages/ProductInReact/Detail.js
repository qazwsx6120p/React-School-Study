import { useEffect, useState } from 'react';
import { products } from '../../data/product-3c';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const [productInDetail, setProductInDetail] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });

  // productId需要事先在App.js的Route中定義
  //  <Route path="/product-detail/:productId">
  const { productId } = useParams();

  // didMount
  useEffect(() => {
    const item = products.find((v) => v.id === productId);
    setProductInDetail(item);
  }, []);

  return (
    <>
      <h1>商品詳細頁</h1>
      <p>商品名稱: {productInDetail.name}</p>
      <p>
        商品圖片: <img src={productInDetail.picture} alt="" />
      </p>
      <p>商品價格: {productInDetail.price}</p>
    </>
  );
}

export default Detail;
