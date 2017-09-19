'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { App } from './app/App'
import { Tester, TestHookStore } from 'cavy'
import SearchPlacesSpec from './specs/SearchPlacesSpec'
import firebase from 'firebase';
import { Container, Content } from 'native-base';
import HeaderBar from './components/HeaderBar';
import Button from './components/Button';
import Spinner from './components/Spinner';
import LoginForm from './components/LoginForm';
import SearchPage from './components/SearchPage';
import FooterNav from './components/FooterNav';
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
        console.log(user.email);
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
      return (
          <Container>
            <HeaderBar />
            <Content>
              <App />
            </Content>
            <FooterNav />
          </Container>
      )
      case false:
        return (
          <Container>
            <LoginForm />
          </Container>
        )
      default:
        return (
          <Container>
            <Spinner size="large" />
          </Container>
        )
    }
  }

  // render(){
  //   return (
  //     <Tester specs = {[SearchPlacesSpec]} store={testHookStore} waitTime={2000}>
  //       <App />
  //     </Tester>
  //   );
  // }
}

AppRegistry.registerComponent('Sqrl', () => Sqrl);
