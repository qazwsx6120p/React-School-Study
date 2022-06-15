import { useEffect, useState } from 'react'
import { products } from '../../data/product-3c'
import { useLocation } from 'react-router-dom'

function Detail(props) {
  const [productInDetail, setProductInDetail] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // /products?productId=2
  const location = useLocation()

  const fetchProductById = async () => {
    const searchParams = new URLSearchParams(location.search)
    const productId = searchParams.get('productId')

    const response = await fetch('/products/?productId=' + productId)
    const data = await response.json()
    setProductInDetail(data)
  }

  // didMount
  useEffect(() => {
    fetchProductById()
  }, [])

  return (
    <>
      <h1>商品詳細頁(Query String)</h1>
      <p>商品名稱: {productInDetail.name}</p>
      <p>
        商品圖片: <img src={productInDetail.picture} alt="" />
      </p>
      <p>商品價格: {productInDetail.price}</p>
    </>
  )
}

export default Detail
