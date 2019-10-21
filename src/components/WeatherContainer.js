import React from 'react'
import PropTypes from 'prop-types'
import API from '../utils/API'
import OPENWEATHERAPIKEY from '../config'
import {City} from './City'
import {Weather} from './Weather'
import {Temp} from './Temp'

export class WeatherContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      city: undefined,
      weather: undefined,
      weatherIcon: undefined,
      temp: undefined,
    }
  }

  apiCall = async () => {
    const CITY = this.props.searchTerm
    // const CITY = 'Birmingham'
    const COUNTRY = 'uk'
    const UNITS = 'metric'
    await API.get(`?q=${CITY},${COUNTRY}&units=${UNITS}&APPID=${OPENWEATHERAPIKEY}`)
      .then(response => response.data)
      .then(
        data => {
          this.setState({
            isLoaded: true,
            error: null,
            items: data,
            city: data.name,
            weather: data.weather[0].description,
            weatherIcon: data.weather[0].icon,
            temp: data.main.temp
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  // Call api once component is mounted
  componentDidMount () {
    this.apiCall()
  }

  // Make api call again if new state doesn't match previous state 
  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.apiCall()
    }
  }

  render () {
    const { error, isLoaded, city, weather, weatherIcon } = this.state
    const temp = Math.round(this.state.temp) // Let's round the temperature to a whole number
    
    if (error) {
      return <div>Error: {error.response.data.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      // TODO: Seperate these into components
      return (
        <div>
          <City cityName={city} />
          <Weather weather={weather} icon={weatherIcon} />
          <Temp temp={temp} />
        </div>
      )
    }
  }
}

// eslint-disable-next-line react/no-typos
WeatherContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired
}