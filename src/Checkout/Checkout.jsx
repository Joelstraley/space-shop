import React from 'react'
import './Checkout.css'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../StateProvider'
import { ListItemAvatar } from '@mui/material'

export default function Checkout() {
	const [{ basket }, dispatch] = useStateValue()
	return (
		<div>
			<div className="checkout">
				<div className="checkout__left">
					<img
						src="https://i.etsystatic.com/14351119/r/il/0bf0fd/2229245385/il_340x270.2229245385_azy1.jpg"
						alt="Advertisement"
						className="checkout__ad"
					/>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					{basket.map((item) => (
						<CheckoutProduct
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>

				<div className="checkout__right">
					<Subtotal />
				</div>
			</div>
		</div>
	)
}
