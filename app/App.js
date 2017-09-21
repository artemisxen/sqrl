'use strict';

import React from 'react';
import { StackNavigator } from 'react-navigation';
import FooterNav from '../components/FooterNav';
import Welcome from '../components/Welcome';
import SearchPage from '../components/SearchPage';
import ViewPlace from '../components/ViewPlace';
import LoginForm from '../components/LoginForm';
import BookmarkList from '../components/BookmarkList';
import ViewBookmark from '../components/ViewBookmark';
import Bookmark from '../components/Bookmark';
import Alerts from '../components/Alerts';

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
  ViewBookmark: {
    screen: ViewBookmark,
    navigationOptions: {
      title: 'Bookmark',
    },
  },
  Alerts: {
    screen: Alerts,
    navigationOptions: {
      title: 'Alerts',
    },
  },
});
