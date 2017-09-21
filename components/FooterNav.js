import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import firebase from 'firebase';

class FooterNav extends Component {

  render() {
    return (
        <Footer>
          <FooterTab>
          <Button vertical>
            <Icon name="pin" />
            <Text>Alerts</Text>
          </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("Search")}
            >
              <Icon name="add" />
              <Text>Add</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("BookmarkList")}
            >
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

export default FooterNav;
