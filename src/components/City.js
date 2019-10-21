import React from 'react'
import PropTypes from 'prop-types'

export class City extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.cityName}</h1>
      </div>
    )
  }
}

City.propTypes = {
  cityName: PropTypes.string.isRequired
}