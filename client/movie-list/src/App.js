import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './pages/MainContent'
import { Favorites } from './pages/Favorites'
import MovieDetails from './components/MovieDetails'

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<Switch>
					<Route path='/' exact component={MainContent} />
					<Route path='/favorites' exact component={Favorites} />
					<Route path='/movie-details/:id' component={MovieDetails} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
