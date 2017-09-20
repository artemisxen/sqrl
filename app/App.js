import React from 'react';
import { StackNavigator } from 'react-navigation';
import Welcome from '../components/Welcome';
import SearchPage from '../components/SearchPage';
import ViewPlace from '../components/ViewPlace';
import LoginForm from '../components/LoginForm';

export const App = StackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: {
      title: 'Search',
    },
  },
  ViewPlace: {
    screen: ViewPlace,
    navigationOptions: {
      title: 'Place',
    },
  },
});
