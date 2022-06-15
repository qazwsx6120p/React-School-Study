import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function List(props) {
  const [productsInList, setProductsInList] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('/products')
    const data = await response.json()
    setProductsInList(data)
  }

  // didMount
  // 載入資料用
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h1>商品列表(Node)</h1>
      <ul>
        {productsInList.map((v, i) => {
          return (
            <li key={v.id}>
              <Link to={'/product-node-detail/' + v.id}>
                {v.name} / {v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List
