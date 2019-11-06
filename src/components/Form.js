import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as SearchIcon } from '../icons/search.svg'
import '../styles/grid.scss'
import '../styles/form.scss'

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
        <form id='searchForm' className='grid-cell form-search' onSubmit={this.props.onSubmit}>
          <label htmlFor='search'>Search for your city</label>
          <div className='form-group'>
            <input id='search' type='text' name='search' placeholder='Search for your city...' onChange={this.handleChange} value={this.state.value} className={ this.props.mode === 'night' ? 'input__text input__text--dark' : 'input__text' }/>
            <button form='searchForm' className='submit'>
              <SearchIcon title='Magnifying glass' />
              <span className='sr-only'>Search</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

// eslint-disable-next-line react/no-typos
Form.propTypes = {
  search: PropTypes.string
}
