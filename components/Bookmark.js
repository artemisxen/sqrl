'use strict';

import React, { Component } from 'react';
import styles from "../styles/Styles.js";
import {Text, TextInput, View, TouchableHighlight} from 'react-native';
import { hook } from 'cavy';
import ViewBookmark from './ViewBookmark.js';


class Bookmark extends Component {

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('ViewBookmark', {savedPlace: this.props.task})}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
          <Text>{this.props.task.name}</Text>
          <Text>{this.props.task.address}</Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default hook(Bookmark)
