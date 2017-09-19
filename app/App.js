import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchPage from '../components/SearchPage';
import ViewPlace from '../components/ViewPlace';
import LoginForm from '../components/LoginForm';
import BookmarkList from '../components/BookmarkList.js';
import ViewBookmark from '../components/ViewBookmark.js';
import Bookmark from '../components/Bookmark.js';


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
})
