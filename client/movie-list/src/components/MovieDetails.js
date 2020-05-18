import React, { useState, useEffect } from 'react'

function MovieDetails({ match }) {
	useEffect(() => {
		fetchMovie()
	}, [])

	const [movie, setMovie] = useState({})

	const fetchMovie = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_TMD_API}&language=en-US`
		)
		const movie = await data.json()
		setMovie(movie)
	}

	const bgImageStyle = {
		backgroundImage:
			'url(http://image.tmdb.org/t/p/w1280/' + movie.backdrop_path + ')',
	}
	return (
		<div className='movie-details'>
			<div style={bgImageStyle} className='bg-image'></div>
			<div className='movie-content'>
				<img
					src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
					alt=''
				/>
				<div className='movie-content-text'>
					<h3>{movie.original_title}</h3>
					<p>{movie.overview}</p>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
