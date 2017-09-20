'use strict';

import React, { Component } from 'react';
import { ListItem, Text, Button } from 'native-base';
import { hook } from 'cavy';

class Place extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    return (
      <ListItem button onPress={this._onPress}>
        <Text>{this.props.item.fullText}</Text>
      </ListItem>
    );
  }
}

export default hook(Place)
