'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Input, Item } from 'native-base';
import RNGooglePlaces from 'react-native-google-places';
import FooterNav from './FooterNav';
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
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Text
                ref={this.props.generateTestHook('SearchPage.Text')}>
                I am looking for...
              </Text>
            </CardItem>
            <CardItem>
              <Item regular>
                <Input
                  ref={this.props.generateTestHook('SearchPage.TextInput')}
                  onChange={this._autocompletePlaces}
                  value={this.state.searchString}
                  placeholder='Search for your favourite place'
                />
              </Item>
            </CardItem>
            <CardItem>
              <SearchList
                navigation={this.props.navigation}
                places={this.state.places} />
            </CardItem>
          </Card>
          </Content>
          <FooterNav
            navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default hook(SearchPage);
