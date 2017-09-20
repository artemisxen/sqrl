import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';
import LoginForm from '../components/LoginForm';

class WelcomeScreen extends Component {
  static navigationOptions = {
   title: 'Welcome',
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Text>
                Welcome to Sqrl
              </Text>
            </CardItem>
          </Card>
          <Button block onPress={() => this.props.navigation.navigate('LoginForm')}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const WelcomeNav = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  LoginForm: {
    screen: LoginForm,
  },
});

export default WelcomeNav;
