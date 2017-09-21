'use strict';

import React, { Component } from 'react';
import { Text, TextInput, View, Button, ActivityIndicator, Image, AlertIOS } from 'react-native';
import styles from "../styles/Styles.js";
import MapView from 'react-native-maps';
import { hook } from 'cavy';
import FooterNav from './FooterNav';
import SearchPage from './SearchPage';
import BookmarkList from './BookmarkList';

class ViewBookmark extends Component {

  render() {
    const savedPlace = this.props.navigation.state.params.savedPlace
    return (
      <View style={styles.container}>
        <Text>{savedPlace.name}</Text>
        <Text>{savedPlace.address}</Text>
        <View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: savedPlace.latitude,
              longitude: savedPlace.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121}}>
            <MapView.Marker
              coordinate={{latitude: savedPlace.latitude,
              longitude: savedPlace.longitude}}
              title={savedPlace.name}/>
          </MapView>
        </View>
      </View>
    )
  }
}

export default hook(ViewBookmark)
