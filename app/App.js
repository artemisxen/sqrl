import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchPage from '../components/SearchPage';
import ViewPlace from '../components/ViewPlace';
import LoginForm from '../components/LoginForm';
import SavePlace from '../components/SavePlace'

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
  SavePlace: {
    screen: SavePlace,
    navigationOptions: {
      title: 'Save Place',
    },
  },
})
