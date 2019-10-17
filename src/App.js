import React from 'react'

import { Weather } from './components/Weather'
import { Search } from './components/Search'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: undefined
    }

    // For input function
    this.onInput = this.onInput.bind(this)
  }

  // Function to set state when input is detected
  onInput (search) {
    this.setState({ search })
  }

  render () {
    return (
      <div>
        <Search change={this.onInput} />
        <Weather />
      </div>
    )
  }
}

export default App
