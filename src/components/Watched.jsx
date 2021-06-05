import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard';

export const Watched = () => {
    const {watched} = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Watched Movies</h1>

                    <span className="count-pill">{watched.length} {watched.length === 1 ? "Movie" : "Movies"} Watched</span>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map((movie) => (
                            <MovieCard movie={movie} type="watched" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movie" style={{ color: "#888" }}>
                        No movies in your list!{" "}
                        <Link to="/add" style={{ color: "#154899" }}>
                            Add some in watchlist
                        </Link>
                    </h2>
                )}
            </div>
        </div>
    )
}
