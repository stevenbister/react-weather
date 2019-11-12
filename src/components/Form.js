import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as SearchIcon } from '../icons/search.svg'
import '../styles/grid.scss'
import '../styles/form.scss'
import Countries from '../countries'

export class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      textInput: '',
      select: ''
    }

    this.handleTextInputChange = this.handleTextInputChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleTextInputChange (e) {
    this.setState({ textInput: e.target.value }) // Set property to value of input
  }

  handleSelectChange (e) {
    this.setState({ select: e.target.value })
  }


  render () {
    return (
      // onChange function is written in parent and set a prop here
      <div className='grid-row'>
        <form
          id='searchForm'
          className='grid-cell form-search'
          onSubmit={this.props.onSubmit}
        >
          <div className='form-group'>
            <label htmlFor='citySearch'>Search for your city</label>
            <input
              id='citySearch'
              type='text'
              name='search'
              placeholder='Search for your city...'
              onChange={this.handleTextInputChange}
              value={this.state.textInput}
              className={
                this.props.mode === 'night'
                  ? 'input__text input__text--dark'
                  : 'input__text'
              }
            />

            <label htmlFor='countrySelect'>Pick your country</label>
            <select
              id='countrySelect'
              value={this.state.select}
              onChange={this.handleSelectChange}
            >
              <option value='' disabled defaultValue>
                Pick your country
              </option>

              {Countries.map((country) => {
                return <option key={country.Code} value={country.Code}>{country.Name}</option>
              })}
            </select>
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
