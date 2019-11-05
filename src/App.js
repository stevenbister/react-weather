import React from 'react'
import { Form } from './components/Form'
import { WeatherContainer } from './components/WeatherContainer'
import './styles/grid.scss'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: '',
      mode: ''
    }

    this.search = this.search.bind(this) // Bind search function
  }

  // Set search state to form's name='search' input
  search = (e) => {
    e.preventDefault() // Need to call this here to prevent the page reloading
    this.setState({ search: e.target.elements.search.value })
  }

  // Function to pass the icon from the child up to app's state
  // we'll then check if it contains a 'd' or an 'n' (day and night)
  // set mode state depending on result
  iconCallback = (icon) => {
    if (icon.includes('d')) {
      this.setState({mode: 'day'})

    } else if (icon.includes('n')) {
      this.setState({mode: 'night'})
    }
  }

  render () {
    let container = {
      height: '100vh'
    }

    // Let's check the mode and set the appropriate styles
    // TODO: set the font colours etc.
    const mode = () => {
      if (this.state.mode === 'day') {

        let container = {
          background: 'var(--white)',
          height: '100vh'
        }
        return container

      } else if (this.state.mode === 'night') {

        let container = {
          background: 'var(--black)',
          height: '100vh'
        }
        return container

      }
    }

    return (
      <div className='grid-container' style={Object.assign({}, container, mode())}>
        <Form onSubmit={this.search} />
        <WeatherContainer searchTerm={this.state.search} passIcon={this.iconCallback}/>
      </div>
    )
  }
}

export default App
