import React from "react"
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import DraftsIcon from '@material-ui/icons/Drafts';
import PropTypes from "prop-types"
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = {
  avatar: {
    marginRight: 15,
  }
}

class Restaurant extends React.Component {

  componentWillMount(){
    console.log(this.styles)
  }

  render() {

    const { classes } = this.props;

    return (

      <ListItem button>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png"
            className={classes.avatar}
          />

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
  score: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Restaurant);
