'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text } from 'react-native';
import { Container, Content, Header, Button, Left, Body, Right, Title, Icon } from 'native-base';
import { App } from './app/App'
import { Tester, TestHookStore } from 'cavy'
import SearchPlacesSpec from './specs/SearchPlacesSpec'
import firebase from 'firebase';
import Spinner from './components/Spinner';
import LoginForm from './components/LoginForm';
import FooterNav from './components/FooterNav';
import Welcome from './components/Welcome';
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

  render() {
    switch (this.state.loggedIn) {
      case true:
      return (
            <Container>
              <App />
              <FooterNav />
            </Container>
      );
      case false:
        return (
            <LoginForm />
        );
      default:
        return (
            <Spinner size="large" />
        );
    }
  }
}

AppRegistry.registerComponent('Sqrl', () => Sqrl);
