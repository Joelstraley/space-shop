import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

export default function Header() {
	const [{ basket }, dispatch] = useStateValue()
	return (
		<div className="header">
			<Link
				to="/"
				style={{ textDecoration: 'none' }}>
				<div className="header__logo">
					<RocketLaunchIcon
						className="header__logo--img"
						fontSize="large"
					/>
					<h2 className="header__logo--title">Space Shop</h2>
				</div>
			</Link>

			<div className="header__search">
				<input
					type="text"
					className="header__search--input"
				/>
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
				<Link
					to="/checkout"
					style={{ textDecoration: 'none' }}>
					<div className="nav__item--basket">
						<ShoppingBasketIcon fontSize="large" />
						<span className="nav__item--LineTwo nav__item--basket-count">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}
