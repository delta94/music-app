import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import Home from '../page/home';
import Login from '../page/login';
import LyricPlayer from '../page/lyric';
import Player from '../page/player';
import {navigationStyles} from '../theme/dark';

const Stack = createStackNavigator();

const StackNavigator: FC = () => (
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="float"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: navigationStyles.header.backgroundColor},
    }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{headerTintColor: navigationStyles.header.color}}
    />
    <Stack.Screen
      name="Player"
      component={Player}
      options={{headerTintColor: navigationStyles.header.color}}
    />
    <Stack.Screen
      name="Lyric"
      component={LyricPlayer}
      options={{headerTintColor: navigationStyles.header.color}}
    />
  </Stack.Navigator>
);

export default StackNavigator;
