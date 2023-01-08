import './Home.css'
import Product from '../Product/Product'

export default function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					src="https://ia903100.us.archive.org/16/items/wholeearth/wholeearth_itemimage.jpg"
					alt="home"
					className="home__img"
				/>
				<div className="home__row">
					<Product
						id="123121"
						title="mercury"
						price={11.96}
						rating={5}
						image="https://cdn.mos.cms.futurecdn.net/GA4grWEsUYUqH58cDbRBw8.jpg"
					/>
					<Product
						id="123122"
						title="venus"
						price={13.56}
						rating={3}
						image="https://t4.ftcdn.net/jpg/03/16/61/69/360_F_316616944_YggjkWhCgzXqT4opsfLFf0ag2m2r6a0U.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="123124"
						title="earth"
						price={'free'}
						rating={1}
						image="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					/>
					<Product
						id="123125"
						title="mars"
						price={300}
						rating={4}
						image="https://media.cnn.com/api/v1/images/stellar/prod/181115180453-01-mars-best-moments-mars-globe-valles-marineris-enhanced.jpg?q=w_2500,h_1406,x_0,y_0,c_fill"
					/>
					<Product
						id="123126"
						title="asteroid belt"
						price={50}
						rating={4}
						image="https://db4sgowjqfwig.cloudfront.net/campaigns/96089/assets/782448/MainAsteroidBeltImage.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="123127"
						title="Saturn"
						price={4}
						rating={2}
						image="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0dXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<Product
						id="123128"
						title="Jupiter"
						price={4}
						rating={2}
						image="https://cdn.spacetelescope.org/archives/images/screen/heic2017a.jpg"
					/>
				</div>
			</div>
		</div>
	)
}
