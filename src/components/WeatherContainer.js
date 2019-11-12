import React from 'react'
import PropTypes from 'prop-types'
import API from '../utils/API'
import OPENWEATHERAPIKEY from '../config'
import { City } from './City'
import { Weather } from './Weather'
import { Temp } from './Temp'
import { DateComponent } from './DateComponent'
import { Wind } from './Wind'
import { Sun } from './Sun'
import DotLoader from 'react-spinners/DotLoader'
import '../styles/error.scss'

export class WeatherContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      city: undefined,
      weather: undefined,
      weatherIcon: undefined,
      temp: undefined
    }

    this.apiCall = this.apiCall.bind(this)
    this.getLocation = this.getLocation.bind(this)
  }

  apiCall = async call => {
    const CITY = this.props.searchTerm
    const COORDS = call
    const UNITS = 'metric'

    // Check if city or postcode has been searched for otherwise default to geolocation
    // TODO: add postcode option
    const APIgetString = () => {
      if (CITY) {
        return `?q=${CITY}&units=${UNITS}&APPID=${OPENWEATHERAPIKEY}`
      } else {
        return `?${COORDS}&units=${UNITS}&APPID=${OPENWEATHERAPIKEY}`
      }
    }

    await API.get(APIgetString())
      .then (response => response.data)
      .then (
        data => {
          this.setState({
            isLoaded: true,
            error: null,
            items: data,
            city: data.name,
            weather: data.weather[0].description,
            weatherIcon: data.weather[0].icon,
            temp: data.main.temp,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            windSpeed: data.wind.speed
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error.response.data.message
          })
        }
      )

      // Pass weather icon up to app component so we can use it to determine if it's night or day
      // symbolised by the 'n' or 'd' in the icon code
      this.props.passIcon(this.state.weatherIcon)
  }

  // Let's get the browser's geolocation
  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  getLocation() {
    const options = {
      maximumAge: 0,
      timeout: 5000
    }

    const success = pos => {
      const coord = pos.coords
      const lat = coord.latitude
      const lng = coord.longitude

      // make apiCall as part of the success callback function
      this.apiCall(`lat=${lat}&lon=${lng}`)
    }

    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`)
      this.setState({
        isLoaded: true,
        error: err.message
      })
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options)
    } else {
      this.setState({
        error: 'Geolocation declined'
      })
    }
  }
  
  // Call api once component is mounted
  componentDidMount() {
    // Call getLocation here instead of apiCall as it will be part of the sucess callback
    this.getLocation()
  }

  // Make api call again if new state doesn't match previous state
  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.apiCall()
    }
  }

  render() {
    const {
      error,
      isLoaded,
      city,
      weather,
      weatherIcon,
      sunset,
      sunrise,
      windSpeed
    } = this.state
    
    const temp = Math.round(this.state.temp) // Let's round the temperature to a whole number
    
    const center = {
      display: 'flex',
      justifyContent: 'center'
    };

    const height75 = {
      height: '75%',
      alignItems: 'center'
    }

    if (error) {
      console.error(error)
      return (
				<div className='error'>
					<h1>Ooops, something's gone wrong!</h1>
					<p>Have you tried searching for your city?</p>
				</div>
			)
    } else if (!isLoaded) {
      return (
        <div className='grid-row' style={height75}>
          <div className='grid-cell spans-12' style={center}>
            <DotLoader
              sizeUnit={'px'}
              size={50}
              color={'#fe951b'}
              loading={this.state.loading}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className='grid-row'>
          <div className='grid-cell spans-12'>
            <City cityName={city} />
            <DateComponent />
          </div>
          <Weather weather={weather} icon={weatherIcon} />
          <div className='grid-cell spans-12'>
            <Temp temp={temp} />
          </div>
          {/* TODO: add sunrise, wind and max-temp */}
          <div className='grid-cell spans-4'>
            <Sun sun={sunrise} desc={'Sunrise'} />
          </div>
          <div className='grid-cell spans-4'>
            <Sun sun={sunset} desc={'Sunset'} />
          </div>
          <div className='grid-cell spans-4'>
            <Wind windSpeed={windSpeed} />
          </div>
        </div>
      )
    }
  }
}

// eslint-disable-next-line react/no-typos
WeatherContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired
}
