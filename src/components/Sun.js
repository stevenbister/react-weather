import React from 'react'
import PropTypes from 'prop-types'

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
    return (
      <div>
        <p>{this.props.desc}</p>
        <p>{this.formatTimeString(this.props.sun)}</p>
      </div>
    )
  }
}

Sun.propTypes = {
  sun: PropTypes.number.isRequired
}