import React from 'react'
import PropTypes from 'prop-types'

export class Weather extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.weather}</p>
      </div>
    )
  }
}

Weather.propTypes = {
  Weather: PropTypes.string.isRequired
}