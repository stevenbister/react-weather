import React from 'react'
import PropTypes from 'prop-types'
import '../styles/weather.scss'
import '../styles/detail.scss'

const size = {
  width: 75,
  height: 'auto'
}

export class Weather extends React.Component {
  render () {
    const icon = this.props.icon
    // As we need to dynamically reference icon we place it into the public folder
    //  https://create-react-app.dev/docs/using-the-public-folder
    const imgPath = `${process.env.PUBLIC_URL}/img/${icon}.svg`
    return (
      <div className='grid-cell spans-12 weather-block'>
        <img src={imgPath} alt='' style={size} />
        <p className='detail'>{this.props.weather}</p>
      </div>
    )
  }
}

Weather.propTypes = {
  weather: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
