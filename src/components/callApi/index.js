import axios from "axios";
export const actFetchApiRequest = (data, dispatch) => {
  const lat = data?.coord.lat
  const lon = data?.coord.lon
  return (
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=bd3426733e1b494a2e1457c05aba643e&units=metric&lang=vi`)
      .then(res => {
        dispatch({
          type: 'GET_WEATHER',
          data: res.data
        })
      })
      .catch(
        err => console.log(err)
      )
  )
}