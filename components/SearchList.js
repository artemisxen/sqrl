'use strict';

import React, { Component } from 'react';
import { FlatList, Text, TextInput, } from 'react-native';
import { List } from 'native-base';
import Place from './Place.js';
import RNGooglePlaces from 'react-native-google-places';
import { hook } from 'cavy';
import ViewPlace from './ViewPlace.js';


class SearchList extends Component {

  _onPressItem = (index) => {
    RNGooglePlaces.lookUpPlaceByID(this.props.places[index].placeID)
    .then((results) => this.props.navigation.navigate('ViewPlace', {place: results}))
    .catch((error) => console.log(error.message));
  };


  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
    <Place
      item={item}
      index={index}
      onPressItem={this._onPressItem}/>
  );

  render() {
    return (
      <List>
      <FlatList
        data={this.props.places}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem} />
      </List>
    );
  }
}

export default hook(SearchList);
