import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as SunRiseIcon } from '../icons/sunrise.svg'
import { ReactComponent as SunSetIcon } from '../icons/sunset.svg'
import '../styles/detail.scss'

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
    const icon = this.props.desc === 'Sunrise' ? <SunRiseIcon title='Sunrise' width='25' height='auto' /> : <SunSetIcon title='Sunset' width='25' height='auto' />
    // const imgPath = `${process.env.PUBLIC_URL}/img/${icon}.svg`
    return (
      <div>
        {icon}
        <p className='detail'>{this.props.desc}</p>
        <p>{this.formatTimeString(this.props.sun)}</p>
      </div>
    )
  }
}

Sun.propTypes = {
  sun: PropTypes.number.isRequired,
  desc: PropTypes.string
}
