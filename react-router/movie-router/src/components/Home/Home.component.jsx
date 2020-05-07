import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      movieList: []
    }
  }

  async componentDidMount() {
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_movieDBkey}`;
    let movieDBresponse = await axios.get(nowPlayingUrl);
    let moviesNowPlaying = movieDBresponse.data.results;
    this.setState({
      movieList: moviesNowPlaying
    });
  }

  render() { 
    const imageUrl = `http://image.tmdb.org/t/p/w300`;
    const {movieList} = this.state;
    const movieGrid = movieList.map((movie, i) => (
      <div key={i} className='col s3'>
        <Link to={`/movie/${movie.id}`}>
          <img src={`${imageUrl}${movie.poster_path}`} alt=""/>
        </Link>
      </div>
    ))

    return (  
      <div className='row'>
        {movieGrid}
      </div>
    );
  }
}
 
export default Home;