import store from '../store'
import axios from 'axios'

export function getPRGData() {
    axios.get ('http://api.openweathermap.org/data/2.5/forecast?id=3067696&APPID=5f3cb6383323f37709bc8b36a227e054&units=imperial')
    .then(resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'GET_PRG_DATA',
            city: resp.data.city.name,
            weatherData: resp.data.list.map(w => w.main),
            currentTemp: resp.data.list[0].main.temp,
            currentHum: resp.data.list[0].main.humidity,
            currentWeatherMain: resp.data.list[0].weather[0].main,
            currentWeatherDesc: resp.data.list[0].weather[0].description
        })
    })
} 