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

export class Sun extends React.Component {
  constructor (props) {
    super(props)

    this.formatTimeString = this.formatTimeString.bind(this)
  }

  formatTimeString (time) {
    const d = new Date(time * 1000) // Time should be props supplied as unix timestamp so we need to multiply it by 1000 before we can use it
    const hours = d.getHours()
    const minutes = `0${d.getMinutes()}` // Let's prepend a 0 to display 2 digit minutes

    return `${hours}:${minutes.substr(-2)}` // Add substr(-2) to remove leading 0 from anything over 10
  }

  render () {
    const icon = this.props.desc === 'Sunrise' ? 'sunrise' : 'sunset'
    const imgPath = `${process.env.PUBLIC_URL}/img/${icon}.svg`
    return (
      <div>
        <img src={imgPath} alt='' style={size} />
        <p className='detail' style={margin}>{this.props.desc}</p>
        <p style={margin}>{this.formatTimeString(this.props.sun)}</p>
      </div>
    )
  }
}

Sun.propTypes = {
  sun: PropTypes.number.isRequired,
  desc: PropTypes.string
}
