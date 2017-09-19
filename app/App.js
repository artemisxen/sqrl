import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchPage from '../components/SearchPage';
import ViewPlace from '../components/ViewPlace';
import LoginForm from '../components/LoginForm';
import BookmarkList from '../components/BookmarkList.js';

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
  BookmarkList: {
    screen: BookmarkList,
    navigationOptions: {
      title: 'Bookmarks',
    },
  },
})
