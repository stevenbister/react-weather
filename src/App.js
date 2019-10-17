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

    this.search = this.search.bind(this)
  }

  apiCall () {
    // const CITY = 'Birmingham'
    // const CITY = this.props.city
    const CITY = this.state.search
    const COUNTRY = 'uk'
    const UNITS = 'metric'
    API.get(`?q=${CITY},${COUNTRY}&units=${UNITS}&APPID=${OPENWEATHERAPIKEY}`)
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

  search (e) {
    e.preventDefault()
    this.setState({ search: e.target.elements.search.value })
  }

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
      // ! Search component needs to become a form that passes the api call on submit
      return (
        <div>
          <Form onSubmit={this.search} />
          <h1>{city}</h1>
          <h2>{weather}</h2>
          <h2>{temp}&deg;C</h2>
        </div>
      )
    // }
  }
}

export default App
