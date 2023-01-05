
import './Home.css'
import Product from '../Product/Product'

export default function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img src="https://ia903100.us.archive.org/16/items/wholeearth/wholeearth_itemimage.jpg" alt="home" className="home__img" />
            <div className="home__row">
                <Product />
                <Product />
                </div>
                <div className="home__row">
                <Product />
                <Product />
                <Product />
                </div>
                <div className="home__row">
                <Product />
                <Product />
                </div>
            </div></div>
  )
}
