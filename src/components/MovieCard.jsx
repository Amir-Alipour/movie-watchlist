import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div
                        className="filler-poster"
                        style={{ width: "100%", height: "303px" }}
                    ></div>
                )}

                <MovieControls type={type} movie={movie} />
            </div>
        </div>
    );
};
