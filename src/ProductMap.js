import data from './data/products.json';

function Product() {
  console.log(data);
  const productName = data.map((v, i) => {
    return (
      <tr key={v.id}>
        <td>{v.name}</td>
        <td>{v.price}</td>
      </tr>
    );
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th>商品名稱</th>
          <th>價格</th>
        </tr>
      </thead>
      <tbody>{productName}</tbody>
    </table>
  );
}

export default Product;
