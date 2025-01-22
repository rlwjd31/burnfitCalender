import React from 'react';

import {ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';
import defaultStyles from './styles/defaultStyles.style';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <SafeAreaView style={defaultStyles.mainContainer}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

