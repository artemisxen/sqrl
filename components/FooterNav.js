import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
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
            <Button vertical>
              <Icon name="log-out" />
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
