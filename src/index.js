import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Login, Friends, Talks, Talk } from './views';

const MainTabNavigator = TabNavigator({
  Friends: { screen: Friends, navigationOptions: {} },
  Talks: { screen: Talks },
});

export default StackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Main: { screen: MainTabNavigator },
  Talk: { screen: Talk },
});
