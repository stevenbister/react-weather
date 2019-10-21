import React from 'react'
import PropTypes from 'prop-types'

export class Temp extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.temp}&deg;C</p>
      </div>
    )
  }
}

Temp.propTypes = {
  temp: PropTypes.number.isRequired
}