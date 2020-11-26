import {Fragment, useState} from 'react';
import CardList from './cardList';

export default function SearchMovies() {
  const [query, setquery] = useState('');
  const [movies, setmovies] = useState([]);

  const searchHandler = async (e) => {
    e.preventDefault();
    // const query = 'avenger';

    const url = `http://api.themoviedb.org/3/search/movie?api_key=c12aae6e6e0a8939d5d14edff7961eb8&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
    //   console.log(data);
      setmovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <form className="form" onSubmit={searchHandler}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          name="query"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          placeholder="i.e. Avengers"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <CardList data={movies} />
    </Fragment>
  );
}
