import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import {SearchNews} from './components/Search'
import {NewsList} from './components/NewsList'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">News</Link></li>
        <li><Link to="/people">People</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/people" component={People}/>
    </div>
  </Router>
)

class People extends Component {
  constructor () {
    super()
    this.state = {
      people: []
    }
  }
  componentDidMount () {
    setTimeout(() => {
      fetch(`https://hn.algolia.com/api/v1/search`, {method: 'get'}).then((response) => {
        return response.json()
      }).then((data) => {
        this.setState({people: data.hits})
      })
    }, 2000)
  }
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="listMenu">
          <br></br>
        <NewsList news={this.state.people} />
      </div>
      </div>
    )
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      news: []
    }
  }
  handleChange (e) {
    this.search(e.target.value)
  }
  search (input) {
    fetch(`https://hn.algolia.com/api/v1/search?query=${input}`, {method: 'get'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({news: data.hits})
    })
  }
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="listMenu">
          <br></br>
          <SearchNews handleChange={this.handleChange.bind(this)}/>
          <NewsList news={this.state.news} />
        </div>
      </div>
    )
  }
}

export default BasicExample
