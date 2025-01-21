/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './src/components/pages/Home';
import CalendarPage from './src/components/pages/Calendar';
import LibraryPage from './src/components/pages/Library';
import MyPage from './src/components/pages/MyPage';
import {ROUTES} from './src/constants/route';
import Home from './src/assets/icons/home.svg';
import Calendar from './src/assets/icons/calendar.svg';
import Barbell from './src/assets/icons/barbell.svg';
import User from './src/assets/icons/user.svg';

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
        {/* @FIXME: 👇 Home, Calendar에 color가 fill이 제대로 전달되지 않음 */}
        <Tab.Screen
          name={ROUTES.HOME}
          component={HomePage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Home width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTES.CALENDER}
          component={CalendarPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Calendar width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTES.LIBRARY}
          component={LibraryPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Barbell width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTES.MyPage}
          component={MyPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <User width={size} height={size} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
