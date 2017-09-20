import React from 'react';
import { StackNavigator } from 'react-navigation';
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
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Log In',
    },
  },
});
