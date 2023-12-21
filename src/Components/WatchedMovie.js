import WatchedMoList from "./WatchedMoList";

function WatchedMovies({watched}) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMoList movie={movie} key={movie.imdbID}/>
        ))}
      </ul>
    </>
  );
}

export default WatchedMovies;
