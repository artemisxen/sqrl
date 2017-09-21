import React, { Component } from 'react';
import firebase from 'firebase';
import { Content, Card, CardItem, Form, Button, Item, Input, Text, Label } from 'native-base';
import Spinner from './Spinner';
var Firebase = require('firebase');

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button
        block
        bordered
        dark
        onPress={this.onButtonPress.bind(this)}
        style={{ backgroundColor: '#ff5050' }}
      >
        <Text style={{ color: '#ffffff' }}>Log in</Text>
      </Button>
    );
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem style={{ paddingTop: 60 }} />
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input
                  placeholder="user@gmail.com"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                placeholder="password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          <CardItem>
            <Text>
              {this.state.error}
            </Text>
          </CardItem>
          {this.renderButton()}
      </Card>
    </Content>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
