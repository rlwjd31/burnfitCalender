/* eslint-disable react/no-unstable-nested-components */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomePage from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import {ROUTES} from '../constants/route';
import Icon from './Icon';
import LibraryPage from './pages/Library';
import MyPage from './pages/MyPage';

export default function BottomTabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.CALENDER}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3fc3e4',
        tabBarInactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomePage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon iconType="home" width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CALENDER}
        component={CalendarPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              iconType="calendar"
              width={size}
              height={size}
              fill="#fff"
              stroke={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.LIBRARY}
        component={LibraryPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon iconType="barbell" width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MyPage}
        component={MyPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon iconType="user" width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
