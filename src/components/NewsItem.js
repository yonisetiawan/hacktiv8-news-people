import React, {Component} from 'react'

class NewsItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
     <div>
        <li key={this.props.item.objectID}>
          <a href={this.props.item.url} target="_blank">{this.props.item.title}</a>
        </li>
     </div>
    )
  }
}

export default NewsItem
