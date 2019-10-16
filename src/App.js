import React from 'react'

import axios from 'axios'

import OPENWEATHERAPIKEY from './config'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      city: undefined,
      weather: undefined,
      temp: undefined
    }
  }

  componentDidMount () {
    const CITY = 'Birmingham'
    const COUNTRY = 'uk'
    const UNITS = 'metric'
    // TODO: move this into it's own file and create base instance
    // https://alligator.io/react/axios-react/
    // https://www.npmjs.com/package/axios
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&units=${UNITS}&APPID=${OPENWEATHERAPIKEY}`)
      .then (response => response.data)
      .then ((data) => {
        this.setState({
          isLoaded: true,
          items: data,
          city: data.name,
          weather: data.weather[0].description,
          temp: data.main.temp
        })
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, city, weather, temp } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>
    } 
    else {
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

export default App
