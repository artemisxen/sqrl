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
import { Tester, TestHookStore } from 'cavy'
import SearchPlacesSpec from './specs/SearchPlacesSpec'
const testHookStore = new TestHookStore();


class AppWrapper extends Component {
  render(){
    return (
      <Tester specs = {[SearchPlacesSpec]} store={testHookStore} waitTime={2000}>
      <Sqrl/>
      </Tester>
    )
  }
}

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

AppRegistry.registerComponent('Sqrl', () => AppWrapper);
