import { useEffect, useState } from "react";
import StarRatings from "./StarRatings";
import Loader from "./Loader";

const KEY = "ef1768c8";

function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatchedMovie,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatchedMovie(newWatchedMovie);
    onCloseMovie();
  }
  // console.log(title, year);

  //allow user to press ESC key and go back from opened movie
  useEffect(
    function () {

      function callback(e){
        if (e.code === "Escape") {
          onCloseMovie();
          // console.log("esc is encountered");
        }
      }

      document.addEventListener("keydown", callback);

      //close function
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(false);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
        // console.log(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      //cleanup Function
      return function () {
        document.title = "CineVista";
      };
    },
    [title]
  );

  return (
    <>
      <div className="details">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <header>
              <button className="btn-back" onClick={onCloseMovie}>
                &larr;
              </button>

              <img src={poster} alt={`Poster of ${movie} movie`} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  <span>⭐</span>
                  {imdbRating} IMDB Ratings
                </p>
              </div>
            </header>

            <section>
              <div className="rating">
                {!isWatched ? (
                  <>
                    <StarRatings
                      maxRatings={10}
                      size={24}
                      onSetRatings={setUserRating}
                    />

                    {userRating > 0 && (
                      <button className="btn-add" onClick={handleAdd}>
                        ++Add To Watched List
                      </button>
                    )}
                  </>
                ) : (
                  <p>
                    You Already Rated a Movie as {watchedUserRating} stars
                    <span>⭐</span>!!
                  </p>
                )}
              </div>

              <p>
                <em>{plot}</em>
              </p>
              <p>Starring : {actors}</p>
              <p>Directed By : {director}</p>
            </section>
          </>
        )}

        {/* {selectedId} */}
      </div>
    </>
  );
}

export default MovieDetails;
