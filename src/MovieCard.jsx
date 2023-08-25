import React from 'react'

export const MovieCard = ({movie}) => {
  return (
    <>
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt="" />
            </div>
            <div>
                <h3>{movie.Title}</h3>
                <span>{movie.Type}</span>
            </div>
        </div>
    </>
    )
}
