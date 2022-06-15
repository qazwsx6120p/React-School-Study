import { useEffect, useState } from 'react';
import { products } from '../../data/product-3c';
import { Link } from 'react-router-dom';

function List(props) {
  const [productsInList, setProductsInList] = useState([]);

  // didMount
  useEffect(() => {
    setProductsInList(products);
  }, []);

  return (
    <>
      <h1>商品列表</h1>
      <ul>
        {productsInList.map((v, i) => {
          return (
            <li key={v.id}>
              <Link to={'/product-detail/' + v.id}>
                {v.name} / {v.price}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
