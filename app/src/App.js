import {Fragment} from 'react';
import './index.css';
import SearchMovies from './components/searchMovies';

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    </Fragment>
  );
};

export default App;
