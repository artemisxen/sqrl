import React, { Component } from 'react';
import { Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';

class Welcome extends Component {
  render() {
    return (
        <Content
          contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 40,
          paddingHorizontal: 10 }}
        >
          <Card>
            <CardItem>
              <Text>
                Welcome to Sqrl
              </Text>
            </CardItem>
          </Card>
          <Button>
            <Text> Sign Up </Text>
          </Button>
        </Content>
    );
  }
}
export default Welcome;
