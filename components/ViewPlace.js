'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, Image, AlertIOS } from 'react-native';
import { Content, Card, CardItem, Text, Button, Body, H3 } from 'native-base';
import MapView from 'react-native-maps';
import { hook } from 'cavy';
import firebase from 'firebase';
import BookmarkList from './BookmarkList.js';
import FooterNav from './FooterNav';


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
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body style={{ alignItems: 'center'}}>
                <H3 ref={this.props.generateTestHook('ViewPlace.${this.props.place.name}')}>
                {place.name}
                </H3>
                <Text>{place.address}</Text>
                <Text>{place.website}</Text>
                <Text>Rating: {place.rating}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: 'center'}}>
                <MapView
                  style={{ width: 250, height: 250 }}
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
              </Body>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: 'center'}}>
                <Text>Is this the place you are looking for?</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button block onPress={this._storePlace}>
                  <Text>Save</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <FooterNav
          navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default hook(ViewPlace)
