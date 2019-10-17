import React from 'react'

import API from './utils/API'

import OPENWEATHERAPIKEY from './config'

import { Weather } from './components/Weather'
import { Form } from './components/Form'
class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      city: undefined,
      weather: undefined,
      temp: undefined,
      search: 'Birmingham'
    }

    this.search = this.search.bind(this) // Bind search function
  }

  apiCall = async () => {
    const CITY = this.state.search
    const COUNTRY = 'uk'
    const UNITS = 'metric'
    await API.get(`?q=${CITY},${COUNTRY}&units=${UNITS}&APPID=${OPENWEATHERAPIKEY}`)
      .then(response => response.data)
      .then(
        data => {
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
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  // Set search state to form's name='search' input
  search = (e) => {
    e.preventDefault() // Need to call this here to prevent the page reloading
    this.setState({ search: e.target.elements.search.value })
  }

  // Make api call again if new state doesn't match previous state 
  componentDidUpdate(prevState) {
    if (this.state.search !== prevState.search) {
      this.apiCall()
    }
  }

  // Call api once component is mounted
  componentDidMount () {
    this.apiCall()
  }

  render () {
    const { error, isLoaded, city, weather, temp } = this.state

    // if (error) {
    //   return <div>Error: {error.message}</div>
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>
    // } else {
      // TODO: Seperate these into components
      return (
        <div>
          <Form onSubmit={this.search} />
          <h1>{city}</h1>
          <h2>{weather}</h2>
          <h2>{temp}&deg;C</h2>
          {/* <h3>{error ? error.message : ''}</h3> */}
        </div>
      )
    // }
  }
}

export default App
