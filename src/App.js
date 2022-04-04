import { useEffect, useState } from "react";
import MovieCard from './MovieCard';

//a9697156

import './App.css';
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=a9697156';

const movie1 = {
        "Title": "Reign of Judges: Title of Liberty - Concept Short",
        "Year": "2018",
        "imdbID": "tt4275958",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg"
    }

const App = () => {

        const [movies, setMovies] = useState([]);

        const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s={title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect (() => { searchMovies('Spiderman') }, []);

    return (
        <div className="app">
            <h1>MovieInfo</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={()=>{}}
                />
            <img
                src={SearchIcon}
                alt="search"
                onClick={()=>{}}
                />
            </div>
            {
                movies?.length > 0
                ?(
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                 </div>
                ):
                (<div className="empty">
                    <h2>No Movies found</h2>
                </div>)
            }
  
        </div>
    );
}

export default App;