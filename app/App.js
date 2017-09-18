import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchPage from '../components/SearchPage';
import ViewPlace from '../components/ViewPlace';

export const App = StackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: {
      title: 'SQRL',
    },
  },
  ViewPlace: {
    navigationOptions: {
      title: 'Place',
    },
    screen: ViewPlace,
  },
})
