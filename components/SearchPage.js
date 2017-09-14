'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import ViewPlace from './ViewPlace.js'

export default class SearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      place: ''
    };
  }

  autocompletePlaces() {
   RNGooglePlaces.openAutocompleteModal()
   .then((place) => {
      this.setState({place: place})
      console.log(this.state.place);
   })
   .catch(error => console.log(error.message));
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          I am looking for...
        </Text>
        <View style={styles.flowRight}>
        <TextInput
          style={styles.searchInput}
          value={this.state.searchString}
          onChange={() => this.autocompletePlaces()}
          placeholder='Search for your favourite place'/>
        <Button
          onPress={() => this.autocompletePlaces()}
          color='#48BBEC'
          title='Go'/>
        </View>
        <Text>{this.state.place.name}</Text>
        <Text>{this.state.place.address}</Text>
        <Text>{this.state.place.types}</Text>
        <Text>{this.state.place.website}</Text>
        <Text>rating: {this.state.place.rating}</Text>
        <Button
          // onPress={()}
          color='#48BBEC'
          title='Save'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
    flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
});
