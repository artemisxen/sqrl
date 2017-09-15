'use strict';

import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import SearchList from './SearchList.js';
import styles from "../styles/Styles.js";
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
      console.log(places);
      this.setState({places: places})
      this.props.navigator.push({
      title: 'Search list',
      component: SearchList,
      passProps: {places: this.state.places}
      });
    })
    .catch(error => console.log(error.message));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
        ref={this.props.generateTestHook('SearchPage.Text')}
        style={styles.description}>
          I am looking for...
        </Text>
        <View style={styles.flowRight}>
        <TextInput
          ref={this.props.generateTestHook('SearchPage.TextInput')}
          style={styles.searchInput}
          value={this.state.searchString}
          onChange={this._autocompletePlaces}
          placeholder='Search for your favourite place'/>
        </View>
      </View>
    )
  }
}

export default hook(SearchPage);
