import React from 'react'
import getCurrentDate from '../utils/CurrentDate'
import '../styles/detail.scss'

export class Date extends React.Component {
  render () {
    return <p className='detail'>{getCurrentDate()}</p>
  }
}
