/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './src/components/pages/Home';
import CalendarPage from './src/components/pages/Calendar';
import LibraryPage from './src/components/pages/Library';
import MyPage from './src/components/pages/MyPage';
import {ROUTES} from './src/constants/route';
import Icon from './src/components/Icon';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
              <Icon
                iconType="barbell"
                width={size}
                height={size}
                fill={color}
              />
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
    </NavigationContainer>
  );
}

export default App;
