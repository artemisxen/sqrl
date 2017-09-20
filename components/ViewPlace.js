'use strict';

import React, { Component } from 'react';
import { Text, TextInput, View, Button, ActivityIndicator, Image, AlertIOS } from 'react-native';
import styles from "../styles/Styles.js";
import MapView from 'react-native-maps';
import { hook } from 'cavy';
import firebase from 'firebase';
import BookmarkList from './BookmarkList.js';


class ViewPlace extends Component {
  constructor(props){
    super(props);
    var itemsRef = firebase.database().ref();
    console.log(itemsRef);
  }

  _storePlace = () => {
    const place = this.props.navigation.state.params.place
    console.log(place);
    firebase.database().ref().push({
    name:place.name,
    address:place.address,
    latitude:place.latitude,
    longitude:place.longitude
  })
  AlertIOS.alert('Your place has been successfully saved!')
  }

  render() {
    const place = this.props.navigation.state.params.place
    return (
      <View style={styles.container}>
        <Text ref={this.props.generateTestHook('ViewPlace.${this.props.place.name}')}>{place.name}</Text>
        <Text>{place.address}</Text>
        <Text>{place.website}</Text>
        <Text>rating: {place.rating}</Text>
        <View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: place.latitude,
              longitude: place.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121}}>
            <MapView.Marker
              coordinate={{latitude: place.latitude,
              longitude: place.longitude}}
              title={place.name}/>
          </MapView>
        </View>
        <Text>Is this the place you are looking for?</Text>
        <Button
          onPress={this._storePlace}
          color='#48BBEC'
          title='Save'/>
      </View>
    )
  }
}

export default hook(ViewPlace)
