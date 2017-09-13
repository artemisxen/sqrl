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


export default class SearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: 'london'
    };
  }

  _onSearchTextChanged = (event) => {
    console.log('testing')
    this.setState({ searchString: event.nativeEvent.text });
  };

  openSearchModal() {
   RNGooglePlaces.openAutocompleteModal()
   .then((place) => {
        console.log(place);
        // place represents user’s selection from the
        // suggestions and it is a simplified Google Place object.
   })
   .catch(error => console.log(error.message));  // error is a Javascript Error object
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
          onChange={() => this.openSearchModal()}
          placeholder='Search for your favourite place'/>
        <Button
          onPress={this._onSearchTextChanged}
          color='#48BBEC'
          title='Go'/>
        </View>
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
