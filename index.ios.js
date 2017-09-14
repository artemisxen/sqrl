'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import SearchPage from './components/SearchPage.js'
import ViewPlace from './components/ViewPlace.js'


class Sqrl extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Sqrl',
        component: SearchPage
      }}/>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
  flex: 1,
},
});

AppRegistry.registerComponent('Sqrl', () => Sqrl);
