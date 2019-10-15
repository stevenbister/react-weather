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
      weather: undefined

    }
  }

  componentDidMount () {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${OPENWEATHERAPIKEY}`)
      .then (response => response.data)
      .then ((data) => {
        this.setState({
          isLoaded: true,
          items: data,
          city: data.city // FIXME: I'm only able to access the name here not in the component - why? - might be helpful https://www.techiediaries.com/react-axios/
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
    const { error, isLoaded, items, city } = this.state
    return (
      <div>
        <h1>{city}</h1>
        <h2></h2>
      </div>
    )
  }
}

export default App
