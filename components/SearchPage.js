'use strict';

import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Card, CardItem, Text, Input, Item } from 'native-base';
import RNGooglePlaces from 'react-native-google-places';
import SearchList from './SearchList.js';
import { hook } from 'cavy';

 class SearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: '',
      places: ''
    };
  }

  _autocompletePlaces = (event) => {
    this.setState({ searchString: event.nativeEvent.text });
    RNGooglePlaces.getAutocompletePredictions(this.state.searchString, {
      country: 'GB'
    })
    .then((places) => {
      this.setState({places: places})
    })
    .catch(error => console.log(error.message));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Card>

        <CardItem>
          <Text
            ref={this.props.generateTestHook('SearchPage.Text')}>
            I am looking for...
          </Text>
        </CardItem>

        <CardItem>
          <Item
            regular
            ref={this.props.generateTestHook('SearchPage.TextInput')}
            onChange={this._autocompletePlaces}
            value={this.state.searchString}
          >
            <Input placeholder='Search for your favourite place' />
          </Item>
          <SearchList
          navigation={this.props.navigation}
          places={this.state.places} />
        </CardItem>

      </Card>
    )
  }
}

export default hook(SearchPage);
