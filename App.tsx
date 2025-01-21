/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
}

function CalendarPage() {
  return (
    <View>
      <Text>CalendarPage</Text>
    </View>
  );
}

function LibraryPage() {
  return (
    <View>
      <Text>LibraryPage</Text>
    </View>
  );
}

function MyPage() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}

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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
