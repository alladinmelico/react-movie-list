import React from 'react'


export const MovieList = (props) => {
    return (
        <div id="movie-list">
            {Object.values(props.movies).map(movie => (
                <div className="movie-item"  key={movie.id}>
                    <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt=""/>
                    <p>{movie.title}</p>
                    <small>{(new Date(movie.release_date)).getFullYear()}</small>
                </div>
            ))}
        </div>
    )
}
