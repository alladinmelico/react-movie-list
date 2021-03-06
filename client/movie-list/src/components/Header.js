import React from 'react'

const Header = () => {
	return (
		<nav>
			<ul id='menu-list'>
				<li>
					<a href='/'>Movies</a>
				</li>
				<li>
					<a href='/favorites'>Favorites</a>
				</li>
			</ul>
			<div id='login'>
				<a href='/'>Login</a>
			</div>
		</nav>
	)
}

export default Header
