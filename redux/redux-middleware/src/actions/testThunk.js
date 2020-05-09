import axios from 'axios';

const weatherApi = `http://api.openweathermap.org/data/2.5/weather`;
const weatherAPIkey = `6f3f23c0f1a2fcb7edee25d08cb9cf62`;
const scale = `imperial`; 

export default (city) => {
  console.log(city)
  return async (dispatch, getState) => {
    let weatherURL = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIkey}`;
    const reduxState = getState();
    if (!reduxState.weather.main) {
      weatherURL = `${weatherApi}?q=London&units=${scale}&appid=${weatherAPIkey}`
      const response = await axios.get(weatherURL);
      dispatch({
        type: 'cityUpdate',
        payload: response.data
      })
    } else if (reduxState.weather.main) {
      const response = await axios.get(weatherURL);
      if (reduxState.weather.id !== response.data.id) {
        dispatch({
          type: 'cityUpdate',
          payload: response.data
        })
      }
    }
  }
}

// export default () => {
//   return (dispatch, getState) => {
//     setTimeout(() => {
//       const reduxState = getState();
//       console.log('Redux state: ', reduxState)
//       console.log('I waited for 2 seconds')
//       if (reduxState.weather.main) {
//         dispatch({
//           type: 'testThunk'
//         })
//       }
//     }, 2000)
//   }
// }