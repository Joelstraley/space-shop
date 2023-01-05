import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SearchIcon from '@mui/icons-material/Search'

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
        <RocketLaunchIcon className="header__logo--img" fontSize="large" />
        <h2 className="header__logo--title">Space Shop</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__search--input" />
        <SearchIcon className="header__search--icon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__item--LineOne">Hello Guest</span>
          <span className="nav__item--LineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__item--LineOne">Your</span>
          <span className="nav__item--LineTwo">Shop</span>
        </div>
        <div className="nav__item--basket">
          <ShoppingBasketIcon fontSize="large" />
          <span className="nav__item--LineTwo nav__item--basket-count">0</span>
        </div>
      </div>
        </div>
    )
}
