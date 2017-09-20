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

class Sqrl extends Component {
  constructor() {
    super()
    this.state = { loggedIn: null, position: null };
    this.watchID = null
    this.places = null
    this.nearby = []
  }

  componentWillMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
      this.setState({position});

          this.places = firebase.database().ref().orderByChild('latitude').startAt(this.state.position.coords.latitude - 0.001).endAt(this.state.position.coords.latitude + 0.001).on("value", (snapshot) => {
            var trades = snapshot
            trades.forEach((child) => {

            if (child.val().latitude < this.state.position.coords.latitude + 0.001 && child.val().latitude > this.state.position.coords.latitude - 0.001) {
              console.log(child.val().name)
              this.nearby.push({
                name: child.val().name,
                longitude: child.val().longitude,
                latitude: child.val().latitude,
                _key: child.key
              })
              console.log(this.nearby)
            }
          })
        });

    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        console.log(this.state.position.coords.latitude);
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
      console.log(this.state.loggedIn);
      });
    }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
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
