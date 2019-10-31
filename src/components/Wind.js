import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as WindIcon } from '../icons/wind.svg'
import '../styles/detail.scss'

export class Wind extends React.Component {
  render () {
    return (
      <div>
        <WindIcon title='Wind' width='25' height='auto' />
        <p className='detail'>Wind Speed</p>
        <p>{this.props.windSpeed} m/s</p>
      </div>
    )
  }
}

Wind.propTypes = {
  windSpeed: PropTypes.number.isRequired
}
