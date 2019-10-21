import React from 'react'
import PropTypes from 'prop-types'

export class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ value: e.target.value }) // Set property to value of input
  }

  render () {
    return (
      // onChange function is written in parent and set a prop here
      <div className='grid-row'>
        <form className='grid-cell' onSubmit={this.props.onSubmit}>
          <label>
            Search city:
            <input type='text' name='search' onChange={this.handleChange} value={this.state.value} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

// eslint-disable-next-line react/no-typos
Form.propTypes = {
  search: PropTypes.string
}
