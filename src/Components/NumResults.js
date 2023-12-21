import {useState} from 'react';


function NumResults({movies}){
    // const [movies, setMovies] = useState(tempMovieData);
    return(
        <>

<p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
        </>
    )
}

export default NumResults;