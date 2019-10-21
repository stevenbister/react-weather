import React from 'react'
import PropTypes from 'prop-types'
import '../styles/city.scss'

export class City extends React.Component {
  render () {
    return <h1 className='city'>{this.props.cityName}</h1>
  }
}

City.propTypes = {
  cityName: PropTypes.string.isRequired
}
