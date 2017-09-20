import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import firebase from 'firebase';

export default class FooterNav extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
          <Button vertical>
            <Icon name="pin" />
            <Text>Alerts</Text>
          </Button>
            <Button vertical>
              <Icon name="add" />
              <Text>Add</Text>
            </Button>
            <Button vertical active>
              <Icon active name="map" />
              <Text>Places</Text>
            </Button>
            <Button vertical onPress={() => firebase.auth().signOut()}>
              <Icon active name="log-out" />
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
