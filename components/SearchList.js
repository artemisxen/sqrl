'use strict';

import React, { Component } from 'react';
import styles from "../styles/Styles.js";
import {Text, TextInput, View, StyleSheet,FlatList} from 'react-native';
import Place from './Place.js';
import { hook } from 'cavy';

class SearchList extends Component {

  _onPressItem = (index) => {
    console.log("Pressed row: "+index);
    console.log(this.props.places[index]);
    this.props.navigator.push({
    title: 'Selected Place',
    component: Place,
    passProps: {item: this.props.places[index]}
    });
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
    <Place
    item={item}
    index={index}
    onPressItem={this._onPressItem}
    />
  );

  render() {
    return (
      <FlatList
      data={this.props.places}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      />
    );
  }
}

export default hook(SearchList)
