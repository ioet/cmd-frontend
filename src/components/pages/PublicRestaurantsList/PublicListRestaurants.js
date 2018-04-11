import React from 'react';
import Restaurant from "./Restaurant"
import api from "../../../api"
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Input from 'material-ui/Input';
import Grid from 'material-ui/Grid';

import './PublicListRestaurants.css'

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
    if(localStorage.dir === "right"){
      localStorage.dir = "left"
      localStorage.dir_ = "ltr"
    }else{
      localStorage.dir = "right"
      localStorage.dir_ = "rtl"
    }
    this.props.history.push("/")
  }

  render() {
    return (

      <div>

        <Button variant="raised" onClick={this.localization}>
          Change
        </Button>

        <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            <Input style={{ left: 'none' }} placeholder="Search restaurant" fullWidth={true}/>

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

export default PublicListRestaurants;
