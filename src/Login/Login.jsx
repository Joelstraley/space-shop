import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Storefront } from '@mui/icons-material'
import { auth } from '../firebase'

export default function Login() {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = (e) => {
		e.preventDefault()

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate('/')
			})
			.catch((error) => alert(error.message))
	}

	const register = (e) => {
		e.preventDefault()

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					navigate('/')
				}
			})
			.catch((error) => alert(error.message))
	}
	return (
		<div className="login">
			<Link
				to="/"
				style={{ textDecoration: 'none' }}>
				<div className="login__logo">
					<Storefront
						className="login__logo--image"
						fontSize="large"
					/>
					<h2 className="login__logo--title">Space Shop</h2>
				</div>
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						className="login__sign-in-button"
						onClick={signIn}>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to provide your current soul and all future
					offspring to Space-Shop, LLC. This will also allow all Cookies. Please
					disable your ad-blocker to continue.
				</p>
				<button
					className="login__register-button"
					onClick={register}>
					Register
				</button>
			</div>
		</div>
	)
}
