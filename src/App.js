import React, {Component} from 'react'
import Table from './Table'
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Don Corleorne',
        job: 'Godfather'
      },
      {
        name: 'Luca Brazi',
        job: 'Hitman'
      },
      {
        name: 'Clemenza',
        job: 'Hitman'
      },
      {
        name: 'Barzini',
        job: 'Mobster'
      },
    ]
    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App