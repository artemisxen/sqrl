'use strict';

import React, { Component } from 'react';
import styles from "../styles/Styles.js";
import {Text, TextInput, View, TouchableHighlight} from 'react-native';
import { hook } from 'cavy';

class Bookmark extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.task.name}</Text>
        <Text>{this.props.task.address}</Text>
      </View>
    );
  }
}

export default hook(Bookmark)
