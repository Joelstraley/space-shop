import './Product.css'

export default function Product() {
  return (

        <div className="product">
        <div className="product__info">
            <p>Mercury</p>
            <p className="product__price">
                <small>$</small>
                <strong>30</strong></p>
            <div className="product__rating">⭐⭐</div>
        </div>

        <img src="https://cdn.mos.cms.futurecdn.net/GA4grWEsUYUqH58cDbRBw8.jpg" alt="Product" className='product__img'/>
        <button>Add to Basket</button>
        </div>
  )
}
