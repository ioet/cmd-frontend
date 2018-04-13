import React from 'react';
import Restaurant from "./Restaurant"
import api from "../../../api"

// Material-ui
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Input from 'material-ui/Input';
import Grid from 'material-ui/Grid';

// Redux
import { connect } from 'react-redux'
import store from '../../../store'

// Localization
import { Translate, getTranslate, setActiveLanguage} from 'react-localize-redux';

class PublicListRestaurants extends React.Component {

  state = {
    restaurants: []
  }

  constructor() {
    super()
    api.restaurant_public.getRestaurants().then(res => {
      this.setState({ restaurants: res.data.restaurant_list})
    })
  }

  localization = () => {
    localStorage.dir_ = (localStorage.dir_ === 'ltr') ? 'rtl' : 'ltr'
    this.props.history.push("/")
  }

  languages = () => store.dispatch(setActiveLanguage(this.props.translate('btn_change_language')))

  render() {
    const { translate } = this.props;
    return (

      <div>

        <Button variant="raised" onClick={ this.localization }>
          <Translate id="btn_change_view"></Translate>
        </Button>

        <Button variant="raised" onClick={ this.languages }>
          <Translate id="btn_change_language"></Translate>
        </Button>

        <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            <Input style={{ left: 'none' }} placeholder={ translate('txt_search_restaurant') } fullWidth={true}/>

            <List component="nav">
              {
                this.state.restaurants.map((res, index) =>
                  <Restaurant
                    key={index}
                    name={res.name}
                    school={res.location}
                    score={res.score}>
                  </Restaurant>
                )
              }
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
});

export default connect(mapStateToProps)(PublicListRestaurants);
