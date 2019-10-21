import React from 'react'
import PropTypes from 'prop-types'
import getCurrentDate from '../utils/CurrentDate'


export class City extends React.Component {
  render () {
    return (
      <div>
        <p>{getCurrentDate()}</p>
        <h1>{this.props.cityName}</h1>
      </div>
    )
  }
}

City.propTypes = {
  cityName: PropTypes.string.isRequired
}