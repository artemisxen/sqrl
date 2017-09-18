'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { App } from './app/App.js'
import { Tester, TestHookStore } from 'cavy'
import SearchPlacesSpec from './specs/SearchPlacesSpec'

const testHookStore = new TestHookStore();

class Sqrl extends Component {
  render(){
    return (
      <Tester specs = {[SearchPlacesSpec]} store={testHookStore} waitTime={2000}>
      <App />
      </Tester>
    );
  }
}

AppRegistry.registerComponent('Sqrl', () => Sqrl);
