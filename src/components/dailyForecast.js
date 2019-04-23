import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getPRGData } from '../actions/actions'
import Clock from 'react-live-clock'
import cloud from '../assets/cloud.png'
import rain from '../assets/rain.png'
import sun from '../assets/sun.png'
import sunCloud from '../assets/sunCloud.png'
import snowflake from '../assets/snowflake.png'


class dailyForecast extends Component {

    componentDidMount() {
        getPRGData()
        
    }
        

    render() {
        return (
            <div>    
                <div className="currentTime">
                    <h3>Current time in Prague:</h3>
                    <Clock format={'dddd, MMMM Do, HH:mm A'} ticking={true} timezone={'Europe/Prague'} />
                </div>
                <div className="currentTemp">
                    <span>Current temperature: </span>{Math.round(this.props.currentTemp)}<span> &deg;F</span>
                </div>
                <div className="currentW">
                    <span>Humidity: </span>{this.props.currentHum}<span>%</span>
                    <div>
                        <img alt="currentWeatherPic" src={this.props.currentWeatherMain === 'Clouds' ? cloud : this.props.currentWeatherMain === 'Rain' ? rain : this.props.currentWeatherMain === 'Clear' ? sun : this.props.currentWeatherMain === 'Snow' ? snowflake : sunCloud} />
                    </div>
                    <div>
                        {this.props.currentWeatherDesc}
                    </div>
                

                </div>
                
                
                
                {/* // {this.props.weatherData.map(w => (
                //     <div>
                //         {w.temp}
                //     </div>
                // ))} */}

            </div>
        )
    }

}

function mapStateToProps(appState) {
    return {
        city: appState.city,
        weatherData: appState.weatherData,
        currentTemp: appState.currentTemp,
        currentHum: appState.currentHum,
        currentWeatherMain: appState.currentWeatherMain,
        currentWeatherDesc: appState.currentWeatherDesc
    }
}

export default connect (mapStateToProps) (dailyForecast)