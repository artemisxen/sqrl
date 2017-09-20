'use strict';

import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet,ListView} from 'react-native';
import styles from "../styles/Styles.js";
import MapView from 'react-native-maps';
import { hook } from 'cavy';
import firebase from 'firebase';
import Bookmark from './Bookmark.js';

class BookmarkList extends Component {
  constructor(props) {
    super(props);
    this.tasksRef = firebase.database().ref();
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource,
      markers: [],
    };
  }

  listenForTasks(tasksRef) {
  tasksRef.on('value', (dataSnapshot) => {
    var tasks = [];
    dataSnapshot.forEach((child) => {
      tasks.push({
        name: child.val().name,
        address: child.val().address,
        longitude: child.val().longitude,
        latitude: child.val().latitude,
        _key: child.key
      });
      this.state.markers.push({
        title: child.val().name,
        coordinates: {
          latitude: child.val().latitude,
          longitude: child.val().longitude,
        }
      });
    });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(tasks)
    });
  });
}

  componentDidMount() {
    this.listenForTasks(this.tasksRef);
  }

  _renderItem(task) {
    return (
      <Bookmark
      task={task}
      navigation={this.props.navigation}
      />
    );
  }

  test(){
    console.log(this.state.markers);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listView}/>
        <View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 51.51734030000001,
              longitude: -0.0732808,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            >
            {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
          </MapView>
        </View>
      </View>
    );
  }
}

export default hook(BookmarkList)
