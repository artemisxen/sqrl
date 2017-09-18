'use strict';

import React, { Component } from 'react';
import { Text, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';
import styles from "../styles/Styles.js";
import { hook } from 'cavy';

class ViewPlace extends Component {
  render() {
    const place = this.props.navigation.state.params.place
    return (
      <View style={styles.container}>
        <Text ref={this.props.generateTestHook('ViewPlace.${this.props.place.name}')}>{place.name}</Text>
        <Text>{place.address}</Text>
        <Text>{place.website}</Text>
        <Text>rating: {place.rating}</Text>
        <Button
          onPress={() => {}}
          color='#48BBEC'
          title='Save'/>
      </View>
    )
  }
}

export default hook(ViewPlace)
