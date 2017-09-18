'use strict';

import React, { Component } from 'react';
import styles from "../styles/Styles.js";
import {Text, TextInput, View, StyleSheet,FlatList} from 'react-native';
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
    navigator={navigator}
    onPressItem={this._onPressItem}
    />

  );

  render() {
    return (
      <FlatList
      data={this.props.places}
      navigator={this.props.navigator}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      />
    );
  }
}

export default hook(SearchList)
