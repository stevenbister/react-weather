import React from 'react'
import PropTypes from 'prop-types'
import API from '../utils/API'
import OPENWEATHERAPIKEY from '../config'

export class Weather extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      city: undefined,
      weather: undefined,
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
    const { error, isLoaded, city, weather, temp } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      // TODO: Seperate these into components
      return (
        <div>
          <h1>{city}</h1>
          <h2>{weather}</h2>
          <h2>{temp}&deg;C</h2>
        </div>
      )
    }
  }
}

// eslint-disable-next-line react/no-typos
Weather.propTypes = {
  search: PropTypes.string.isRequired
}