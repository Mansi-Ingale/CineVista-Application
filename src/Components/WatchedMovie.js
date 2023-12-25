import WatchedMoList from "./WatchedMoList";

function WatchedMovies({watched, onDeleteWatched}) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMoList movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched}/>
        ))}
      </ul>
    </>
  );
}

export default WatchedMovies;
