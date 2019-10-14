import React from 'react'

import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount () {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=dd6866086c793ca95487b4ee51f83cf5`)
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res.data
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, items } = this.state
    return (
      <div>
        <ul>
          {Object.keys(items).map(key => (
            <li key={items.city.id}>{ items.city.name[key] }</li>
          )) }
        </ul>
      </div>
    )
  }
}

export default App