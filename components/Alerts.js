'use strict';

import React from 'react';
import { Text, Card, CardItem, Content, Container } from 'native-base';
import FooterNav from './FooterNav';

const Alerts = () => {
  return (
  <Container>
    <Content>
      <Card>
        <CardItem>
          <Text>This is where the alerts will go</Text>
        </CardItem>
      </Card>
    </Content>
    <FooterNav
      navigation={this.props.navigation} />
    </Container>
  );
};

export default Alerts;
