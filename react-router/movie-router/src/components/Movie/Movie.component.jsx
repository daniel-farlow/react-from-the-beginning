import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      movie: {}
    }
  }

  async componentDidMount() {
    const {match: {params: {movieId}}} = this.props;
    const singleMovie = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_movieDBkey}`
    const movieDBresponse = await axios.get(singleMovie);
    this.setState({
      movie: movieDBresponse.data
    });
  }

  render() { 
    const {movie: {title, poster_path, budget, tagline, overview: description}} = this.state;
    const imageUrl = `http://image.tmdb.org/t/p/w300${poster_path}`;
    if (!title) {return <h1>Loading ...</h1>}
    return (  
      <div>
        <img src={imageUrl} alt=""/>
        <p>{title}</p>
        <p>Budget: {budget}</p>
        <p>Tagline: {tagline}</p>
        <p>Overview: {description}</p>
        <p></p>
      </div>
    );
  }
}
 
export default Movie;