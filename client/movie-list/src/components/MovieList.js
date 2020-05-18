import React from 'react'
import { Link } from 'react-router-dom'

export const MovieList = (props) => {
	return (
		<div id='movie-list'>
			{Object.values(props.movies).map((movie) => (
				<div className='movie-item' key={movie.id}>
					<Link to={`/movie-details/${movie.id}`}>
						<img
							src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
							alt=''
						/>
					</Link>
					<p>{movie.title}</p>
					<small>{new Date(movie.release_date).getFullYear()}</small>
				</div>
			))}
		</div>
	)
}
