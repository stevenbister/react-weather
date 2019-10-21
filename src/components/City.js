import React from 'react'
import PropTypes from 'prop-types'

export class City extends React.Component {
  render () {
    return <h1>{this.props.cityName}</h1>
  }
}

City.propTypes = {
  cityName: PropTypes.string.isRequired
}
