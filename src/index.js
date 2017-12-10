import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Login, Friends, Talks, Talk } from './views';

const MainTabNavigator = TabNavigator(
  {
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: '友だち一覧',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={`ios-people${!focused ? '-outline' : ''}`} size={26} style={{ color: tintColor }} />
        ),
      },
    },
    Talks: {
      screen: Talks,
      navigationOptions: {
        tabBarLabel: 'トーク一覧',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={`ios-chatboxes${!focused ? '-outline' : ''}`} size={26} style={{ color: tintColor }} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#f60',
    },
  }
);

export default StackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Main: { screen: MainTabNavigator },
  Talk: { screen: Talk },
});
