'use strict';

import React, { Component } from 'react';
import styles from "../styles/Styles.js";
import { Text, TextInput, View, Button,FlatList, ActivityIndicator } from 'react-native';
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
            onChange={this._autocompletePlaces}
            value={this.state.searchString}
            placeholder='Search for your favourite place'/>
            <Button
            onPress={() => this.props.navigation.navigate('BookmarkList')}
            color='#48BBEC'
            title='View your places'/>
            <View>
              <SearchList style={styles.list}
              navigation={this.props.navigation}
              places={this.state.places}/>
            </View>
        </View>
      </View>
    )
  }
}

export default hook(SearchPage);
