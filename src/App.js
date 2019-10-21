import React from 'react'
import { Form } from './components/Form'
import { WeatherContainer } from './components/WeatherContainer'
import './styles/grid.scss'

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
      <div className='grid-container'>
        <Form onSubmit={this.search} />
        <WeatherContainer searchTerm={this.state.search} />
      </div>
    )
  }
}

export default App
