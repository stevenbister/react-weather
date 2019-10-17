import React from 'react'

export class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {text: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }
  
  render () {
    return (
      <label>Find your city
        <input type='text' onChange={this.handleChange} value={this.state.text} />
      </label>
    )
  }
};
