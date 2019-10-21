import React from 'react'
import PropTypes from 'prop-types'

export class Temp extends React.Component {
  render () {
    return <p>{this.props.temp}&deg;C</p>
  }
}

Temp.propTypes = {
  temp: PropTypes.number.isRequired
}