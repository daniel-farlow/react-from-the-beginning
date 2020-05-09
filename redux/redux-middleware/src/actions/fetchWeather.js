// import axios from 'axios';
// const weatherApi = `http://api.openweathermap.org/data/2.5/weather`;
// const weatherAPIkey = `6f3f23c0f1a2fcb7edee25d08cb9cf62`;
// const scale = `imperial`; 

// export default async (city) => {
//   const weatherURL = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIkey}`;
//   console.log(city);
//   console.log(weatherURL);
//   const response = await axios.get(weatherURL);
//   return {
//     type: 'cityUpdate',
//     payload: response.data
//   }
// }