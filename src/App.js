import React from 'react'
import { Form } from './components/Form'
import { Date } from './components/Date'
import { WeatherContainer } from './components/WeatherContainer'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: 'Birmingham'
    }

    this.search = this.search.bind(this) // Bind search function
  }

  // Set search state to form's name='search' input
  search = (e) => {
    e.preventDefault() // Need to call this here to prevent the page reloading
    this.setState({ search: e.target.elements.search.value })
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.search} />
        <Date />
        <WeatherContainer searchTerm={this.state.search} />
      </div>
    )
  }
}

export default App
