import React from 'react';

import {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import defaultStyles from './styles/defaultStyles.style';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
  },
});
