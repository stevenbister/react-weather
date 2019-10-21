import React from 'react'
import PropTypes from 'prop-types'
import '../styles/temp.scss'

export class Temp extends React.Component {
  render () {
    return <p className='temp'>{this.props.temp}&deg;C</p>
  }
}

Temp.propTypes = {
  temp: PropTypes.number.isRequired
}