import React from 'react'
import PropTypes from 'prop-types'

export class Wind extends React.Component {
  render() {
    return <p>Wind Speed: {this.props.windSpeed} m/s</p>
  }
}
