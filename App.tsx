import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './src/components/pages/Home';
import CalendarPage from './src/components/pages/Calendar';
import LibraryPage from './src/components/pages/Library';
import MyPage from './src/components/pages/MyPage';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Calendar" component={CalendarPage} />
        <Tab.Screen name="Library" component={LibraryPage} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
