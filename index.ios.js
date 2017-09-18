'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { App } from './app/App.js'
import { Tester, TestHookStore } from 'cavy'
import SearchPlacesSpec from './specs/SearchPlacesSpec'
import firebase from 'firebase';
import Header from './components/Header';
import Button from './components/Button';
import Spinner from './components/Spinner';
import LoginForm from './components/LoginForm';
import SearchPage from './components/SearchPage.js';
import { API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

const testHookStore = new TestHookStore();

class Sqrl extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <SearchPage />
      )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render(){
    return (
      <Tester specs = {[SearchPlacesSpec]} store={testHookStore} waitTime={2000}>
        <App />
      </Tester>
    );
  }
}

AppRegistry.registerComponent('Sqrl', () => Sqrl);
