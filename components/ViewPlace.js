'use strict';

import React, { Component } from 'react';
import { Text, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';
import styles from "../styles/Styles.js";
import MapView from 'react-native-maps';
import { hook } from 'cavy';

class ViewPlace extends Component {
  render() {
    console.log(this.props.navigation.state.params.place);
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
           longitudeDelta: 0.0121,
          }}
          >
          <MapView.Marker
          coordinate={{latitude: place.latitude,
            longitude: place.longitude}}
            title={place.name}
            />
            </MapView>
        </View>
        <Text> Is this the place you are looking for?</Text>
        <Button
          onPress={() => {}}
          color='#48BBEC'
          title='Save'/>
        <Button
          onPress={() => {}}
          color='#48BBEC'
          title='Go back'/>
      </View>
    )
  }
}

export default hook(ViewPlace)
