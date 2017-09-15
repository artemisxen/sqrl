'use strict';

import React, { Component } from 'react';
import styles from "../styles/Styles.js";
import {Text, TextInput, View, TouchableHighlight} from 'react-native';
import { hook } from 'cavy';

class Place extends Component {

  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>{item.fullText}</Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default hook(Place)
