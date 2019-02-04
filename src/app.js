import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount(){
    axios.get('/api/chickenshops')
      .then(res => this.setState({shops: res.data}))
  }

  render() {
    if(!this.state.shops) return <h1>...loading, are you ready for some chicken</h1>
    console.log(this.state)
    return (
      <div>
        {this.state.shops.map( (shop, index) =>
          <div key={index}>
            <h1>{shop.name}</h1>
            <img src={shop.image} alt={shop.name}/ >
            <p>{shop.website}</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
