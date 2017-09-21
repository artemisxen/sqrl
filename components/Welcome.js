import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, Dimensions } from 'react-native';
import { Container, Content, Text, Button, Card, CardItem } from 'native-base';
import LoginForm from '../components/LoginForm';

class WelcomeScreen extends Component {
  static navigationOptions = {
   title: 'Welcome',
  }

  render() {
    let {height, width} = Dimensions.get('window');
    return (
      <Container>
        <Content>
          <Card
          style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width }}
          >
            <CardItem>
              <Image
                source={require('../assets/img/logo.png')}
                style={{ width: 161, height: 62, marginTop: -125 }}
              />
            </CardItem>

            <CardItem>
              <Button
                bordered
                dark
                style={{ backgroundColor: '#ff5050' }}
                onPress={() => this.props.navigation.navigate('LoginForm')}
              >
                <Text style={{ color: '#ffffff' }}>
                  Login
                </Text>
              </Button>
            </CardItem>

          </Card>
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
