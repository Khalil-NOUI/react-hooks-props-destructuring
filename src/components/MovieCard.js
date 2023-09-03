import React from "react";

function MovieCard({
  title,
  posterSrc = "https://movieposters2.com/images/1535670-b.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
