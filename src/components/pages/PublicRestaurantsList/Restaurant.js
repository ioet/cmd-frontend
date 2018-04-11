import React from "react"
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DraftsIcon from '@material-ui/icons/Drafts';
import PropTypes from "prop-types"
import Grid from 'material-ui/Grid';

class Restaurant extends React.Component {

  componentWillMount(){
    console.log(this.styles)
  }

  render() {
    return (

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>

          <Grid item xs={10}>
            <ListItemText style = {{ textAlign: localStorage.dir}} primary={this.props.name} secondary={this.props.school}/>
          </Grid>

          <Grid item xs={2}>
            <ListItemText style = {{ textAlign: localStorage.dir}} primary={this.props.score}/>
          </Grid>

      </ListItem>

    )
  }
}

Restaurant.proptypes = {
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired
}


export default Restaurant;
