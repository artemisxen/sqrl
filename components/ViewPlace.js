'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, Image, AlertIOS } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MapView from 'react-native-maps';
import { hook } from 'cavy';
import firebase from 'firebase';


class ViewPlace extends Component {
  constructor(props){
    super(props);
    var itemsRef = firebase.database().ref();
    console.log(itemsRef);
  }

  _storePlace = () => {
    const place = this.props.navigation.state.params.place
    firebase.database().ref().push({
    name:place.name,
    address:place.address,
    latitue:place.latitude,
    longitude:place.longitude
  })
  AlertIOS.alert('Your place has been successfully saved!')
  }

  render() {
    const place = this.props.navigation.state.params.place
    return (
      <Card>
        <CardItem>
          <Body>
            <Text ref={this.props.generateTestHook('ViewPlace.${this.props.place.name}')}>{place.name}</Text>
            <Text>{place.address}</Text>
            <Text>{place.website}</Text>
            <Text>rating: {place.rating}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <MapView
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: 250,
              height: 250
            }}
            initialRegion={{
              latitude: place.latitude,
              longitude: place.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121}}>
            <MapView.Marker
              coordinate={{latitude: place.latitude,
              longitude: place.longitude}}
              title={place.name} />
          </MapView>
        </CardItem>
        <CardItem>
          <Text>Is this the place you are looking for?</Text>
          <Button onPress={this._storePlace}>
            <Text>Save</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default hook(ViewPlace)
