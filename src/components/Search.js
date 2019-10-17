import React from 'react'
import PropTypes from 'prop-types'

export class Search extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.change(e.target.value) // Set property to value of input
  }

  render () {
    return (
      // onChange function is written in parent and set a prop here
      <div>
        <input type='text' onChange={this.handleChange} value={this.props.search} />
      </div>
    )
  }
}

// eslint-disable-next-line react/no-typos
Search.propTypes = {
  search: PropTypes.string
}
