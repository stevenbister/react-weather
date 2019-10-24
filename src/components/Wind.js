import React from 'react'
import PropTypes from 'prop-types'
import '../styles/detail.scss'

const size = {
  width: 25,
  height: 'auto',
  marginBottom: '.5rem'
}

const margin = {
  marginTop: 0,
  marginBottom: '.5rem'
}

export class Wind extends React.Component {
  render () {
    const icon = 'wind'
    const imgPath = `${process.env.PUBLIC_URL}/img/${icon}.svg`
    return (
      <div>
        <img src={imgPath} alt='' style={size} />
        <p className='detail' style={margin}>Wind Speed</p>
        <p style={margin}>{this.props.windSpeed} m/s</p>
      </div>
    )
  }
}

Wind.propTypes = {
  windSpeed: PropTypes.number.isRequired
}
