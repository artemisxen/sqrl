'use strict'
import React, { Component } from 'react';
import { Text, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';
import styles from "../styles/Styles.js";
import MapView from 'react-native-maps';
import { hook } from 'cavy';
import firebase from 'firebase';

class SavePlace extends Component {
  constructor(props){
    super(props);
    var itemsRef = firebase.database().ref();
    itemsRef.push({
      name:this.props.navigation.state.params.place.name,
      address:this.props.navigation.state.params.place.address,
      latitue: this.props.navigation.state.params.place.latitude,
      longitude:this.props.navigation.state.params.place.longitude
    })
  }

  render(){
    return(
      <View>
        <Text>Your place has been successfully saved!</Text>
      </View>
  )
}

}
export default hook(SavePlace)
