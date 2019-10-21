import React from 'react'
import PropTypes from 'prop-types'

export class Weather extends React.Component {
  render () {
    const ICON = this.props.icon
    //TODO: upload own images to replace this proof of concept
    // List of icon codes here: https://openweathermap.org/weather-conditions
    const IMG = `https://openweathermap.org/img/wn/${ICON}@2x.png` 
    return (
      <div>
        <p>{this.props.weather}</p>
        <img src={IMG} alt="" />
      </div>
    )
  }
}

Weather.propTypes = {
  weather: PropTypes.string.isRequired
}