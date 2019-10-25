import React from 'react'

export class DateComponent extends React.Component {
  constructor (props) {
    super(props)

    this.getCurrentDate = this.getCurrentDate.bind(this)
  }

  getCurrentDate () {
    const d = new Date(Date.now())
    const options = {
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: '2-digit'
    }

  return d.toLocaleDateString(undefined, options)
  }

  render () {
    return <p className='detail'>{this.getCurrentDate()}</p>
  }
}
