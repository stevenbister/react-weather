import React from 'react'
import getCurrentDate from '../utils/CurrentDate'

export class Date extends React.Component {
  render () {
    return <p>{getCurrentDate()}</p>
  }
}
