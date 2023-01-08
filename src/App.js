import './App.css'
import React from 'react'

import Header from './Header/Header'
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/checkout"
						element={[<Header />, <Checkout />]}
					/>
					<Route
						path="/"
						element={[<Header />, <Home />]}
					/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
