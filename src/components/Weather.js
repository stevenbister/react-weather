import React from 'react'
import PropTypes from 'prop-types'

export class Weather extends React.Component {
  render () {
    const ICON = this.props.icon
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