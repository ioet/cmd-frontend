import React from "react"
import { List, Image, Icon } from "semantic-ui-react"
import PropTypes from "prop-types"

class Restaurant extends React.Component {

  render() {
    return (
      <List.Item>
        <Image avatar src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Restaurant-icon.png'/>
          <List.Content>
            <List.Header>{this.props.name}</List.Header>
            <List.Description>{this.props.school}</List.Description>                  
          </List.Content>
          <List.Content floated="right">
            {this.props.score} <Icon name='star'/>
          </List.Content>
      </List.Item>
    )
  }
}

Restaurant.proptypes = {
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired
}

export default Restaurant;