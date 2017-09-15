'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import Place from './Place.js';
import { hook } from 'cavy';

class SearchList extends Component {

  _onPressItem = (index) => {
    console.log("Pressed row: "+index);
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

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});
