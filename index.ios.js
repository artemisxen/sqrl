'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { App } from './app/App.js'
import { Tester, TestHookStore } from 'cavy'
import geofire from 'geofire';
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
  APP_ID
} from 'react-native-dotenv';

const testHookStore = new TestHookStore();
const firebaseApp = firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    });

const geofireRef = new geofire(firebase.database().ref(APP_ID))

class Sqrl extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        console.log(firebaseApp);
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
      console.log(this.state.loggedIn);
    });
  }

  render() {
    switch (this.state.loggedIn) {
      case true:
      return <App />
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

}

AppRegistry.registerComponent('Sqrl', () => Sqrl);
