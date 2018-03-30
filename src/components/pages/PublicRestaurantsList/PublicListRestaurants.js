import React from 'react';
import { Label, Button, List, Grid, Segment, Form } from 'semantic-ui-react';
import Restaurant from "./Restaurant"

import api from "../../../api"

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

  redirect = () => this.props.history.push("/login") 

  render() {

    return (
      <Grid centered>

        <Grid.Column mobile={14} tablet={9} computer={6}>

          <Segment>
            <Grid columns='equal'>
              <Grid.Column>
                <Label color='blue' size="big" ribbon>RESTAURANTS LIST.</Label>
              </Grid.Column>
            </Grid>
          </Segment> 

          <Form>
            <Form.Input 
              name="search"
              placeholder="Search restaurant"
            />
          </Form>

          <List selection verticalAlign='middle' size="large" className="restaurant">
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
          
          <Grid.Column>
              <Button 
              id="btnLogin"
                onClick={this.redirect}>
                LOGIN
            </Button>
          </Grid.Column>

        </Grid.Column>
      
      </Grid>
    )
  }
};

export default PublicListRestaurants;