'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class SearchPage extends Component {
  render() {
    return <Text style={styles.description}>I am looking for...</Text>
  }
}

class Sqrl extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'SQRL',
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
