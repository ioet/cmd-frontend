import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import T from 'i18n-react';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Home extends React.Component {

  redirect = () => this.props.history.push("/login")

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit" className={this.props.classes.flex}>
              Comidometro
            </Typography>
            <Button color="inherit" onClick={this.redirect}>Login</Button>
          </Toolbar>
        </AppBar>

        <div>
          <Button>{T.translate("labels.accept")}</Button>
          <Button>{T.translate("labels.decline")}</Button>
        </div>

      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)
